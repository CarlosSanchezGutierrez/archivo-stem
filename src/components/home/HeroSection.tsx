import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#05070A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,129,247,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(0,27,58,0.9),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-blue-200">
            Museo digital de trayectorias STEM
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Preservamos el conocimiento de quienes construyen ciencia,
            tecnología e ingeniería.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Archivo STEM documenta trayectorias de investigadores, profesores,
            ingenieros y científicos mediante entrevistas, perfiles, líneas
            temporales, bibliotecas, grafos de conocimiento y rutas de
            aprendizaje.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/personas"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Explorar personas
            </Link>
            <Link
              href="/atlas"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver Atlas STEM
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-blue-950/40 backdrop-blur">
          <div className="rounded-2xl border border-white/10 bg-[#061A2F] p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-blue-200">
                Episodio destacado
              </p>
              <p className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                Próximamente
              </p>
            </div>

            <div className="flex aspect-video items-center justify-center rounded-2xl border border-blue-400/20 bg-black/40">
              <div className="text-center">
                <p className="text-sm font-semibold text-white">
                  Espacio para video principal
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Entrevista completa, clips, transcripción y recursos.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["Entrevista", "Timeline", "Biblioteca"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-sm font-medium text-white">{item}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Capa de archivo
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
