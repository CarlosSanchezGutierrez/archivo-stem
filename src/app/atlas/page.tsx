import { StemAtlasGraph } from "@/components/graph/StemAtlasGraph";

export const metadata = {
  title: "Atlas STEM",
  description:
    "Mapa de archivo para explorar relaciones entre personas, instituciones, campus, temas, proyectos, libros, cursos, patentes y tecnologías dentro de Archivo STEM.",
};

export default function AtlasPage() {
  return (
    <section className="min-h-screen bg-[#05070A] px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Atlas STEM
            </p>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Un mapa para leer trayectorias como redes de conocimiento.
            </h1>
          </div>

          <div className="text-base leading-8 text-slate-300">
            <p>
              El Atlas STEM no es una visualización decorativa. Es la forma de
              mostrar que una trayectoria académica o profesional está compuesta
              por personas, instituciones, libros, temas, proyectos, tecnologías
              y relaciones.
            </p>

            <p className="mt-4">
              Esta primera versión usa datos curados. Más adelante, el mismo
              modelo podrá alimentar búsqueda semántica, recomendaciones,
              GraphRAG y análisis de redes dentro del archivo.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <StemAtlasGraph />
        </div>
      </div>
    </section>
  );
}

