import type { StemPersonProfile } from "@/types/archive";

export function PersonHero({ person }: { person: StemPersonProfile }) {
  return (
    <section className="relative overflow-hidden bg-[#05070A] px-5 py-16 md:px-6 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(31,111,235,0.20),transparent_34%)]" />
      <div className="absolute inset-0 museum-grid" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
              Sala de archivo
            </p>

            <div className="mt-6 h-32 w-32 rounded-2xl border border-blue-400/25 bg-[#07111f] shadow-[0_0_44px_rgba(47,129,247,0.16)]" />

            <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {person.name}
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {person.role} · {person.institution}
              {person.campus ? ` · ${person.campus}` : ""}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <Stat label="Libros" value={person.stats.books} />
              <Stat label="Papers" value={person.stats.papers} />
              <Stat label="Patentes" value={person.stats.patents} />
              <Stat label="Años de trayectoria" value={person.stats.years} />
            </div>
          </aside>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Trayectoria documentada
            </p>

            <h2 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {person.headline}
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {person.longBio}
            </p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Áreas de conocimiento
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {person.areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-100"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value?: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-2xl font-semibold text-white">{value ? `${value}+` : "—"}</p>
      <p className="mt-1 text-xs leading-5 text-slate-500">{label}</p>
    </div>
  );
}

