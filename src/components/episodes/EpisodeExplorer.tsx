"use client";

import { useMemo, useState } from "react";
import { EpisodeCard } from "@/components/episodes/EpisodeCard";
import { episodes, episodeTopics } from "@/data/episodes";

type ActiveStatus = "Todos" | "Publicado" | "Próximamente" | "En edición";
type ActiveTopic = "Todos" | string;

const statuses: ActiveStatus[] = ["Todos", "Publicado", "Próximamente", "En edición"];

export function EpisodeExplorer() {
  const [query, setQuery] = useState("");
  const [activeStatus, setActiveStatus] = useState<ActiveStatus>("Todos");
  const [activeTopic, setActiveTopic] = useState<ActiveTopic>("Todos");

  const filteredEpisodes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return episodes.filter((episode) => {
      const matchesStatus =
        activeStatus === "Todos" || episode.status === activeStatus;

      const matchesTopic =
        activeTopic === "Todos" || episode.topics.includes(activeTopic);

      const searchableText = [
        episode.title,
        episode.subtitle,
        episode.description,
        episode.personName,
        episode.institution,
        episode.topics.join(" "),
        episode.keyIdeas.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        normalizedQuery.length === 0 ||
        searchableText.includes(normalizedQuery);

      return matchesStatus && matchesTopic && matchesQuery;
    });
  }, [query, activeStatus, activeTopic]);

  return (
    <div className="space-y-10">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <label className="text-sm font-medium text-white">
              Buscar episodios
            </label>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ej. IA, robótica, smart grids, LabVIEW..."
              className="mt-3 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-white">Estado</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setActiveStatus(status)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                    activeStatus === status
                      ? "bg-blue-500 text-white"
                      : "border border-white/10 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm font-medium text-white">Tema</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Todos", ...episodeTopics].map((topic) => (
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

        <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
          <p className="text-sm font-semibold text-white">
            {filteredEpisodes.length} episodios encontrados
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-400">
            La meta es que cada episodio tenga entrevista, clips, transcripción,
            ideas clave, recursos y preguntas de discusión.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredEpisodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
}
