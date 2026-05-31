const archiveLayers = [
  {
    label: "Sala",
    title: "Perfil de trayectoria",
    description:
      "Una página dedicada a cada persona con biografía, áreas, instituciones, línea temporal, entrevista, obra y proyectos.",
  },
  {
    label: "Objeto",
    title: "Biblioteca curada",
    description:
      "Cada libro, paper, patente, curso o proyecto se registra con contexto: qué es, por qué importa y cómo se conecta con la trayectoria.",
  },
  {
    label: "Red",
    title: "Atlas de conocimiento",
    description:
      "Personas, temas, campus, tecnologías y proyectos se conectan en una red navegable para entender relaciones entre áreas STEM.",
  },
  {
    label: "Uso",
    title: "Experiencia educativa",
    description:
      "El archivo se convierte en rutas, actividades, preguntas, colecciones y materiales para estudiantes, profesores e instituciones.",
  },
];

export function MuseumExperienceSection() {
  return (
    <section className="bg-[#030712] px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
            Modelo de archivo
          </p>

          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Una trayectoria se puede recorrer como una exposición.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300">
            La entrevista es solo el punto de entrada. El valor está en convertir
            cada conversación en una estructura consultable: persona, obra,
            relaciones, recursos y legado.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {archiveLayers.map((layer) => (
            <article
              key={layer.title}
              className="archive-panel archive-panel-hover rounded-3xl p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                {layer.label}
              </p>

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
    </section>
  );
}

