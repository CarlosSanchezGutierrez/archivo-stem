export type StudentInterest =
  | "ia"
  | "robotica"
  | "energia"
  | "manufactura"
  | "datos"
  | "biomedica"
  | "educacion"
  | "emprendimiento";

export type StudentStage =
  | "secundaria"
  | "prepa"
  | "universidad"
  | "egresado"
  | "profesional";

export type StudentGoal =
  | "elegir-carrera"
  | "explorar-stem"
  | "aprender-tecnologia"
  | "crear-proyecto"
  | "preparar-entrevista"
  | "investigar";

export type RoadmapStep = {
  title: string;
  description: string;
  type: "Concepto" | "Episodio" | "Perfil" | "Proyecto" | "Lectura" | "Curso";
};

export type StudentRoadmap = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  primaryInterest: StudentInterest;
  recommendedFor: StudentGoal[];
  difficulty: "Inicial" | "Intermedio" | "Avanzado";
  duration: string;
  steps: RoadmapStep[];
  suggestedProfiles: string[];
  suggestedProjects: string[];
  suggestedConcepts: string[];
};

export const interestOptions: {
  value: StudentInterest;
  label: string;
  description: string;
}[] = [
  {
    value: "ia",
    label: "Inteligencia artificial",
    description: "Machine learning, IA aplicada, modelos, automatización y sistemas inteligentes.",
  },
  {
    value: "robotica",
    label: "Robótica",
    description: "Robots, sensores, actuadores, control, navegación e interacción humano-máquina.",
  },
  {
    value: "energia",
    label: "Energía",
    description: "Smart grids, energías renovables, electrónica de potencia y sistemas eléctricos.",
  },
  {
    value: "manufactura",
    label: "Manufactura avanzada",
    description: "Industria 4.0/5.0, digital twins, IoT, automatización y sistemas ciberfísicos.",
  },
  {
    value: "datos",
    label: "Datos",
    description: "Bases de datos, analítica, visualización, pipelines, infraestructura y ciencia de datos.",
  },
  {
    value: "biomedica",
    label: "Ingeniería biomédica",
    description: "Tecnología médica, rehabilitación, prótesis, exoesqueletos y sistemas asistivos.",
  },
  {
    value: "educacion",
    label: "Educación STEM",
    description: "Cómo enseñar ciencia, tecnología e ingeniería con proyectos, laboratorios y recursos.",
  },
  {
    value: "emprendimiento",
    label: "Emprendimiento tecnológico",
    description: "Cómo convertir conocimiento técnico en productos, startups, patentes o impacto.",
  },
];

export const stageOptions: {
  value: StudentStage;
  label: string;
}[] = [
  { value: "secundaria", label: "Secundaria" },
  { value: "prepa", label: "Preparatoria" },
  { value: "universidad", label: "Universidad" },
  { value: "egresado", label: "Recién egresado" },
  { value: "profesional", label: "Profesional" },
];

export const goalOptions: {
  value: StudentGoal;
  label: string;
  description: string;
}[] = [
  {
    value: "elegir-carrera",
    label: "Elegir carrera",
    description: "Quiero entender qué áreas STEM existen y cuál podría gustarme.",
  },
  {
    value: "explorar-stem",
    label: "Explorar STEM",
    description: "Quiero conocer trayectorias, proyectos y posibilidades.",
  },
  {
    value: "aprender-tecnologia",
    label: "Aprender una tecnología",
    description: "Quiero empezar a estudiar herramientas, conceptos o habilidades específicas.",
  },
  {
    value: "crear-proyecto",
    label: "Crear un proyecto",
    description: "Quiero construir algo para mi portafolio, clase, investigación o emprendimiento.",
  },
  {
    value: "preparar-entrevista",
    label: "Prepararme profesionalmente",
    description: "Quiero usar esto para entrevistas, internships, CV o LinkedIn.",
  },
  {
    value: "investigar",
    label: "Investigar",
    description: "Quiero entender papers, profesores, líneas de investigación y posgrados.",
  },
];

