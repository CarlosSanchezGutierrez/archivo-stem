import { StemAtlasGraph } from "@/components/graph/StemAtlasGraph";

export const metadata = {
  title: "Atlas STEM",
  description:
    "Mapa interactivo de conexiones entre personas, instituciones, campus, temas, proyectos, libros, cursos, patentes y tecnologías dentro de Archivo STEM.",
};

export default function AtlasPage() {
  return (
    <section className="min-h-screen bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
          Atlas STEM
        </p>

        <div className="mt-4 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Explora el conocimiento como una red viva.
            </h1>
          </div>

          <div className="text-base leading-8 text-slate-300">
            <p>
              El Atlas STEM conecta personas, instituciones, campus, tecnologías,
              libros, proyectos, cursos, patentes y áreas de conocimiento. Esta
              primera versión muestra cómo una trayectoria puede convertirse en
              un grafo explorable.
            </p>
            <p className="mt-4">
              La visión futura es que este mapa alimente búsqueda semántica,
              recomendaciones, roadmaps personalizados, GraphRAG y modelos de IA
              sobre redes de conocimiento.
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
