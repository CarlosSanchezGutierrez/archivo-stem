import type { TimelineEvent } from "@/types/archive";

export function PersonTimeline({ timeline }: { timeline: TimelineEvent[] }) {
  return (
    <section className="bg-[#061A2F] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
            Línea temporal
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
            Cómo se construye una trayectoria STEM durante décadas.
          </h2>
        </div>

        <div className="mt-14 space-y-6">
          {timeline.map((event, index) => (
            <div
              key={`${event.year}-${event.title}`}
              className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[160px_1fr]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/25 bg-blue-500/10 text-sm font-semibold text-blue-100">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">{event.year}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-blue-300">
                    {event.category}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white">{event.title}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
