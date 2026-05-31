export type LibraryResourceType =
  | "Libro"
  | "Paper"
  | "Patente"
  | "Curso"
  | "Proyecto"
  | "Video"
  | "Concepto";

export type LibraryResource = {
  id: string;
  title: string;
  type: LibraryResourceType;
  authorOrCreator: string;
  year?: string;
  personName?: string;
  personSlug?: string;
  institution?: string;
  description: string;
  whyItMatters: string;
  topics: string[];
  difficulty: "Inicial" | "Intermedio" | "Avanzado";
  status?: "Publicado" | "En desarrollo" | "Registrado" | "Pendiente" | "Curado";
};

export const libraryResources: LibraryResource[] = [
  {
    id: "ia-aplicaciones-ingenieria",
    title: "Inteligencia Artificial con Aplicaciones a la Ingeniería",
    type: "Libro",
    authorOrCreator: "Pedro Ponce Cruz",
    personName: "Pedro Ponce Cruz",
    personSlug: "pedro-ponce-cruz",
    institution: "Alfaomega",
    description:
      "Libro orientado a introducir técnicas de inteligencia artificial aplicadas a problemas reales de ingeniería.",
    whyItMatters:
      "Es una entrada directa para entender cómo se traslada la IA desde la teoría hacia sistemas técnicos y físicos.",
    topics: ["Inteligencia artificial", "Ingeniería", "Control inteligente", "Sistemas inteligentes"],
    difficulty: "Intermedio",
    status: "Publicado",
  },
  {
    id: "intelligent-control-systems-labview",
    title: "Intelligent Control Systems with LabVIEW",
    type: "Libro",
    authorOrCreator: "Pedro Ponce Cruz, Fernando D. Ramírez-Figueroa",
    personName: "Pedro Ponce Cruz",
    personSlug: "pedro-ponce-cruz",
    institution: "Springer",
    description:
      "Obra sobre control inteligente, lógica difusa, redes neuronales, sistemas neuro-difusos, métodos evolutivos y métodos predictivos usando LabVIEW.",
    whyItMatters:
      "Representa una parte central del ADN técnico de control, automatización, IA aplicada e instrumentación.",
    topics: ["Control inteligente", "LabVIEW", "Lógica difusa", "Redes neuronales", "Automatización"],
    difficulty: "Avanzado",
    status: "Publicado",
  },
  {
    id: "robotica-labview-lego",
    title: "Robótica Aplicada con LabVIEW y LEGO",
    type: "Libro",
    authorOrCreator: "Pedro Ponce Cruz, Víctor M. de la Cueva Hernández, Hiram Ponce Espinosa",
    personName: "Pedro Ponce Cruz",
    personSlug: "pedro-ponce-cruz",
    institution: "Alfaomega",
    description:
      "Libro práctico sobre robótica educativa, sensores, motores, control y programación gráfica usando LabVIEW y LEGO.",
    whyItMatters:
      "Permite ver cómo se puede enseñar ingeniería con sistemas físicos, plataformas educativas y proyectos tangibles.",
    topics: ["Robótica", "Educación STEM", "LabVIEW", "LEGO", "Sensores"],
    difficulty: "Inicial",
    status: "Publicado",
  },
  {
    id: "power-system-fundamentals",
    title: "Power System Fundamentals",
    type: "Libro",
    authorOrCreator: "Pedro Ponce, Arturo Molina, Omar Mata, Luis Ibarra, Bryan MacCleery",
    personName: "Pedro Ponce Cruz",
    personSlug: "pedro-ponce-cruz",
    institution: "CRC Press",
    description:
      "Libro sobre fundamentos de sistemas eléctricos de potencia y su evolución hacia redes eléctricas inteligentes.",
    whyItMatters:
      "Conecta ingeniería eléctrica clásica con smart grids, energía, medición inteligente y sistemas conectados.",
    topics: ["Energía", "Smart Grids", "Sistemas eléctricos", "Infraestructura"],
    difficulty: "Avanzado",
    status: "Publicado",
  },
  {
    id: "greenhouse-design-control",
    title: "Greenhouse Design and Control",
    type: "Libro",
    authorOrCreator: "Pedro Ponce, Arturo Molina, Paul Cepeda, Esther Lugo, Brian MacCleery",
    personName: "Pedro Ponce Cruz",
    personSlug: "pedro-ponce-cruz",
    institution: "CRC Press",
    description:
      "Libro sobre diseño, simulación, estructura, automatización y control avanzado de invernaderos.",
    whyItMatters:
      "Muestra cómo un invernadero puede entenderse como un sistema ciberfísico completo: sensores, actuadores, control, simulación y sustentabilidad.",
    topics: ["Control", "Agricultura inteligente", "Sistemas ciberfísicos", "Sustentabilidad"],
    difficulty: "Intermedio",
    status: "Publicado",
  },
  {
    id: "digital-technologies-sustainable-manufacturing",
    title: "Digital Technologies for Sustainable Manufacturing",
    type: "Libro",
    authorOrCreator: "Arturo Molina, Alex Elías Zúñiga, Dora Iliana Medina, Pedro Ponce Cruz y colaboradores",
    personName: "Pedro Ponce Cruz",
    personSlug: "pedro-ponce-cruz",
    institution: "CRC Press",
    description:
      "Libro sobre tecnologías digitales para manufactura sustentable, incluyendo IA, simulación, IoT, digital twins, cloud, blockchain, AR/VR, robótica y automatización.",
    whyItMatters:
      "Conecta directamente con Industria 4.0/5.0, manufactura avanzada, supply chain, sostenibilidad e infraestructura industrial.",
    topics: ["Manufactura avanzada", "Digital Twins", "IoT", "Industria 4.0", "Sostenibilidad"],
    difficulty: "Intermedio",
    status: "Publicado",
  },
  {
    id: "robot-autismo",
    title: "Robot para terapias de niños con autismo",
    type: "Proyecto",
    authorOrCreator: "Pedro Ponce Cruz y equipo",
    personName: "Pedro Ponce Cruz",
    personSlug: "pedro-ponce-cruz",
    institution: "Tecnológico de Monterrey",
    description:
      "Proyecto de robótica social orientado a apoyar terapias para niños con autismo mediante expresiones, interacción y actividades multimedia.",
    whyItMatters:
      "Demuestra cómo la robótica y la inteligencia artificial pueden aplicarse a problemas humanos, educativos y terapéuticos.",
    topics: ["Robótica social", "Autismo", "IA aplicada", "Salud", "Impacto social"],
    difficulty: "Intermedio",
    status: "Curado",
  },
  {
    id: "silla-ruedas-inteligente",
    title: "Silla de ruedas inteligente",
    type: "Proyecto",
    authorOrCreator: "Pedro Ponce Cruz y equipo",
    personName: "Pedro Ponce Cruz",
    personSlug: "pedro-ponce-cruz",
    institution: "Tecnológico de Monterrey",
    description:
      "Silla de ruedas equipada con sensores, lógica difusa e interfaces por voz, cabeza o movimiento ocular para navegación inteligente.",
    whyItMatters:
      "Es un ejemplo claro de ingeniería asistiva, control inteligente e IA aplicada a autonomía humana.",
    topics: ["Robótica asistiva", "Lógica difusa", "Salud", "Accesibilidad", "Control inteligente"],
    difficulty: "Avanzado",
    status: "Curado",
  },
  {
    id: "smart-grid-course",
    title: "Smart Grid: las redes eléctricas del futuro",
    type: "Curso",
    authorOrCreator: "Pedro Ponce Cruz",
    personName: "Pedro Ponce Cruz",
    personSlug: "pedro-ponce-cruz",
    institution: "edX / Tecnológico de Monterrey",
    description:
      "Curso abierto sobre redes eléctricas inteligentes, medición, consumo, energía y sistemas conectados.",
    whyItMatters:
      "Convierte conocimiento técnico sobre energía en un recurso educativo accesible para estudiantes e instituciones.",
    topics: ["Smart Grids", "Energía", "Educación abierta", "Sistemas eléctricos"],
    difficulty: "Inicial",
    status: "Publicado",
  },
  {
    id: "intelligent-control-toolkit",
    title: "Intelligent Control Toolkit",
    type: "Patente",
    authorOrCreator: "Pedro Ponce Cruz y colaboradores",
    personName: "Pedro Ponce Cruz",
    personSlug: "pedro-ponce-cruz",
    institution: "Tecnológico de Monterrey / National Instruments",
    description:
      "Herramienta de control inteligente relacionada con sistemas neuro-difusos, predicción, lógica difusa e integración con LabVIEW.",
    whyItMatters:
      "Es una pieza clave para entender la transición entre investigación académica, software, propiedad intelectual e implementación industrial.",
    topics: ["Patentes", "Control inteligente", "LabVIEW", "Transferencia tecnológica"],
    difficulty: "Avanzado",
    status: "Registrado",
  },
  {
    id: "knowledge-graphs",
    title: "Grafos de conocimiento",
    type: "Concepto",
    authorOrCreator: "Archivo STEM",
    description:
      "Estructuras que representan información mediante nodos y relaciones: personas, instituciones, temas, proyectos, libros, papers y patentes.",
    whyItMatters:
      "Son la base conceptual del Atlas STEM y permiten navegar el conocimiento como una red conectada.",
    topics: ["Knowledge Graphs", "Datos", "IA", "Búsqueda semántica", "GraphRAG"],
    difficulty: "Intermedio",
    status: "Curado",
  },
  {
    id: "graph-rag",
    title: "GraphRAG",
    type: "Concepto",
    authorOrCreator: "Archivo STEM",
    description:
      "Enfoque que combina recuperación aumentada por generación con grafos de conocimiento para responder preguntas usando relaciones explícitas.",
    whyItMatters:
      "Puede permitir que Archivo STEM responda preguntas usando entrevistas, transcripciones, perfiles, temas y relaciones entre personas.",
    topics: ["GraphRAG", "IA", "Knowledge Graphs", "Embeddings", "Búsqueda semántica"],
    difficulty: "Avanzado",
    status: "Curado",
  },
];

export const libraryTypes: Array<LibraryResourceType | "Todos"> = [
  "Todos",
  "Libro",
  "Paper",
  "Patente",
  "Curso",
  "Proyecto",
  "Video",
  "Concepto",
];

export const libraryTopics = Array.from(
  new Set(libraryResources.flatMap((resource) => resource.topics)),
).sort();
