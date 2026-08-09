const pains = [
  'Denied days that should have been paid',
  'Missing or weak medical-necessity documentation',
  'Authorization gaps and missed concurrent reviews',
  'Claims that were coded, submitted, and still underpaid',
  'A/R that keeps growing while cash stays trapped',
];

const services = [
  {
    title: 'Free Revenue Screening',
    copy: 'A limited review to identify obvious leakage and determine whether a deeper audit is worth pursuing.',
    cta: 'Request Screening',
  },
  {
    title: 'Comprehensive Audit',
    copy: 'A deeper analysis of claims, authorizations, clinical documentation, denials, underpayments, and workflow failures.',
    cta: 'Request Proposal',
  },
  {
    title: 'Performance-Based Recovery',
    copy: 'For qualified engagements, we can structure compensation around additional dollars actually collected.',
    cta: 'Discuss Recovery Model',
  },
];

const workflow = [
  'Clinical presentation',
  'Diagnosis',
  'Medical necessity',
  'Level of care',
  'Treatment plan',
  'Interventions',
  'Patient response',
  'Continued-stay rationale',
  'Authorization',
  'Coding',
  'Claim',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Behavioral Health Revenue Recovery</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              You delivered the care.
              <span className="block text-cyan-300">We find out why you were not paid for all of it.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Built for RTC, DTX, PHP, and IOP providers dealing with denials, authorization failures, documentation gaps, and underpayments in 2026.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="rounded-full bg-cyan-300 px-6 py-3 font-medium text-slate-950" href="#audit">Request a Free Revenue Audit</a>
              <a className="rounded-full border border-slate-700 px-6 py-3 font-medium text-white" href="#model">See the Documentation Model</a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-cyan-950/30">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">What owners are losing</p>
            <div className="mt-5 space-y-3">
              {pains.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
                <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
                <p className="mt-4 text-slate-300">{service.copy}</p>
                <button className="mt-6 rounded-full border border-cyan-300 px-5 py-2 text-sm font-medium text-cyan-300">
                  {service.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8" id="audit">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">2026 behavioral health billing pressure</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">The problem is not just billing.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Money is often lost before the claim is ever submitted. Weak documentation, incomplete authorization trails, inconsistent medical-necessity support, and payer-specific requirements can all block reimbursement.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Revenue chain</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {['Patient', 'Clinical record', 'Authorization', 'Coding', 'Claim', 'Payment'].map((step) => (
                <div key={step} className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-4 text-center text-sm text-slate-200">
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/40 py-20" id="model">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Documentation and coding intelligence</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A new way to run behavioral health documentation.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            The objective is simple: clinical documentation, authorization logic, and coding should tell the same story. Not fabricated. Not padded. Structured so the record supports the level of care actually provided.
          </p>

          <div className="mt-10 grid gap-3 md:grid-cols-3 lg:grid-cols-4">
            {workflow.map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">0{index + 1}</p>
                <p className="mt-3 text-sm font-medium text-slate-100">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Start here</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Request a confidential review of your facility.</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            We review your billing environment, identify likely leakage, and determine the best audit structure for your facility.
          </p>
          <form className="mt-8 grid gap-4 md:grid-cols-2">
            {['Facility name', 'Contact name', 'Email', 'Phone', 'Beds / census', 'Primary payers'].map((label) => (
              <input key={label} placeholder={label} className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500" />
            ))}
            <textarea placeholder="Biggest billing problem" className="md:col-span-2 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500" rows={4} />
            <button className="md:col-span-2 rounded-full bg-cyan-300 px-6 py-3 font-medium text-slate-950">Submit for Review</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-10 text-center text-sm text-slate-500">
        Behavioral Health Revenue Recovery. For marketing and operational review only. Clinical documentation should accurately reflect services actually provided.
      </footer>
    </main>
  );
}
