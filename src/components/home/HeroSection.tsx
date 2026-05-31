import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#05070A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,129,247,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(0,27,58,0.9),transparent_35%)]" />
      <div className="absolute inset-0 museum-grid" />

      <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-blue-200 shadow-[0_0_40px_rgba(47,129,247,0.12)]">
            Museo digital · Knowledge Graphs · Educación STEM
          </div>

          <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Las trayectorias STEM también merecen un museo.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Archivo STEM preserva el conocimiento de investigadores, profesores,
            ingenieros y científicos mediante entrevistas, perfiles, líneas
            temporales, biblioteca, grafos de conocimiento y rutas de aprendizaje.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/personas"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(47,129,247,0.22)] transition hover:bg-blue-400"
            >
              Explorar personas
            </Link>
            <Link
              href="/rutas"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Iniciar experiencia
            </Link>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            <HeroStat value="Personas" label="No solo episodios" />
            <HeroStat value="Grafos" label="Relaciones vivas" />
            <HeroStat value="ODS 4" label="Educación de calidad" />
          </div>
        </div>

        <div className="museum-card rounded-[2rem] p-4">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#061A2F] p-5">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-blue-200">
                  Sala piloto
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Trayectoria, obra, red y legado.
                </p>
              </div>
              <p className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                Próximamente
              </p>
            </div>

            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-blue-400/20 bg-black/40">
              <div className="absolute inset-0 museum-grid opacity-40" />
              <div className="relative text-center">
                <p className="text-sm font-semibold text-white">
                  Video destacado
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Entrevista completa + clips + transcripción + recursos.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                ["Timeline", "Hitos"],
                ["Biblioteca", "Obra"],
                ["Atlas", "Conexiones"],
              ].map(([title, subtitle]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-sm font-medium text-white">{title}</p>
                  <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                Pregunta de legado
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                ¿Qué conocimiento debería preservarse para las próximas
                generaciones de ingenieros, científicos y profesores?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
      <p className="text-lg font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs text-slate-400">{label}</p>
    </div>
  );
}
