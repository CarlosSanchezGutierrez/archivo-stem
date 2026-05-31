import Link from "next/link";

const modes = [
  {
    title: "Modo estudiante",
    href: "/rutas",
    description:
      "Cuestionario inicial para recomendar roadmaps, perfiles, conceptos y proyectos según intereses y etapa académica.",
  },
  {
    title: "Modo institución",
    href: "/instituciones",
    description:
      "Colecciones educativas, actividades para clase, guías de discusión y métricas para preparatorias y universidades.",
  },
  {
    title: "Mi Red STEM",
    href: "/mi-red",
    description:
      "Mapa personal de intereses, perfiles guardados, contactos, instituciones, objetivos y recomendaciones.",
  },
];

export function ModesPreviewSection() {
  return (
    <section className="bg-[#061A2F] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
            Modos de exploración
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
            El archivo cambia según quién lo explora.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            La misma base de conocimiento puede servir para orientación
            vocacional, clases, investigación, networking académico o cultura
            científica.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {modes.map((mode) => (
            <Link
              key={mode.href}
              href={mode.href}
              className="museum-card museum-card-hover rounded-3xl p-6"
            >
              <p className="text-xl font-semibold text-white">{mode.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {mode.description}
              </p>
              <p className="mt-6 text-sm font-semibold text-blue-200">
                Explorar →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
