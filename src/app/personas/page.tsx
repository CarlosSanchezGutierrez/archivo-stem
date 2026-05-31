import { PeopleArchiveExplorer } from "@/components/people/PeopleArchiveExplorer";

export const metadata = {
  title: "Personas",
  description:
    "Catálogo de perfiles de investigadores, profesores, ingenieros y científicos documentados como salas de archivo dentro de Archivo STEM.",
};

export default function PeoplePage() {
  return (
    <section className="min-h-screen bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Personas
            </p>

            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Trayectorias STEM documentadas como salas de archivo.
            </h1>
          </div>

          <div className="text-base leading-8 text-slate-300">
            <p>
              Esta sección no busca listar invitados como si fueran episodios de
              un podcast. Cada persona se documenta como una trayectoria: su
              formación, instituciones, obra, proyectos, relaciones, preguntas y
              legado.
            </p>

            <p className="mt-4">
              La meta es que estudiantes e instituciones puedan explorar cómo se
              construye una carrera STEM real a través de décadas de trabajo,
              investigación, docencia y colaboración.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <PeopleArchiveExplorer />
        </div>
      </div>
    </section>
  );
}
