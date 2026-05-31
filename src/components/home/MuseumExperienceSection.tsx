const archiveLayers = [
  {
    code: "SAL-01",
    label: "Sala",
    title: "Perfil de trayectoria",
    description:
      "Una página dedicada a cada persona con biografía, áreas, instituciones, línea temporal, entrevista, obra y proyectos.",
  },
  {
    code: "OBJ-02",
    label: "Objeto",
    title: "Biblioteca curada",
    description:
      "Cada libro, paper, patente, curso o proyecto se registra con contexto: qué es, por qué importa y cómo se conecta.",
  },
  {
    code: "RED-03",
    label: "Red",
    title: "Atlas de conocimiento",
    description:
      "Personas, temas, campus, tecnologías y proyectos se conectan en una red navegable para entender relaciones.",
  },
  {
    code: "USO-04",
    label: "Uso",
    title: "Experiencia educativa",
    description:
      "El archivo se convierte en rutas, actividades, preguntas, colecciones y materiales para estudiantes e instituciones.",
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
              className="archive-dossier rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition hover:border-blue-400/35 hover:bg-blue-500/[0.055]"
            >
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                    {layer.label}
                  </p>

                  <span className="font-mono text-xs text-slate-500">
                    {layer.code}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {layer.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {layer.description}
                </p>

                <div className="mt-6 h-6 rounded-full border border-white/10 bg-black/20 p-1">
                  <div className="archive-measure h-full rounded-full opacity-60" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
