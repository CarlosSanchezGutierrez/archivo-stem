export type EpisodeStatus = "Publicado" | "Próximamente" | "En edición";
export type EpisodeFormat = "Entrevista" | "Clase abierta" | "Mesa redonda" | "Archivo corto";

export type EpisodeChapter = {
  time: string;
  title: string;
  description: string;
};

export type EpisodeClip = {
  title: string;
  timeRange: string;
  description: string;
  theme: string;
};

export type EpisodeResource = {
  title: string;
  type: "Libro" | "Paper" | "Patente" | "Curso" | "Proyecto" | "Concepto";
  description: string;
};

export type Episode = {
  id: string;
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  status: EpisodeStatus;
  format: EpisodeFormat;
  personName: string;
  personSlug: string;
  institution: string;
  duration: string;
  publishedAt?: string;
  videoUrl?: string;
  audioUrl?: string;
  coverLabel: string;
  topics: string[];
  keyIdeas: string[];
  chapters: EpisodeChapter[];
  clips: EpisodeClip[];
  connectedResources: EpisodeResource[];
  discussionQuestions: string[];
  transcriptPreview: string[];
};

export const episodes: Episode[] = [
  {
    id: "ep-001-pedro-ponce",
    slug: "pedro-ponce-control-inteligente-ia-aplicada",
    number: 1,
    title: "Control inteligente, IA aplicada y sistemas físicos reales",
    subtitle:
      "Una conversación sobre ingeniería, investigación, educación STEM, energía, robótica, manufactura y legado.",
    description:
      "Episodio dedicado a explorar cómo una trayectoria STEM puede conectar control automático, inteligencia artificial, LabVIEW, robótica, smart grids, manufactura avanzada, patentes, libros, educación y proyectos de impacto humano.",
    status: "Próximamente",
    format: "Entrevista",
    personName: "Pedro Ponce Cruz",
    personSlug: "pedro-ponce-cruz",
    institution: "Tecnológico de Monterrey · Campus Ciudad de México",
    duration: "60–90 min",
    coverLabel: "Episodio piloto",
    topics: [
      "Control inteligente",
      "Inteligencia artificial",
      "LabVIEW",
      "Robótica",
      "Smart Grids",
      "Manufactura avanzada",
      "Educación STEM",
      "Patentes",
      "Legado",
    ],
    keyIdeas: [
      "La IA aplicada a ingeniería no se limita a software; también busca medir, modelar y controlar sistemas físicos.",
      "Una trayectoria STEM puede leerse como una red de instituciones, mentores, proyectos, tecnologías y problemas reales.",
      "Los libros, papers, patentes y cursos son objetos de conocimiento que permiten preservar décadas de experiencia.",
      "La robótica, la energía, la manufactura y la educación pueden compartir una misma lógica: sensores, datos, modelos, control y retroalimentación.",
      "Documentar a profesores e investigadores permite dignificar trayectorias que normalmente no llegan a la cultura popular.",
    ],
    chapters: [
      {
        time: "00:00",
        title: "Introducción al archivo",
        description:
          "Presentación del invitado, su trayectoria y el propósito de preservar conocimiento STEM.",
      },
      {
        time: "05:00",
        title: "De control y automatización a inteligencia artificial",
        description:
          "Cómo una formación en sistemas físicos puede evolucionar hacia IA aplicada e ingeniería inteligente.",
      },
      {
        time: "15:00",
        title: "LabVIEW, instrumentación y control",
        description:
          "El papel de herramientas gráficas, hardware, adquisición de datos y laboratorios en la formación de ingenieros.",
      },
      {
        time: "25:00",
        title: "Robótica educativa y proyectos sociales",
        description:
          "Robots para enseñar matemáticas, apoyar terapias y convertir tecnología en impacto humano.",
      },
      {
        time: "38:00",
        title: "Smart grids, energía y manufactura avanzada",
        description:
          "Relación entre energía, IA, digital twins, sistemas ciberfísicos e Industria 4.0/5.0.",
      },
      {
        time: "52:00",
        title: "Libros, patentes y transferencia tecnológica",
        description:
          "Cómo se transforma investigación en libros, propiedad intelectual, productos y herramientas educativas.",
      },
      {
        time: "65:00",
        title: "Cápsula del tiempo",
        description:
          "Qué conocimiento debe preservarse para las siguientes generaciones de ingenieros e investigadores.",
      },
    ],
    clips: [
      {
        title: "¿Qué significa realmente IA aplicada a ingeniería?",
        timeRange: "05:00–09:30",
        description:
          "Fragmento para explicar la diferencia entre IA como moda y la IA que resuelve problemas técnicos reales.",
        theme: "IA aplicada",
      },
      {
        title: "El patrón común: sensores, datos, control y actuación",
        timeRange: "18:00–21:00",
        description:
          "Clip para mostrar cómo robótica, energía, invernaderos y manufactura comparten una misma estructura de ingeniería.",
        theme: "Sistemas ciberfísicos",
      },
      {
        title: "Por qué escribir libros también es preservar conocimiento",
        timeRange: "52:00–56:00",
        description:
          "Fragmento sobre libros, docencia, investigación y legado académico.",
        theme: "Legado",
      },
      {
        title: "La pregunta de cápsula del tiempo",
        timeRange: "65:00–70:00",
        description:
          "Cierre del episodio con la pregunta central de Archivo STEM.",
        theme: "Cápsula del tiempo",
      },
    ],
    connectedResources: [
      {
        title: "Intelligent Control Systems with LabVIEW",
        type: "Libro",
        description:
          "Obra clave para entender control inteligente, lógica difusa, redes neuronales y LabVIEW.",
      },
      {
        title: "Inteligencia Artificial con Aplicaciones a la Ingeniería",
        type: "Libro",
        description:
          "Entrada directa a la visión de IA aplicada a problemas de ingeniería.",
      },
      {
        title: "Robótica Aplicada con LabVIEW y LEGO",
        type: "Libro",
        description:
          "Recurso práctico para entender robótica educativa, sensores, motores y control.",
      },
      {
        title: "Intelligent Control Toolkit",
        type: "Patente",
        description:
          "Propiedad intelectual relacionada con control neuro-difuso e integración con LabVIEW.",
      },
      {
        title: "Smart Grid: las redes eléctricas del futuro",
        type: "Curso",
        description:
          "Curso abierto sobre infraestructura eléctrica inteligente y sistemas conectados.",
      },
    ],
    discussionQuestions: [
      "¿Cuál es la diferencia entre aprender IA como herramienta de software y aprender IA como parte de un sistema físico?",
      "¿Qué trayectoria te parece más interesante: investigación, industria, docencia, patentes o emprendimiento tecnológico?",
      "¿Qué conocimiento de tus profesores crees que debería documentarse antes de que se pierda?",
      "¿Qué problema real podrías modelar como un sistema de sensores, datos, decisión y actuación?",
      "¿Qué significa dignificar una trayectoria STEM?",
    ],
    transcriptPreview: [
      "Archivo STEM nace con una idea simple: documentar el conocimiento de quienes han dedicado su vida a construir ciencia, tecnología e ingeniería.",
      "En esta conversación exploramos una trayectoria que conecta control automático, inteligencia artificial, robótica, energía, manufactura, educación y transferencia tecnológica.",
      "Más que hablar de IA como tendencia, buscamos entender cómo se aplica a sistemas físicos reales: máquinas, redes eléctricas, robots, invernaderos, laboratorios y fábricas.",
      "La entrevista completa incluirá transcripción navegable, clips, ideas clave, recursos conectados y una cápsula de legado para futuras generaciones.",
    ],
  },
];

export const episodeTopics = Array.from(
  new Set(episodes.flatMap((episode) => episode.topics)),
).sort();

export function getEpisodeBySlug(slug: string) {
  return episodes.find((episode) => episode.slug === slug);
}
