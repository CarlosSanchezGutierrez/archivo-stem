import { PersonCard } from "@/components/people/PersonCard";
import { people } from "@/data/people";

export default function PeoplePage() {
  return (
    <section className="min-h-[70vh] bg-[#05070A] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
          Archivo STEM
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">
          Personas
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Explora perfiles de investigadores, profesores, ingenieros, científicos
          y profesionistas STEM documentados como archivos vivos de trayectoria y
          conocimiento.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {people.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}
