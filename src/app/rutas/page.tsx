import { StudentExperience } from "@/components/student/StudentExperience";

export const metadata = {
  title: "Rutas de aprendizaje",
  description:
    "Modo estudiante de Archivo STEM para generar roadmaps personalizados a partir de intereses, etapa académica y objetivos.",
};

export default function LearningPathsPage() {
  return (
    <section className="min-h-screen bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
          Modo estudiante
        </p>

        <div className="mt-4 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Encuentra una ruta STEM según tus intereses.
            </h1>
          </div>

          <div className="text-base leading-8 text-slate-300">
            <p>
              Esta experiencia convierte Archivo STEM en una herramienta de
              exploración vocacional, académica y profesional. El objetivo es que
              un estudiante no solo vea entrevistas, sino que descubra perfiles,
              conceptos, recursos y proyectos conectados con lo que quiere
              construir.
            </p>
            <p className="mt-4">
              La versión inicial usa reglas simples. La evolución natural será
              conectar el roadmap con el Atlas STEM, transcripciones, embeddings,
              GraphRAG y recomendaciones personalizadas.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <StudentExperience />
        </div>
      </div>
    </section>
  );
}
