const systemRows = [
  {
    code: "R-001",
    entity: "Persona",
    relation: "publicó",
    target: "Libro",
  },
  {
    code: "R-002",
    entity: "Persona",
    relation: "desarrolló",
    target: "Proyecto",
  },
  {
    code: "R-003",
    entity: "Persona",
    relation: "trabajó en",
    target: "Institución",
  },
  {
    code: "R-004",
    entity: "Episodio",
    relation: "trata sobre",
    target: "Tema",
  },
  {
    code: "R-005",
    entity: "Curso",
    relation: "enseña",
    target: "Concepto",
  },
  {
    code: "R-006",
    entity: "Patente",
    relation: "aplica",
    target: "Tecnología",
  },
];

export function KnowledgeSystemSection() {
  return (
    <section className="bg-[#05070A] px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Estructura de conocimiento
            </p>

            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
              El archivo se diseña como un grafo, no como una lista de páginas.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Desde el inicio, cada elemento debe poder relacionarse con otros.
              Esto prepara la plataforma para búsqueda semántica, Atlas STEM,
              recomendaciones, GraphRAG y análisis de trayectorias.
            </p>
          </div>

          <div className="archive-blueprint rounded-[1.75rem] border border-white/10 p-6">
            <div className="space-y-3">
              {systemRows.map((row) => (
                <div
                  key={`${row.entity}-${row.relation}-${row.target}`}
                  className="grid gap-3 rounded-2xl border border-white/10 bg-black/25 p-4 md:grid-cols-[72px_1fr_auto_1fr]"
                >
                  <div className="font-mono text-xs text-slate-500">
                    {row.code}
                  </div>

                  <div className="rounded-xl border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-sm font-medium text-blue-100">
                    {row.entity}
                  </div>

                  <div className="self-center text-xs uppercase tracking-[0.18em] text-slate-500">
                    {row.relation}
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-sm font-medium text-white">
                    {row.target}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
              <p className="text-sm font-semibold text-white">
                Resultado esperado
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Una plataforma donde el usuario no solo encuentra contenido,
                sino relaciones: quién enseñó qué, quién publicó qué, qué
                tecnología conecta con qué proyecto y qué ruta de aprendizaje
                surge de una trayectoria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
