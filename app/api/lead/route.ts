import { createHash } from 'node:crypto';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MAX_BODY_BYTES = 16_000;
const DUPLICATE_WINDOW_MS = 10 * 60 * 1000;
const recentSubmissions = new Map<string, number>();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\-\s.\d]{7,25}$/;
const PHI_PATTERNS = [
  /\b(?:mrn|medical record(?: number)?|patient record|patient chart|chart note|progress note|face ?sheet)\b/i,
  /\b(?:social security|ssn)\b.{0,20}\b\d{3}[- ]?\d{2}[- ]?\d{4}\b/i,
  /\b(?:member|subscriber|policy)\s*(?:id|number|#)\b/i,
  /\b(?:date of birth|dob)\b/i,
  /\bpatient\s*(?:name|id|identifier)\b/i,
  /\b\d{3}[- ]?\d{2}[- ]?\d{4}\b/,
];

function text(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function containsObviousPhi(values: string[]) {
  return values.some((value) => PHI_PATTERNS.some((pattern) => pattern.test(value)));
}

function json(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });
}

function cleanupDuplicates(now: number) {
  for (const [key, timestamp] of recentSubmissions) {
    if (now - timestamp > DUPLICATE_WINDOW_MS) recentSubmissions.delete(key);
  }
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get('content-length') ?? 0);
    if (contentLength > MAX_BODY_BYTES) {
      return json({ ok: false, error: 'Request is too large.' }, 413);
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return json({ ok: false, error: 'Invalid request.' }, 400);
    }

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return json({ ok: false, error: 'Invalid request.' }, 400);
    }

    const input = body as Record<string, unknown>;
    const facilityName = text(input.facilityName, 200);
    const contactName = text(input.contactName, 200);
    const email = text(input.email, 254).toLowerCase();
    const phone = text(input.phone, 40);
    const beds = text(input.beds, 10);
    const payers = text(input.payers, 500);
    const concern = text(input.concern, 2000);

    const missing = [
      ['facility name', facilityName],
      ['contact name', contactName],
      ['work email', email],
      ['DTX / RTC beds', beds],
      ['primary payers', payers],
    ].filter(([, value]) => !value).map(([label]) => label);

    if (missing.length) {
      return json({ ok: false, error: `Please complete: ${missing.join(', ')}.` }, 400);
    }

    if (!EMAIL_RE.test(email)) {
      return json({ ok: false, error: 'Please provide a valid work email address.' }, 400);
    }

    if (phone && !PHONE_RE.test(phone)) {
      return json({ ok: false, error: 'Please provide a valid phone number or leave it blank.' }, 400);
    }

    if (!/^\d{1,4}$/.test(beds) || Number(beds) < 1 || Number(beds) > 5000) {
      return json({ ok: false, error: 'Please provide a valid bed count.' }, 400);
    }

    if (containsObviousPhi([facilityName, contactName, email, phone, payers, concern])) {
      return json({
        ok: false,
        error: 'Please remove patient-identifying or medical-record information. This form is for facility-level inquiries only.',
      }, 400);
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.LEAD_TO_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return json({ ok: false, error: 'Lead delivery is not configured yet.' }, 503);
    }

    const now = Date.now();
    cleanupDuplicates(now);

    const fingerprint = createHash('sha256')
      .update([facilityName, contactName, email, phone, beds, payers, concern].join('|').toLowerCase())
      .digest('hex');

    if (recentSubmissions.has(fingerprint)) {
      return json({ ok: false, error: 'This request was already submitted recently.' }, 409);
    }

    const leadText = [
      'NEW BEHAVIORAL HEALTH REVENUE SCREENING REQUEST',
      '',
      `Facility: ${facilityName}`,
      `Contact: ${contactName}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `DTX / RTC beds: ${beds}`,
      `Primary payers: ${payers}`,
      `Biggest concern: ${concern || 'Not provided'}`,
    ].join('\n');

    const leadResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Revenue screening request — ${facilityName}`,
        text: leadText,
      }),
    });

    if (!leadResponse.ok) {
      return json({ ok: false, error: 'We could not deliver the request. Please try again.' }, 502);
    }

    recentSubmissions.set(fingerprint, now);

    const confirmationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [email],
        reply_to: to,
        subject: 'We received your revenue screening request',
        text: [
          `Hi ${contactName},`,
          '',
          `We received the revenue screening request for ${facilityName}.`,
          '',
          'We will review the facility-level information you submitted and follow up using this email address.',
          '',
          'Please do not reply with patient-identifying information, medical records, or other PHI.',
          '',
          'Behavioral Health Revenue Intelligence',
        ].join('\n'),
      }),
    });

    if (!confirmationResponse.ok) {
      return json({ ok: true, confirmationSent: false }, 200);
    }

    return json({ ok: true, confirmationSent: true }, 200);
  } catch {
    return json({ ok: false, error: 'We could not process the request. Please try again.' }, 500);
  }
}
