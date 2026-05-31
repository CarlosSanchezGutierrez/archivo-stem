export function ConceptSection() {
  return (
    <section className="bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
          No es solo un podcast
        </p>

        <div className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Cada trayectoria STEM merece ser explorada como una obra de
            conocimiento.
          </h2>

          <div className="space-y-6 text-base leading-8 text-slate-300">
            <p>
              Archivo STEM convierte entrevistas en archivos vivos: perfiles,
              libros, papers, patentes, proyectos, cursos, líneas temporales,
              clips, transcripciones y rutas de aprendizaje.
            </p>
            <p>
              La plataforma busca dignificar la trayectoria de profesionistas
              STEM dentro de universidades, laboratorios, empresas e
              instituciones, preservando su experiencia para nuevas
              generaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
