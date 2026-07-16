export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 px-6 py-16">
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-sky-600">
          Pathway Copilot
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          Understand where your IBD pathway is stuck.
        </h1>
      </div>
      <p className="text-lg leading-relaxed text-slate-600">
        UK NHS IBD patients wait a median of{" "}
        <span className="font-semibold text-slate-900">76 days</span> from
        biologics referral to first dose. Pathway Copilot reconstructs your
        pathway state from your own NHS letters and helps you draft
        evidence-backed, administrative escalations.
      </p>
      <p className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-500">
        This is scaffolding for the demo. The extractor, deterministic state
        machine, vitals joiner, drafter and UI are built in later tickets.
        Nothing here is clinical advice.
      </p>
    </main>
  );
}
