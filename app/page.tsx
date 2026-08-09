const problems = [
  'Denied treatment days',
  'Authorization gaps',
  'Medical-necessity weaknesses',
  'Underpaid claims',
  'A/R that keeps aging',
];

const services = [
  {
    number: '01',
    title: 'Revenue Screening',
    copy: 'A focused first look at your claims, denials, authorizations, and payment patterns.',
    cta: 'Start with a free screen',
  },
  {
    number: '02',
    title: 'Forensic Audit',
    copy: 'A deeper review designed to quantify leakage, recovery opportunities, and process failures.',
    cta: 'Request an audit',
  },
  {
    number: '03',
    title: 'Recovery + Prevention',
    copy: 'Pursue qualified recovery opportunities while rebuilding the workflow that created the leakage.',
    cta: 'Talk about recovery',
  },
];

const workflow = [
  'Clinical presentation',
  'Diagnosis & severity',
  'Medical necessity',
  'Level of care',
  'Treatment plan',
  'Interventions',
  'Response to treatment',
  'Continued-stay rationale',
  'Authorization',
  'Coding',
  'Claim',
  'Payment',
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070b] text-slate-100">
      <nav className="sticky top-0 z-30 border-b border-white/10 bg-[#05070b]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-300 font-black text-slate-950">R</span>
            <span className="text-sm font-semibold tracking-wide text-white">BEHAVIORAL HEALTH REVENUE</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a href="#problem" className="transition hover:text-white">The problem</a>
            <a href="#audit" className="transition hover:text-white">Audit</a>
            <a href="#model" className="transition hover:text-white">Documentation model</a>
          </div>
          <a href="#contact" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-200">Request review</a>
        </div>
      </nav>

      <section id="top" className="noise relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(45,212,191,.12),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.22em] text-teal-200">
              2026 Revenue Intelligence · DTX + RTC
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-.045em] text-white sm:text-6xl lg:text-8xl">
              You delivered the care.
              <span className="mt-3 block text-teal-300">Now find the money you didn't collect.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              We audit the chain between clinical documentation, medical necessity, authorization, coding, claims, and payment to find where legitimate revenue is being lost.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-full bg-teal-300 px-7 py-4 text-center text-sm font-bold text-slate-950 shadow-[0_0_40px_rgba(45,212,191,.18)] transition hover:bg-teal-200">Request a free revenue screening</a>
              <a href="#audit" className="rounded-full border border-white/15 bg-white/[.03] px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/[.07]">See what we audit</a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[.18em] text-slate-500">
              <span>Residential</span><span>Detox</span><span>PHP</span><span>IOP</span><span>Behavioral Health</span>
            </div>
          </div>

          <div className="glow glass self-end rounded-[28px] border border-white/10 p-7 lg:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.2em] text-slate-500">Revenue leakage map</p>
                <p className="mt-1 text-sm text-slate-300">Where payment can break</p>
              </div>
              <span className="rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-200">Audit</span>
            </div>
            <div className="mt-6 space-y-2">
              {problems.map((problem, index) => (
                <div key={problem} className="group flex items-center gap-4 rounded-2xl border border-white/[.07] bg-white/[.025] px-4 py-4 transition hover:border-teal-300/30 hover:bg-teal-300/[.04]">
                  <span className="text-xs font-mono text-slate-600">0{index + 1}</span>
                  <span className="text-sm font-medium text-slate-200">{problem}</span>
                  <span className="ml-auto text-slate-600 transition group-hover:text-teal-300">→</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white/[.035] p-4">
              <p className="text-xs leading-5 text-slate-500">The goal isn't to manufacture documentation or chase artificial reimbursement. It's to identify where the record, authorization, claim, or payment process failed to capture care that was actually provided.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="border-b border-white/10 bg-[#080b10]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-teal-300">The 2026 problem</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Billing is only the last step.</h2>
            </div>
            <div>
              <p className="text-xl leading-9 text-slate-300">A clean claim cannot rescue a broken revenue chain. In behavioral health, reimbursement can be affected long before the claim reaches the payer.</p>
              <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ['01', 'Documentation', 'Does the record clearly establish the patient’s documented needs and the care actually delivered?'],
                  ['02', 'Authorization', 'Do dates, level of care, concurrent reviews, and supporting records line up?'],
                  ['03', 'Coding', 'Does the code set accurately reflect the documented service and setting?'],
                  ['04', 'Claims', 'Are claims clean, timely, and consistent with the underlying record?'],
                  ['05', 'Payment', 'Did the payer actually reimburse what the contract and claim support?'],
                  ['06', 'Recovery', 'Are denials, reductions, and underpayments being systematically worked?'],
                ].map(([num, title, copy]) => (
                  <div key={num} className="bg-[#080b10] p-6">
                    <span className="font-mono text-xs text-teal-300">{num}</span>
                    <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="audit" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.25em] text-teal-300">What we do</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Forensic revenue auditing for behavioral health.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">Start small, prove the opportunity, then decide how far you want to go.</p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.number} className="group rounded-[26px] border border-white/10 bg-white/[.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-teal-300/30 hover:bg-white/[.04]">
                <span className="font-mono text-xs text-teal-300">{service.number}</span>
                <h3 className="mt-14 text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-500">{service.copy}</p>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">{service.cta} <span className="text-teal-300 transition group-hover:translate-x-1">→</span></a>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[26px] border border-teal-300/15 bg-teal-300/[.035] p-7">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div><p className="font-semibold text-white">Performance-based recovery may be available.</p><p className="mt-1 text-sm text-slate-500">For qualified engagements, compensation can be structured around additional dollars actually collected, subject to the engagement and applicable requirements.</p></div>
              <a href="#contact" className="shrink-0 rounded-full border border-teal-300/30 px-5 py-2.5 text-sm font-semibold text-teal-200">Discuss the model</a>
            </div>
          </div>
        </div>
      </section>

      <section id="model" className="border-b border-white/10 bg-[#080b10]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-teal-300">Documentation intelligence</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">The record should tell the same story as the claim.</h2>
              <p className="mt-6 text-base leading-7 text-slate-500">We are building a new behavioral-health documentation and coding workflow around clinical truth, medical necessity, level-of-care rationale, payer requirements, and billing consistency.</p>
              <p className="mt-5 text-sm leading-6 text-slate-500">Not fabricated. Not padded. The system is designed to help teams identify missing or inconsistent information before it becomes a denial.</p>
            </div>
            <div>
              <div className="mb-5 flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[.2em] text-slate-500">Revenue chain</span><span className="text-xs text-teal-300">01 — 12</span></div>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {workflow.map((step, index) => (
                  <div key={step} className="flex min-h-[92px] flex-col justify-between rounded-2xl border border-white/10 bg-[#05070b] p-4">
                    <span className="font-mono text-[10px] text-slate-600">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-medium text-slate-200">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(45,212,191,.1),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-teal-300">Start here</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Let's find out where your revenue is leaking.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-500">Tell us about the facility. We’ll determine whether a free screening, comprehensive audit, or recovery engagement makes the most sense.</p>
            </div>
            <form className="glass rounded-[28px] border border-white/10 p-7 lg:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {['Facility name', 'Contact name', 'Work email', 'Phone', 'DTX / RTC beds', 'Primary payers'].map((label) => (
                  <input key={label} placeholder={label} className="rounded-xl border border-white/10 bg-white/[.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-teal-300/50 focus:bg-white/[.06]" />
                ))}
                <textarea placeholder="What is your biggest revenue or billing concern?" rows={4} className="sm:col-span-2 rounded-xl border border-white/10 bg-white/[.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-teal-300/50 focus:bg-white/[.06]" />
                <button type="button" className="sm:col-span-2 rounded-xl bg-teal-300 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-teal-200">Request confidential review →</button>
              </div>
              <p className="mt-4 text-center text-[11px] leading-5 text-slate-600">Do not submit patient-identifying information or PHI through this public form.</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>Behavioral Health Revenue Recovery</span>
          <span>Clinical documentation should accurately reflect services actually provided.</span>
        </div>
      </footer>
    </main>
  );
}
