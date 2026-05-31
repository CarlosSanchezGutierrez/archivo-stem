"use client";

import { useMemo, useState } from "react";
import {
  libraryResources,
  libraryTopics,
  libraryTypes,
  type LibraryResource,
  type LibraryResourceType,
} from "@/data/library";

type ActiveType = LibraryResourceType | "Todos";
type ActiveTopic = string | "Todos";

const typeStyles: Record<LibraryResourceType, string> = {
  Libro: "border-amber-300/40 bg-amber-500/10 text-amber-100",
  Paper: "border-cyan-300/40 bg-cyan-500/10 text-cyan-100",
  Patente: "border-orange-300/40 bg-orange-500/10 text-orange-100",
  Curso: "border-rose-300/40 bg-rose-500/10 text-rose-100",
  Proyecto: "border-emerald-300/40 bg-emerald-500/10 text-emerald-100",
  Video: "border-violet-300/40 bg-violet-500/10 text-violet-100",
  Concepto: "border-blue-300/40 bg-blue-500/10 text-blue-100",
};

export function LibraryExplorer() {
  const [activeType, setActiveType] = useState<ActiveType>("Todos");
  const [activeTopic, setActiveTopic] = useState<ActiveTopic>("Todos");
  const [query, setQuery] = useState("");

  const filteredResources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return libraryResources.filter((resource) => {
      const matchesType = activeType === "Todos" || resource.type === activeType;
      const matchesTopic =
        activeTopic === "Todos" || resource.topics.includes(activeTopic);

      const searchableText = [
        resource.title,
        resource.authorOrCreator,
        resource.personName,
        resource.institution,
        resource.description,
        resource.whyItMatters,
        resource.topics.join(" "),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        normalizedQuery.length === 0 ||
        searchableText.includes(normalizedQuery);

      return matchesType && matchesTopic && matchesQuery;
    });
  }, [activeType, activeTopic, query]);

  const featuredResource = filteredResources[0] ?? libraryResources[0];

  return (
    <div className="space-y-10">
      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
            Filtros
          </p>

          <div className="mt-6">
            <label className="text-sm font-medium text-white">
              Buscar en la biblioteca
            </label>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ej. LabVIEW, smart grids, robótica, IA..."
              className="mt-3 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
            />
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-white">Tipo de recurso</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {libraryTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                    activeType === type
                      ? "bg-blue-500 text-white"
                      : "border border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-white">Tema</p>
            <div className="mt-3 flex max-h-[280px] flex-wrap gap-2 overflow-y-auto pr-1">
              {["Todos", ...libraryTopics].map((topic) => (
                <button
                  key={topic}
                  onClick={() => setActiveTopic(topic)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                    activeTopic === topic
                      ? "bg-blue-500 text-white"
                      : "border border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
            <p className="text-sm font-semibold text-white">
              {filteredResources.length} recursos encontrados
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Esta biblioteca está curada manualmente por ahora. Después se
              conectará con Supabase, embeddings y búsqueda semántica.
            </p>
          </div>
        </div>

        <FeaturedResource resource={featuredResource} />
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Recursos
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Biblioteca curada de conocimiento STEM.
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>
    </div>
  );
}

function FeaturedResource({ resource }: { resource: LibraryResource }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-[#061A2F] p-6">
      <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-6">
        <div className="flex flex-wrap gap-2">
          <ResourceTypeBadge type={resource.type} />
          <Badge>{resource.difficulty}</Badge>
          {resource.status ? <Badge>{resource.status}</Badge> : null}
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
          Recurso destacado
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          {resource.title}
        </h2>

        <p className="mt-3 text-sm text-slate-400">
          {resource.authorOrCreator}
          {resource.institution ? ` · ${resource.institution}` : ""}
        </p>

        <p className="mt-6 text-base leading-8 text-slate-300">
          {resource.description}
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
          <p className="text-sm font-semibold text-white">Por qué importa</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            {resource.whyItMatters}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {resource.topics.map((topic) => (
            <Badge key={topic}>{topic}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}

function ResourceCard({ resource }: { resource: LibraryResource }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-blue-400/30 hover:bg-blue-500/[0.05]">
      <div className="flex flex-wrap gap-2">
        <ResourceTypeBadge type={resource.type} />
        <Badge>{resource.difficulty}</Badge>
      </div>

      <h3 className="mt-5 text-xl font-semibold leading-tight text-white">
        {resource.title}
      </h3>

      <p className="mt-3 text-xs leading-5 text-slate-500">
        {resource.authorOrCreator}
        {resource.institution ? ` · ${resource.institution}` : ""}
      </p>

      <p className="mt-4 text-sm leading-6 text-slate-300">
        {resource.description}
      </p>

      <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
          Relevancia
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          {resource.whyItMatters}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {resource.topics.slice(0, 4).map((topic) => (
          <Badge key={topic}>{topic}</Badge>
        ))}
      </div>
    </article>
  );
}

function ResourceTypeBadge({ type }: { type: LibraryResourceType }) {
  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-medium ${typeStyles[type]}`}>
      {type}
    </span>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-slate-300">
      {children}
    </span>
  );
}
