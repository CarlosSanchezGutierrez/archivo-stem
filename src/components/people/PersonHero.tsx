import type { StemPersonProfile } from "@/types/archive";

export function PersonHero({ person }: { person: StemPersonProfile }) {
  return (
    <section className="relative overflow-hidden bg-[#05070A] px-6 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,129,247,0.24),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
          <div className="h-32 w-32 rounded-[2rem] border border-blue-400/25 bg-blue-500/10 shadow-[0_0_60px_rgba(47,129,247,0.25)]" />

          <div className="mt-8">
            <p className="text-sm font-medium text-blue-200">{person.role}</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {person.name}
            </h1>
            <p className="mt-3 text-sm text-slate-400">
              {person.institution}
              {person.campus ? ` · ${person.campus}` : ""}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <Stat label="Libros" value={person.stats.books} />
            <Stat label="Papers" value={person.stats.papers} />
            <Stat label="Patentes" value={person.stats.patents} />
            <Stat label="Años" value={person.stats.years} />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
            Archivo de trayectoria
          </p>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {person.headline}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {person.longBio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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
    </section>
  );
}

function Stat({ label, value }: { label: string; value?: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-2xl font-semibold text-white">{value ? `${value}+` : "—"}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  );
}
