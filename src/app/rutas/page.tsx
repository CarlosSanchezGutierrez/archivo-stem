import { StudentExperience } from "@/components/student/StudentExperience";

export const metadata = {
  title: "Rutas de aprendizaje",
  description:
    "Experiencia guiada de Archivo STEM para convertir intereses de estudiantes en rutas de perfiles, conceptos, recursos y proyectos.",
};

export default function LearningPathsPage() {
  return (
    <section className="min-h-screen bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Rutas de aprendizaje
            </p>

            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl">
              De curiosidad inicial a ruta de exploración STEM.
            </h1>
          </div>

          <div className="text-base leading-8 text-slate-300">
            <p>
              El Modo Estudiante convierte el archivo en una experiencia guiada.
              En lugar de entregar una lista de videos, propone una ruta con
              perfiles, conceptos, recursos y proyectos según el interés y la
              etapa académica del usuario.
            </p>

            <p className="mt-4">
              La versión actual usa criterios curados. Más adelante, estas rutas
              podrán alimentarse con el Atlas STEM, transcripciones, embeddings,
              historial de aprendizaje y GraphRAG.
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
