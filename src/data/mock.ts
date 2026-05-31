import type { StemPerson } from "@/types/archive";

export const featuredPeople: StemPerson[] = [
  {
    id: "pedro-ponce-cruz",
    name: "Pedro Ponce Cruz",
    slug: "pedro-ponce-cruz",
    role: "Investigador",
    institution: "Tecnológico de Monterrey",
    campus: "Campus Ciudad de México",
    headline:
      "Control inteligente, inteligencia artificial aplicada, smart grids, robótica, manufactura avanzada y educación STEM.",
    shortBio:
      "Investigador y profesor con una trayectoria enfocada en convertir teoría de control, inteligencia artificial y sistemas físicos en soluciones aplicadas para industria, energía, educación y proyectos de impacto humano.",
    areas: [
      "Control inteligente",
      "Inteligencia artificial",
      "Smart grids",
      "Robótica educativa",
      "Manufactura avanzada",
      "Sistemas ciberfísicos",
    ],
    stats: {
      books: 20,
      papers: 200,
      patents: 12,
      years: 24,
    },
  },
];

export const explorationLines = [
  "Ingeniería y tecnología",
  "Datos e inteligencia artificial",
  "Robótica y automatización",
  "Energía y sostenibilidad",
  "Salud y sistemas críticos",
  "Educación y trayectorias STEM",
  "Manufactura avanzada",
  "Impacto social y ODS",
];

export const platformModules = [
  {
    title: "Personas",
    description:
      "Perfiles vivos de investigadores, profesores, ingenieros y científicos con trayectoria, proyectos, libros, papers, patentes y entrevistas.",
  },
  {
    title: "Episodios",
    description:
      "Conversaciones profundas convertidas en video, audio, clips, transcripciones, resúmenes e ideas clave.",
  },
  {
    title: "Biblioteca",
    description:
      "Libros, papers, cursos, proyectos y recursos organizados para estudiantes, profesores e instituciones.",
  },
  {
    title: "Atlas STEM",
    description:
      "Mapa de conexiones entre personas, instituciones, campus, áreas de conocimiento, proyectos y líneas de investigación.",
  },
  {
    title: "Rutas",
    description:
      "Roadmaps personalizados para estudiantes que quieren explorar áreas STEM desde sus intereses y objetivos.",
  },
  {
    title: "Mi Red STEM",
    description:
      "Una futura experiencia personal para visualizar contactos, intereses, perfiles guardados y conexiones dentro del ecosistema STEM.",
  },
];
