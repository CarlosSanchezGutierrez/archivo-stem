export type InstitutionAudience =
  | "Preparatoria"
  | "Universidad"
  | "Profesor"
  | "Grupo estudiantil"
  | "Dirección académica"
  | "Empresa aliada";

export type InstitutionCollection = {
  id: string;
  title: string;
  subtitle: string;
  audience: InstitutionAudience[];
  duration: string;
  objective: string;
  description: string;
  includedMaterials: string[];
  suggestedUse: string[];
  relatedTopics: string[];
};

export type ClassActivity = {
  id: string;
  title: string;
  duration: string;
  format: "Discusión" | "Actividad individual" | "Actividad grupal" | "Proyecto corto" | "Reflexión";
  objective: string;
  instructions: string[];
  output: string;
};

export type ImpactMetric = {
  label: string;
  description: string;
};

export const institutionCollections: InstitutionCollection[] = [
  {
    id: "introduccion-ingenieria",
    title: "Introducción a la ingeniería",
    subtitle: "Qué hacen realmente los ingenieros y cómo se construyen trayectorias técnicas.",
    audience: ["Preparatoria", "Profesor", "Dirección académica"],
    duration: "1 a 2 sesiones",
    objective:
      "Ayudar a estudiantes a entender que la ingeniería no es una sola cosa, sino un conjunto de formas de resolver problemas reales.",
    description:
      "Colección pensada para orientación vocacional. Usa entrevistas, clips y perfiles para mostrar áreas como robótica, IA, energía, manufactura, datos y sistemas.",
    includedMaterials: [
      "Clips introductorios",
      "Preguntas de discusión",
      "Mapa de áreas STEM",
      "Actividad de reflexión vocacional",
      "Lista de perfiles recomendados",
    ],
    suggestedUse: [
      "Clase de orientación profesional",
      "Semana de carreras",
      "Taller con padres de familia",
      "Actividad de exploración STEM",
    ],
    relatedTopics: ["Ingeniería", "Orientación vocacional", "STEM", "Trayectorias"],
  },
  {
    id: "ia-aplicada",
    title: "Inteligencia artificial aplicada",
    subtitle: "Más allá del hype: IA para sistemas físicos, industria, energía y educación.",
    audience: ["Preparatoria", "Universidad", "Profesor", "Grupo estudiantil"],
    duration: "2 a 4 sesiones",
    objective:
      "Mostrar aplicaciones concretas de inteligencia artificial en ingeniería y sistemas reales.",
    description:
      "Colección para entender IA desde casos de control inteligente, robótica, smart grids, manufactura avanzada y sistemas ciberfísicos.",
    includedMaterials: [
      "Entrevistas seleccionadas",
      "Glosario de conceptos",
      "Mapa de aplicaciones de IA",
      "Proyecto corto sugerido",
      "Recursos para profundizar",
    ],
    suggestedUse: [
      "Clase introductoria de IA",
      "Club de robótica o programación",
      "Semana de innovación",
      "Preparación para hackatones",
    ],
    relatedTopics: ["IA", "Machine Learning", "Control inteligente", "Robótica", "Manufactura"],
  },
  {
    id: "energia-smart-grids",
    title: "Energía, sostenibilidad y Smart Grids",
    subtitle: "La red eléctrica como infraestructura inteligente.",
    audience: ["Universidad", "Profesor", "Grupo estudiantil", "Empresa aliada"],
    duration: "2 a 3 sesiones",
    objective:
      "Introducir a estudiantes al mundo de energía, smart grids, eficiencia energética y sistemas conectados.",
    description:
      "Colección enfocada en cómo la energía se cruza con sensores, datos, control, simulación, IoT y sostenibilidad.",
    includedMaterials: [
      "Perfil de investigador",
      "Clips sobre smart grids",
      "Guía de conceptos",
      "Actividad de simulación conceptual",
      "Preguntas para discusión",
    ],
    suggestedUse: [
      "Clase de energía",
      "Materia de sostenibilidad",
      "Taller de innovación energética",
      "Actividad de ODS",
    ],
    relatedTopics: ["Energía", "Smart Grids", "Sostenibilidad", "ODS 7", "ODS 9"],
  },
  {
    id: "investigacion-y-legado",
    title: "Investigación, legado y cultura STEM",
    subtitle: "Por qué documentar el conocimiento de profesores, científicos e ingenieros.",
    audience: ["Universidad", "Profesor", "Dirección académica", "Grupo estudiantil"],
    duration: "1 sesión",
    objective:
      "Concientizar sobre la importancia de preservar trayectorias académicas, científicas y tecnológicas.",
    description:
      "Colección para reflexionar sobre cómo se construye conocimiento, qué se pierde cuando no se documenta y cómo los estudiantes pueden aprender de trayectorias reales.",
    includedMaterials: [
      "Pregunta de legado",
      "Actividad de cápsula del tiempo",
      "Guía de entrevista",
      "Mapa de influencia",
      "Formato para proponer invitados",
    ],
    suggestedUse: [
      "Clase de liderazgo",
      "Seminario académico",
      "Actividad de grupo estudiantil",
      "Proyecto de documentación institucional",
    ],
    relatedTopics: ["Investigación", "Legado", "Cultura STEM", "Educación", "ODS 4"],
  },
];

