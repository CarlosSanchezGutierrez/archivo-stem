const layers = [
  {
    title: "Sala de persona",
    description:
      "Cada investigador, profesor o ingeniero tiene un perfil con biografía, áreas, estadísticas, línea temporal, obra, proyectos y legado.",
  },
  {
    title: "Objetos de conocimiento",
    description:
      "Libros, papers, patentes, cursos, videos y proyectos se convierten en piezas curadas dentro de una biblioteca viva.",
  },
  {
    title: "Red de relaciones",
    description:
      "El Atlas STEM conecta personas, campus, instituciones, tecnologías, temas y proyectos como un grafo explorable.",
  },
  {
    title: "Experiencias guiadas",
    description:
      "Estudiantes e instituciones pueden convertir el archivo en roadmaps, actividades, colecciones y rutas educativas.",
  },
];

export function MuseumExperienceSection() {
  return (
    <section className="bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              Diseño conceptual
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Una experiencia tipo museo digital, no una página de podcast.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {layers.map((layer, index) => (
              <article
                key={layer.title}
                className="museum-card museum-card-hover rounded-3xl p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/25 bg-blue-500/10 text-sm font-semibold text-blue-100">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {layer.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {layer.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
