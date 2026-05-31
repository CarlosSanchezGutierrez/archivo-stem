import { LibraryExplorer } from "@/components/library/LibraryExplorer";

export const metadata = {
  title: "Biblioteca",
  description:
    "Archivo curado de objetos de conocimiento STEM: libros, patentes, cursos, proyectos, conceptos y recursos conectados con trayectorias documentadas.",
};

export default function LibraryPage() {
  return (
    <section className="min-h-screen bg-[#05070A] px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Biblioteca
            </p>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Objetos de conocimiento conectados con trayectorias STEM.
            </h1>
          </div>

          <div className="text-base leading-8 text-slate-300">
            <p>
              La biblioteca de Archivo STEM no funciona como una lista de
              referencias. Cada recurso se cataloga como una pieza dentro de una
              trayectoria: qué explica, quién lo produjo, con qué temas se
              relaciona y por qué debe preservarse.
            </p>

            <p className="mt-4">
              En el futuro, estos objetos alimentarán el Atlas STEM, las rutas de
              aprendizaje, las colecciones institucionales y la búsqueda
              semántica del archivo.
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