export const studentRoadmaps: StudentRoadmap[] = [
  {
    id: "ia-aplicada-ingenieria",
    title: "IA aplicada a ingeniería",
    subtitle: "De modelos inteligentes a sistemas físicos reales.",
    description:
      "Ruta para estudiantes que quieren entender cómo la inteligencia artificial se aplica en robótica, manufactura, energía, control, salud y sistemas industriales.",
    primaryInterest: "ia",
    recommendedFor: ["explorar-stem", "aprender-tecnologia", "crear-proyecto", "investigar"],
    difficulty: "Intermedio",
    duration: "4 semanas",
    steps: [
      {
        type: "Concepto",
        title: "Entiende qué significa IA aplicada",
        description:
          "Diferencia IA como producto digital de IA como herramienta para controlar, predecir o mejorar sistemas físicos.",
      },
      {
        type: "Perfil",
        title: "Explora perfiles de investigadores en IA aplicada",
        description:
          "Empieza por trayectorias que conectan IA con energía, robótica, manufactura y educación.",
      },
      {
        type: "Lectura",
        title: "Lee recursos introductorios de IA para ingeniería",
        description:
          "Busca libros y materiales que expliquen lógica difusa, redes neuronales, optimización y sistemas inteligentes sin quedarse solo en teoría.",
      },
      {
        type: "Proyecto",
        title: "Construye un mini sistema inteligente",
        description:
          "Ejemplo: clasificador simple, controlador básico, simulación de sensor o dashboard con predicción.",
      },
    ],
    suggestedProfiles: ["Pedro Ponce Cruz"],
    suggestedProjects: [
      "Control inteligente para un sistema físico simple",
      "Clasificador de señales o imágenes",
      "Dashboard con predicción básica",
    ],
    suggestedConcepts: [
      "Machine Learning",
      "Lógica difusa",
      "Redes neuronales",
      "Sistemas neuro-difusos",
      "Optimización",
      "Control inteligente",
    ],
  },
  {
    id: "robotica-sistemas-fisicos",
    title: "Robótica y sistemas físicos",
    subtitle: "Sensores, actuadores, control y comportamiento inteligente.",
    description:
      "Ruta para estudiantes interesados en robots, automatización, sensores, movimiento, control y plataformas físicas.",
    primaryInterest: "robotica",
    recommendedFor: ["elegir-carrera", "explorar-stem", "crear-proyecto"],
    difficulty: "Inicial",
    duration: "3 semanas",
    steps: [
      {
        type: "Concepto",
        title: "Aprende el ciclo sensor-control-actuador",
        description:
          "Todo robot puede entenderse como un sistema que mide, decide y actúa.",
      },
      {
        type: "Episodio",
        title: "Mira entrevistas relacionadas con robótica aplicada",
        description:
          "Busca cómo los investigadores conectan robots con educación, salud, industria o asistencia humana.",
      },
      {
        type: "Proyecto",
        title: "Diseña un robot conceptual",
        description:
          "Define sensores, actuadores, lógica de control, restricciones y propósito humano o industrial.",
      },
    ],
    suggestedProfiles: ["Pedro Ponce Cruz"],
    suggestedProjects: [
      "Robot seguidor de línea conceptual",
      "Robot asistivo para una tarea simple",
      "Sistema de navegación con sensores",
    ],
    suggestedConcepts: [
      "Sensores",
      "Actuadores",
      "Control",
      "Robótica educativa",
      "Interacción humano-robot",
    ],
  },
  {
    id: "energia-smart-grids",
    title: "Energía y Smart Grids",
    subtitle: "La red eléctrica como sistema inteligente.",
    description:
      "Ruta para entender cómo la infraestructura eléctrica evoluciona hacia redes inteligentes con sensores, datos, control, simulación y energías renovables.",
    primaryInterest: "energia",
    recommendedFor: ["explorar-stem", "investigar", "crear-proyecto"],
    difficulty: "Intermedio",
    duration: "4 semanas",
    steps: [
      {
        type: "Concepto",
        title: "Entiende la red eléctrica tradicional",
        description:
          "Generación, transmisión, distribución, consumo y calidad de energía.",
      },
      {
        type: "Concepto",
        title: "Conecta energía con datos",
        description:
          "Smart meters, smart homes, IoT energético y monitoreo.",
      },
      {
        type: "Curso",
        title: "Explora cursos introductorios de Smart Grid",
        description:
          "Usa cursos abiertos para entender fundamentos técnicos antes de entrar a papers.",
      },
      {
        type: "Proyecto",
        title: "Simula consumo energético",
        description:
          "Construye un pequeño modelo de consumo, ahorro o predicción energética.",
      },
    ],
    suggestedProfiles: ["Pedro Ponce Cruz"],
    suggestedProjects: [
      "Simulador de consumo eléctrico",
      "Dashboard de ahorro energético",
      "Mapa conceptual de Smart Grid",
    ],
    suggestedConcepts: [
      "Smart Grid",
      "Smart Meter",
      "Energías renovables",
      "Microgrids",
      "Eficiencia energética",
    ],
  },
  {
    id: "manufactura-digital-twins",
    title: "Manufactura avanzada y Digital Twins",
    subtitle: "Industria 4.0/5.0, IA industrial y sistemas ciberfísicos.",
    description:
      "Ruta para estudiantes que quieren entender fábricas inteligentes, supply chain, IoT, simulación, digital twins y tecnologías industriales.",
    primaryInterest: "manufactura",
    recommendedFor: ["aprender-tecnologia", "crear-proyecto", "preparar-entrevista", "investigar"],
    difficulty: "Intermedio",
    duration: "5 semanas",
    steps: [
      {
        type: "Concepto",
        title: "Comprende qué es un sistema ciberfísico",
        description:
          "Un sistema físico conectado a sensores, software, datos y mecanismos de control.",
      },
      {
        type: "Concepto",
        title: "Entiende Digital Twins",
        description:
          "Un gemelo digital permite simular, monitorear y mejorar un proceso físico.",
      },
      {
        type: "Perfil",
        title: "Explora trayectorias de manufactura avanzada",
        description:
          "Busca perfiles que conecten investigación, industria, IA, energía y diseño de productos.",
      },
      {
        type: "Proyecto",
        title: "Diseña un digital twin conceptual",
        description:
          "Modela una máquina, proceso, almacén, línea de producción o sistema logístico.",
      },
    ],
    suggestedProfiles: ["Pedro Ponce Cruz"],
    suggestedProjects: [
      "Digital twin conceptual de una línea de producción",
      "Mapa de sensores para una fábrica",
      "Dashboard de indicadores industriales",
    ],
    suggestedConcepts: [
      "Digital Twin",
      "IoT",
      "Sistemas ciberfísicos",
      "Industria 4.0",
      "Supply Chain",
      "Manufactura sustentable",
    ],
  },
  {
    id: "datos-infraestructura",
    title: "Datos e infraestructura",
    subtitle: "De información dispersa a sistemas útiles para decidir.",
    description:
      "Ruta para estudiantes que quieren conectar bases de datos, analítica, dashboards, pipelines, cloud e inteligencia artificial aplicada.",
    primaryInterest: "datos",
    recommendedFor: ["aprender-tecnologia", "crear-proyecto", "preparar-entrevista"],
    difficulty: "Inicial",
    duration: "4 semanas",
    steps: [
      {
        type: "Concepto",
        title: "Aprende a pensar en entidades y relaciones",
        description:
          "Todo sistema serio empieza modelando personas, procesos, eventos, recursos y decisiones.",
      },
      {
        type: "Proyecto",
        title: "Diseña una base de datos simple",
        description:
          "Crea un modelo para perfiles, episodios, libros, papers, patentes y temas.",
      },
      {
        type: "Proyecto",
        title: "Construye un dashboard",
        description:
          "Visualiza métricas de impacto, perfiles documentados, temas más explorados y recursos consultados.",
      },
    ],
    suggestedProfiles: ["Pedro Ponce Cruz"],
    suggestedProjects: [
      "Base de datos de perfiles STEM",
      "Dashboard de episodios y recursos",
      "Buscador semántico básico",
    ],
    suggestedConcepts: [
      "SQL",
      "Modelado de datos",
      "ETL",
      "Dashboards",
      "Cloud",
      "Knowledge Graphs",
    ],
  },
  {
    id: "educacion-stem-impacto",
    title: "Educación STEM e impacto",
    subtitle: "Convertir conocimiento técnico en aprendizaje accesible.",
    description:
      "Ruta para estudiantes, profesores e instituciones que quieren usar entrevistas, proyectos y recursos para enseñar mejor STEM.",
    primaryInterest: "educacion",
    recommendedFor: ["elegir-carrera", "explorar-stem", "crear-proyecto"],
    difficulty: "Inicial",
    duration: "3 semanas",
    steps: [
      {
        type: "Concepto",
        title: "Entiende la educación STEM como experiencia",
        description:
          "No se trata solo de explicar teoría, sino de conectar historias, proyectos, preguntas y recursos.",
      },
      {
        type: "Perfil",
        title: "Explora profesores que han construido herramientas educativas",
        description:
          "Busca perfiles que hayan creado cursos, laboratorios, robots educativos o metodologías.",
      },
      {
        type: "Proyecto",
        title: "Diseña una actividad STEM",
        description:
          "Convierte una entrevista en preguntas, clips, ejercicios y una guía de clase.",
      },
    ],
    suggestedProfiles: ["Pedro Ponce Cruz"],
    suggestedProjects: [
      "Guía de clase basada en entrevista",
      "Mapa conceptual para estudiantes",
      "Actividad con robot o simulador",
    ],
    suggestedConcepts: [
      "ODS 4",
      "Aprendizaje basado en proyectos",
      "Robótica educativa",
      "Recursos abiertos",
      "Orientación vocacional",
    ],
  },
];
