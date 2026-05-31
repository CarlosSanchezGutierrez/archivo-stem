import Link from "next/link";

const modes = [
  {
    title: "Modo estudiante",
    href: "/rutas",
    description:
      "Exploración guiada para descubrir áreas, perfiles, conceptos y proyectos según intereses y etapa académica.",
    note: "Orientación y aprendizaje",
  },
  {
    title: "Modo institución",
    href: "/instituciones",
    description:
      "Colecciones y actividades para usar entrevistas como material de clase, orientación vocacional o cultura STEM.",
    note: "Uso educativo",
  },
  {
    title: "Mi Red STEM",
    href: "/mi-red",
    description:
      "Mapa personal de intereses, perfiles guardados, instituciones, contactos y objetivos de aprendizaje.",
    note: "Exploración personal",
  },
];

export function ModesPreviewSection() {
  return (
    <section className="bg-[#061A2F] px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Experiencias
            </p>

            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
              La misma base de conocimiento puede servir a públicos distintos.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {modes.map((mode) => (
              <Link
                key={mode.href}
                href={mode.href}
                className="archive-panel archive-panel-hover rounded-3xl p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                  {mode.note}
                </p>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {mode.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {mode.description}
                </p>

                <p className="mt-6 text-sm font-semibold text-blue-200">
                  Abrir sección
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

