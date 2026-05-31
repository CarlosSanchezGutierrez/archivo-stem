import { InstitutionExperience } from "@/components/institution/InstitutionExperience";

export const metadata = {
  title: "Instituciones",
  description:
    "Modo institución de Archivo STEM para convertir entrevistas, perfiles y recursos STEM en colecciones educativas, actividades y evidencia de impacto.",
};

export default function InstitutionsPage() {
  return (
    <section className="min-h-screen bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Instituciones
            </p>

            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Convertir el archivo en material educativo reutilizable.
            </h1>
          </div>

          <div className="text-base leading-8 text-slate-300">
            <p>
              El Modo Institución está pensado para preparatorias, universidades,
              profesores, grupos estudiantiles y direcciones académicas que
              quieran usar trayectorias STEM como material de orientación,
              clase, discusión o cultura científica.
            </p>

            <p className="mt-4">
              Cada colección debe poder convertirse en actividades, preguntas,
              guías, clips, mapas de conocimiento, entregables y métricas de
              impacto.
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
