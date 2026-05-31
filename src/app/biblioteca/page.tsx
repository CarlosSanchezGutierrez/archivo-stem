import { LibraryExplorer } from "@/components/library/LibraryExplorer";

export const metadata = {
  title: "Biblioteca",
  description:
    "Biblioteca curada de Archivo STEM con libros, papers, patentes, cursos, proyectos, videos y conceptos conectados a trayectorias STEM.",
};

export default function LibraryPage() {
  return (
    <section className="min-h-screen bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
          Biblioteca
        </p>

        <div className="mt-4 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Objetos de conocimiento para explorar STEM.
            </h1>
          </div>

          <div className="text-base leading-8 text-slate-300">
            <p>
              Cada libro, paper, patente, curso, proyecto, video o concepto se
              trata como una pieza de archivo. La biblioteca conecta recursos con
              personas, instituciones, temas y rutas de aprendizaje.
            </p>
            <p className="mt-4">
              La visión futura es convertir esta biblioteca en una base de
              conocimiento consultable con búsqueda semántica, embeddings,
              GraphRAG y recomendaciones personalizadas.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <LibraryExplorer />
        </div>
      </div>
    </section>
  );
}
