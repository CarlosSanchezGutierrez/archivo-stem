"use client";

import Link from "next/link";
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
        normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

      return matchesType && matchesTopic && matchesQuery;
    });
  }, [activeType, activeTopic, query]);

  const featuredResource = filteredResources[0] ?? libraryResources[0];

  return (
    <div className="space-y-12">
      <section className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <aside className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Mesa de consulta
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Buscar dentro de la colección.
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            La biblioteca organiza objetos de conocimiento asociados a
            trayectorias STEM: libros, patentes, cursos, proyectos, conceptos y
            recursos derivados de entrevistas.
          </p>

          <div className="mt-7">
            <label className="text-sm font-medium text-white">
              Buscar por título, autor, institución o tema
            </label>

            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ej. LabVIEW, Smart Grids, robótica, IA aplicada..."
              className="mt-3 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
            />
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-white">Tipo de objeto</p>

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
            <p className="text-sm font-medium text-white">Área de conocimiento</p>

            <div className="mt-3 flex max-h-[260px] flex-wrap gap-2 overflow-y-auto pr-1">
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
              {filteredResources.length} objetos encontrados
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              En la siguiente etapa, cada objeto tendrá página propia,
              relaciones en el Atlas STEM, citas, fuentes y conexión con
              transcripciones.
            </p>
          </div>
        </aside>

        <FeaturedResource resource={featuredResource} />
      </section>

      <section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Colección curada
            </p>

            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white">
              Objetos que explican una trayectoria, no enlaces sueltos.
            </h2>
          </div>

          <p className="text-base leading-8 text-slate-300">
            Cada registro debe responder qué es, quién lo produjo, a qué persona
            o institución se conecta, por qué importa y qué puede aprender un
            estudiante al explorarlo.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredResources.map((resource, index) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              accessionNumber={index + 1}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function FeaturedResource({ resource }: { resource: LibraryResource }) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-[#061A2F] p-6">
      <div className="rounded-[1.5rem] border border-blue-400/20 bg-blue-500/10 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <ResourceTypeBadge type={resource.type} />
            <Badge>{resource.difficulty}</Badge>
            {resource.status ? <Badge>{resource.status}</Badge> : null}
          </div>

          <span className="text-xs font-medium text-slate-400">
            Objeto destacado
          </span>
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
          Registro de biblioteca
        </p>

        <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white">
          {resource.title}
        </h2>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <ArchiveFact label="Autor o creador" value={resource.authorOrCreator} />
          <ArchiveFact
            label="Institución o fuente"
            value={resource.institution ?? "Pendiente de catalogación"}
          />
          <ArchiveFact
            label="Persona conectada"
            value={resource.personName ?? "Archivo STEM"}
          />
          <ArchiveFact label="Nivel" value={resource.difficulty} />
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
            Descripción
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            {resource.description}
          </p>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
            Criterio de relevancia
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            {resource.whyItMatters}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {resource.topics.map((topic) => (
            <Badge key={topic}>{topic}</Badge>
          ))}
        </div>

        {resource.personSlug ? (
          <Link
            href={`/personas/${resource.personSlug}`}
            className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Ver sala relacionada
          </Link>
        ) : null}
      </div>
    </article>
  );
}

function ResourceCard({
  resource,
  accessionNumber,
}: {
  resource: LibraryResource;
  accessionNumber: number;
}) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 transition hover:border-blue-400/30 hover:bg-blue-500/[0.05]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <ResourceTypeBadge type={resource.type} />

        <span className="text-xs font-medium text-slate-500">
          OBJ-{String(accessionNumber).padStart(3, "0")}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold leading-tight text-white">
        {resource.title}
      </h3>

      <p className="mt-3 text-xs leading-5 text-slate-500">
        {resource.authorOrCreator}
        {resource.institution ? ` · ${resource.institution}` : ""}
      </p>

      <p className="mt-5 text-sm leading-7 text-slate-300">
        {resource.description}
      </p>

      <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
          Por qué pertenece al archivo
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          {resource.whyItMatters}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Badge>{resource.difficulty}</Badge>
        {resource.status ? <Badge>{resource.status}</Badge> : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {resource.topics.slice(0, 4).map((topic) => (
          <span
            key={topic}
            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300"
          >
            {topic}
          </span>
        ))}
      </div>

      {resource.personSlug ? (
        <Link
          href={`/personas/${resource.personSlug}`}
          className="mt-6 inline-flex text-sm font-semibold text-blue-200 transition hover:text-blue-100"
        >
          Sala relacionada
        </Link>
      ) : null}
    </article>
  );
}

function ArchiveFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold leading-6 text-white">{value}</p>
    </div>
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

