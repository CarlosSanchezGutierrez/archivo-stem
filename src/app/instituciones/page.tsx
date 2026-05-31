import { InstitutionExperience } from "@/components/institution/InstitutionExperience";

export const metadata = {
  title: "Instituciones",
  description:
    "Modo institución de Archivo STEM para usar entrevistas, perfiles, actividades, colecciones y rutas STEM en clases, orientación vocacional y programas educativos.",
};

export default function InstitutionsPage() {
  return (
    <section className="min-h-screen bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
          Modo institución
        </p>

        <div className="mt-4 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Archivo STEM como recurso educativo institucional.
            </h1>
          </div>

          <div className="text-base leading-8 text-slate-300">
            <p>
              Las entrevistas no terminan cuando se publican. Cada conversación
              puede convertirse en una colección educativa con clips, preguntas,
              actividades, recursos, rutas de aprendizaje y material para clase.
            </p>
            <p className="mt-4">
              Este modo está pensado para preparatorias, universidades, grupos
              estudiantiles, profesores, direcciones académicas y aliados que
              quieran fortalecer cultura STEM con materiales serios y
              reutilizables.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <InstitutionExperience />
        </div>
      </div>
    </section>
  );
}
