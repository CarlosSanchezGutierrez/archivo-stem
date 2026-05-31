"use client";

import { useMemo, useState } from "react";
import { PersonCard } from "@/components/people/PersonCard";
import { people } from "@/data/people";

const allAreas = Array.from(
  new Set(people.flatMap((person) => person.areas)),
).sort();

export function PeopleArchiveExplorer() {
  const [query, setQuery] = useState("");
  const [activeArea, setActiveArea] = useState<string>("Todas");

  const filteredPeople = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return people.filter((person) => {
      const matchesArea =
        activeArea === "Todas" || person.areas.includes(activeArea);

      const searchableText = [
        person.name,
        person.role,
        person.institution,
        person.campus,
        person.headline,
        person.shortBio,
        person.areas.join(" "),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

      return matchesArea && matchesQuery;
    });
  }, [query, activeArea]);

  return (
    <div className="space-y-10">
      <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Catálogo de personas
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Buscar por nombre, institución o área de conocimiento.
            </h2>
          </div>

          <div>
            <label className="text-sm font-medium text-white">
              Buscar en el archivo
            </label>

            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ej. control inteligente, robótica, Tec, energía..."
              className="mt-3 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
            />
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm font-medium text-white">Filtrar por área</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {["Todas", ...allAreas].map((area) => (
              <button
                key={area}
                onClick={() => setActiveArea(area)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  activeArea === area
                    ? "bg-blue-500 text-white"
                    : "border border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
          <p className="text-sm font-semibold text-white">
            {filteredPeople.length} perfiles encontrados
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-400">
            Cada perfil debe funcionar como una sala de archivo: trayectoria,
            obra, relaciones, proyectos, entrevista y legado.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredPeople.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}
