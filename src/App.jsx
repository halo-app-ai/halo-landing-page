export default function HaloLandingPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] text-[#1f2937]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_38%)]" />
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 text-center md:px-10">
          <div className="mb-8 inline-flex items-center rounded-full border border-[#d4af37]/30 bg-white/70 px-4 py-2 text-sm tracking-[0.28em] text-[#8b7355] shadow-sm backdrop-blur">
            ALWAYS WITH YOU
          </div>

          <div className="mb-8 h-24 w-24 rounded-[2rem] bg-white shadow-[0_20px_80px_rgba(212,175,55,0.18)] ring-1 ring-[#d4af37]/20" />

          <h1 className="max-w-5xl text-5xl font-light leading-tight tracking-[0.04em] text-[#b8871b] md:text-7xl">
            Trusted and instant support when it matters most.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#4b5563] md:text-xl">
            HALO is a new kind of emotional support companion — designed to help people
            move from overwhelm to steadiness, and from coping to real inner strength.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#waitlist"
              className="rounded-full bg-[#d4af37] px-7 py-4 text-sm font-medium tracking-[0.18em] text-white shadow-lg shadow-[#d4af37]/25 transition hover:-translate-y-0.5"
            >
              JOIN EARLY ACCESS
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-[#d4af37]/30 bg-white/80 px-7 py-4 text-sm font-medium tracking-[0.18em] text-[#8b7355] transition hover:bg-white"
            >
              SEE HOW HALO WORKS
            </a>
          </div>

          <div className="mt-16 grid max-w-5xl gap-4 text-left md:grid-cols-3">
            {[
              'Real-time support in moments of distress',
              'Emotionally safe guidance that adapts to your state',
              'Long-term growth through memory, pattern recognition, and trust',
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/70 bg-white/70 p-6 text-sm leading-7 text-[#4b5563] shadow-sm backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10" id="how-it-works">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm tracking-[0.3em] text-[#8b7355]">WHY HALO</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-light leading-tight text-[#1f2937] md:text-5xl">
              The missing layer between distress, recovery, and growth.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4b5563]">
              Most tools break down at the exact moment people need help most. HALO is
              designed for the moment the chest tightens, the mind starts spiralling, and
              support is needed now — not next week.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d4af37]/15 bg-white p-8 shadow-[0_20px_60px_rgba(31,41,55,0.06)]">
            <div className="space-y-8">
              {[
                {
                  title: '1. Regulate first',
                  body: 'HALO helps the nervous system settle before asking for reflection, decisions, or insight.',
                },
                {
                  title: '2. Understand the pattern',
                  body: 'It detects what is happening underneath the moment and responds with emotional precision.',
                },
                {
                  title: '3. Build strength over time',
                  body: 'Small wins compound into trust, resilience, and a more grounded sense of self.',
                },
              ].map((step) => (
                <div key={step.title}>
                  <h3 className="text-xl font-medium text-[#b8871b]">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#4b5563]">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="rounded-[2rem] border border-[#d4af37]/15 bg-[#1f2937] px-8 py-12 text-white shadow-[0_30px_100px_rgba(31,41,55,0.18)] md:px-12">
          <p className="text-sm tracking-[0.3em] text-[#e7c96c]">THE EXPERIENCE</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-light leading-tight md:text-5xl">
            HALO should feel like “thank God HALO is here” in website form.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              'Immediate emotional attunement',
              'Premium calm design with zero threat signals',
              'A companion presence, not just another tool',
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-base leading-7 text-white/80">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: 'Emotionally safe by design',
              body: 'Support is shaped around nervous-system safety, not generic chatbot behaviour.',
            },
            {
              title: 'State-aware intelligence',
              body: 'HALO responds differently when someone is overwhelmed, reflective, grieving, or growth-ready.',
            },
            {
              title: 'Continuity that deepens trust',
              body: 'The system remembers what helps, so support becomes more personal and more effective over time.',
            },
            {
              title: 'A category-defining product',
              body: 'Not therapy. Not meditation. Not coaching. A new layer of personal emotional infrastructure.',
            },
          ].map((card) => (
            <div key={card.title} className="rounded-[2rem] border border-[#d4af37]/15 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-medium text-[#1f2937]">{card.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#4b5563]">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 md:px-10" id="waitlist">
        <div className="rounded-[2.25rem] border border-[#d4af37]/20 bg-white px-8 py-12 text-center shadow-[0_24px_80px_rgba(212,175,55,0.12)] md:px-12">
          <p className="text-sm tracking-[0.3em] text-[#8b7355]">EARLY ACCESS</p>
          <h2 className="mt-4 text-4xl font-light leading-tight text-[#1f2937] md:text-5xl">
            Be first to experience HALO.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4b5563]">
            Join the early waitlist for launch updates, private previews, and first access to a
            new kind of support companion.
          </p>

          <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-full border border-[#d4af37]/20 bg-[#f8f6f1] px-6 text-base text-[#1f2937] outline-none ring-0 placeholder:text-[#9ca3af]"
            />
            <button
              type="submit"
              className="h-14 rounded-full bg-[#d4af37] px-8 text-sm font-medium tracking-[0.18em] text-white shadow-lg shadow-[#d4af37]/20 transition hover:-translate-y-0.5"
            >
              REQUEST ACCESS
            </button>
          </form>

          <p className="mt-5 text-sm text-[#6b7280]">
            Premium emotional support. Calm design. Built for real moments that matter.
          </p>
        </div>
      </section>

      <footer className="border-t border-[#d4af37]/10 px-6 py-10 text-center text-sm tracking-[0.18em] text-[#8b7355] md:px-10">
        HALO — ALWAYS WITH YOU
      </footer>
    </main>
  );
}
