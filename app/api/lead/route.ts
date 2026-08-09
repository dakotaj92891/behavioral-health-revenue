import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ['facilityName', 'contactName', 'email', 'beds', 'payers'];
    const missing = required.filter((key) => !String(body?.[key] ?? '').trim());

    if (missing.length) {
      return NextResponse.json({ error: 'Please complete the required fields.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.LEAD_TO_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return NextResponse.json({ error: 'Lead delivery is not configured yet.' }, { status: 503 });
    }

    const message = [
      'NEW BEHAVIORAL HEALTH REVENUE SCREENING REQUEST',
      '',
      `Facility: ${body.facilityName}`,
      `Contact: ${body.contactName}`,
      `Email: ${body.email}`,
      `Phone: ${body.phone || 'Not provided'}`,
      `DTX / RTC beds: ${body.beds}`,
      `Primary payers: ${body.payers}`,
      `Biggest concern: ${body.concern || 'Not provided'}`,
    ].join('\n');

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: body.email,
        subject: `Revenue screening request — ${body.facilityName}`,
        text: message,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'We could not deliver the request. Please try again.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'We could not process the request. Please try again.' }, { status: 500 });
  }
}