export const classActivities: ClassActivity[] = [
  {
    id: "mapa-trayectoria",
    title: "Mapa de trayectoria STEM",
    duration: "35 a 50 minutos",
    format: "Actividad individual",
    objective:
      "Que el estudiante entienda cómo una trayectoria profesional se construye a través de decisiones, instituciones, proyectos y mentores.",
    instructions: [
      "Elegir un perfil de Archivo STEM.",
      "Identificar formación, instituciones, proyectos, libros, patentes o áreas de trabajo.",
      "Dibujar una línea temporal con los hitos más importantes.",
      "Responder qué decisiones parecen haber marcado la trayectoria.",
      "Compartir una conclusión con el grupo.",
    ],
    output:
      "Una línea temporal visual y una reflexión breve sobre cómo se construye una trayectoria STEM.",
  },
  {
    id: "pregunta-legado",
    title: "Cápsula del tiempo STEM",
    duration: "25 a 40 minutos",
    format: "Reflexión",
    objective:
      "Que los estudiantes reflexionen sobre qué conocimiento consideran valioso preservar para futuras generaciones.",
    instructions: [
      "Ver un clip de entrevista relacionado con legado o trayectoria.",
      "Responder: qué conocimiento no debería perderse.",
      "Conectar la respuesta con un problema real de la sociedad.",
      "Escribir una cápsula del tiempo de 150 a 250 palabras.",
    ],
    output:
      "Una cápsula del tiempo escrita por el estudiante sobre conocimiento STEM que debería preservarse.",
  },
  {
    id: "grafo-conocimiento",
    title: "Construye un grafo de conocimiento",
    duration: "50 a 70 minutos",
    format: "Actividad grupal",
    objective:
      "Que los estudiantes entiendan cómo se conectan personas, instituciones, tecnologías, proyectos y áreas de conocimiento.",
    instructions: [
      "Seleccionar un perfil o tema del Atlas STEM.",
      "Identificar nodos: persona, institución, tecnología, proyecto, libro y tema.",
      "Dibujar aristas con relaciones claras.",
      "Explicar qué nodo funciona como puente entre áreas.",
      "Presentar el grafo al grupo.",
    ],
    output:
      "Un grafo de conocimiento construido por el equipo y una explicación de sus conexiones principales.",
  },
  {
    id: "mini-proyecto-stem",
    title: "Diseña un mini proyecto inspirado en una entrevista",
    duration: "1 a 2 sesiones",
    format: "Proyecto corto",
    objective:
      "Convertir una entrevista en una idea concreta de proyecto técnico, social o educativo.",
    instructions: [
      "Elegir una entrevista o perfil.",
      "Identificar un problema mencionado.",
      "Proponer una solución tecnológica simple.",
      "Definir usuarios, datos necesarios, componentes y resultado esperado.",
      "Presentar el proyecto en formato pitch de 3 minutos.",
    ],
    output:
      "Una propuesta de mini proyecto con problema, solución, usuarios, componentes técnicos y posible impacto.",
  },
];

export const impactMetrics: ImpactMetric[] = [
  {
    label: "Estudiantes alcanzados",
    description:
      "Número de estudiantes que usan colecciones, rutas, actividades o perfiles de Archivo STEM.",
  },
  {
    label: "Perfiles documentados",
    description:
      "Cantidad de profesores, investigadores, científicos e ingenieros archivados en la plataforma.",
  },
  {
    label: "Recursos educativos generados",
    description:
      "Guías, actividades, clips, transcripciones, mapas conceptuales y rutas derivados de entrevistas.",
  },
  {
    label: "Instituciones participantes",
    description:
      "Preparatorias, universidades, grupos estudiantiles, laboratorios o aliados que usan Archivo STEM.",
  },
  {
    label: "Horas de conocimiento preservado",
    description:
      "Duración total de entrevistas, clips, transcripciones y materiales documentados.",
  },
  {
    label: "Conexiones del Atlas STEM",
    description:
      "Relaciones registradas entre personas, instituciones, temas, proyectos, libros, cursos y patentes.",
  },
];
