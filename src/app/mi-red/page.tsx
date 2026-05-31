import { MyStemNetwork } from "@/components/network/MyStemNetwork";

export const metadata = {
  title: "Mi Red STEM",
  description:
    "Red personal conceptual de Archivo STEM para visualizar intereses, perfiles guardados, contactos, instituciones, proyectos, objetivos y recomendaciones.",
};

export default function MyNetworkPage() {
  return (
    <section className="min-h-screen bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
          Mi Red STEM
        </p>

        <div className="mt-4 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Visualiza tu ecosistema académico, técnico y profesional.
            </h1>
          </div>

          <div className="text-base leading-8 text-slate-300">
            <p>
              Mi Red STEM es una experiencia conceptual para que estudiantes e
              interesados puedan ver sus perfiles guardados, temas favoritos,
              contactos, instituciones, proyectos, recursos y objetivos como una
              red navegable.
            </p>
            <p className="mt-4">
              La versión futura podrá conectarse con cuentas, Supabase Auth,
              favoritos, notas, roadmaps personales, historial de aprendizaje,
              recomendaciones y análisis de conexiones dentro del Atlas STEM.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <MyStemNetwork />
        </div>
      </div>
    </section>
  );
}
