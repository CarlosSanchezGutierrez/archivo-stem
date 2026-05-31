import { FaqAccordion } from "@/components/faq/FaqAccordion";

export const metadata = {
  title: "Preguntas frecuentes",
  description:
    "Preguntas frecuentes sobre Archivo STEM, su propósito, invitados, uso educativo, tecnología y evolución futura.",
};

export default function FaqPage() {
  return (
    <section className="min-h-screen bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Preguntas frecuentes
            </p>

            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Criterios para entender el archivo antes de escalarlo.
            </h1>
          </div>

          <div className="text-base leading-8 text-slate-300">
            <p>
              Esta sección define el lenguaje base del proyecto: qué es Archivo
              STEM, qué no es, cómo se documentan las trayectorias, cómo se puede
              usar en educación y qué papel tendrá la tecnología.
            </p>

            <p className="mt-4">
              La prioridad actual es tener una experiencia clara, sobria y
              diferenciada antes de conectar base de datos, autenticación o
              automatizaciones.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
