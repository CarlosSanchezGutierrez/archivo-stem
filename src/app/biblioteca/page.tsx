export default function Page() {
  return (
    <section className="min-h-[70vh] bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
          Archivo STEM
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">
          Biblioteca
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Libros, papers, patentes, cursos, proyectos y recursos curados a partir de cada trayectoria documentada.
        </p>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm font-semibold text-white">
            Próxima implementación
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Esta sección ya quedó reservada dentro de la arquitectura del
            producto. El siguiente paso será conectarla con datos reales,
            visualizaciones y componentes específicos.
          </p>
        </div>
      </div>
    </section>
  );
}
