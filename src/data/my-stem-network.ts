export type PersonalNetworkNodeType =
  | "user"
  | "person"
  | "contact"
  | "institution"
  | "topic"
  | "project"
  | "resource"
  | "goal";

export type PersonalNetworkNode = {
  id: string;
  label: string;
  type: PersonalNetworkNodeType;
  description: string;
  strength: "Alta" | "Media" | "Baja";
};

export type PersonalNetworkEdge = {
  id: string;
  source: string;
  target: string;
  label: string;
};

export type SavedStemItem = {
  id: string;
  title: string;
  type: "Perfil" | "Episodio" | "Libro" | "Proyecto" | "Concepto" | "Ruta";
  description: string;
  reason: string;
};

export type StemRecommendation = {
  id: string;
  title: string;
  type: "Perfil recomendado" | "Ruta recomendada" | "Proyecto sugerido" | "Área por explorar";
  description: string;
  why: string;
};

export const personalNetworkNodes: PersonalNetworkNode[] = [
  {
    id: "me",
    label: "Mi perfil STEM",
    type: "user",
    description:
      "Centro de la red personal. Aquí se conectan intereses, perfiles guardados, contactos, instituciones, proyectos y objetivos.",
    strength: "Alta",
  },
  {
    id: "pedro-ponce",
    label: "Pedro Ponce Cruz",
    type: "person",
    description:
      "Perfil guardado por su trayectoria en control inteligente, IA aplicada, energía, robótica y manufactura avanzada.",
    strength: "Alta",
  },
  {
    id: "tec-monterrey",
    label: "Tecnológico de Monterrey",
    type: "institution",
    description:
      "Institución central dentro del ecosistema académico y profesional del usuario.",
    strength: "Alta",
  },
  {
    id: "campus-monterrey",
    label: "Campus Monterrey",
    type: "institution",
    description:
      "Campus base del usuario y posible punto de grabación de entrevistas iniciales.",
    strength: "Alta",
  },
  {
    id: "campus-cdmx",
    label: "Campus Ciudad de México",
    type: "institution",
    description:
      "Campus relevante para futuros episodios, profesores, directores e investigadores.",
    strength: "Media",
  },
  {
    id: "ia-industrial",
    label: "IA industrial",
    type: "topic",
    description:
      "Interés conectado con manufactura, datos, automatización, digital twins, control y sistemas físicos.",
    strength: "Alta",
  },
  {
    id: "digital-twins",
    label: "Digital Twins",
    type: "topic",
    description:
      "Tema estratégico para manufactura avanzada, infraestructura, simulación y sistemas ciberfísicos.",
    strength: "Alta",
  },
  {
    id: "knowledge-graphs",
    label: "Knowledge Graphs",
    type: "topic",
    description:
      "Concepto central para modelar personas, instituciones, recursos y trayectorias como una red explorable.",
    strength: "Alta",
  },
  {
    id: "graph-rag",
    label: "GraphRAG",
    type: "topic",
    description:
      "Futura capa de IA para responder preguntas usando el grafo de conocimiento y las fuentes del archivo.",
    strength: "Media",
  },
  {
    id: "archivo-stem",
    label: "Archivo STEM",
    type: "project",
    description:
      "Proyecto principal para documentar trayectorias STEM y convertirlas en experiencias educativas.",
    strength: "Alta",
  },
  {
    id: "puente-impacto",
    label: "Puente Impacto",
    type: "project",
    description:
      "Proyecto conectado al impacto social, orientación, educación y colaboración institucional.",
    strength: "Media",
  },
  {
    id: "libro-control-labview",
    label: "Intelligent Control Systems with LabVIEW",
    type: "resource",
    description:
      "Recurso guardado para entender control inteligente, lógica difusa, redes neuronales y LabVIEW.",
    strength: "Media",
  },
  {
    id: "libro-ia-ingenieria",
    label: "IA con Aplicaciones a la Ingeniería",
    type: "resource",
    description:
      "Libro relevante para preparar entrevistas y entender IA aplicada a sistemas de ingeniería.",
    strength: "Alta",
  },
  {
    id: "big-tech",
    label: "Big Tech / AI Infra",
    type: "goal",
    description:
      "Objetivo profesional conectado con IA, datos, infraestructura, cloud, sistemas y proyectos de alto impacto.",
    strength: "Media",
  },
  {
    id: "ods-educacion",
    label: "ODS 4 Educación",
    type: "goal",
    description:
      "Marco de impacto para convertir Archivo STEM en recurso educativo medible y reutilizable.",
    strength: "Alta",
  },
  {
    id: "contacto-directores",
    label: "Directores y profesores",
    type: "contact",
    description:
      "Red de posibles invitados, mentores y aliados institucionales para grabar episodios y abrir puertas.",
    strength: "Media",
  },
];

export const personalNetworkEdges: PersonalNetworkEdge[] = [
  { id: "e1", source: "me", target: "archivo-stem", label: "construye" },
  { id: "e2", source: "me", target: "tec-monterrey", label: "estudia en" },
  { id: "e3", source: "tec-monterrey", target: "campus-monterrey", label: "incluye" },
  { id: "e4", source: "tec-monterrey", target: "campus-cdmx", label: "incluye" },
  { id: "e5", source: "me", target: "pedro-ponce", label: "guarda perfil" },
  { id: "e6", source: "pedro-ponce", target: "campus-cdmx", label: "investiga en" },
  { id: "e7", source: "pedro-ponce", target: "ia-industrial", label: "conecta con" },
  { id: "e8", source: "pedro-ponce", target: "libro-control-labview", label: "publicó" },
  { id: "e9", source: "pedro-ponce", target: "libro-ia-ingenieria", label: "publicó" },
  { id: "e10", source: "archivo-stem", target: "knowledge-graphs", label: "usa" },
  { id: "e11", source: "knowledge-graphs", target: "graph-rag", label: "habilita" },
  { id: "e12", source: "archivo-stem", target: "ods-educacion", label: "aporta a" },
  { id: "e13", source: "archivo-stem", target: "puente-impacto", label: "se conecta con" },
  { id: "e14", source: "ia-industrial", target: "digital-twins", label: "se relaciona con" },
  { id: "e15", source: "digital-twins", target: "big-tech", label: "fortalece narrativa" },
  { id: "e16", source: "knowledge-graphs", target: "big-tech", label: "fortalece portafolio" },
  { id: "e17", source: "me", target: "contacto-directores", label: "puede activar" },
  { id: "e18", source: "contacto-directores", target: "campus-cdmx", label: "abre puertas" },
];

export const savedStemItems: SavedStemItem[] = [
  {
    id: "saved-1",
    title: "Pedro Ponce Cruz",
    type: "Perfil",
    description:
      "Investigador con trayectoria en control inteligente, IA aplicada, smart grids, robótica y manufactura.",
    reason:
      "Perfil estratégico para Archivo STEM por su producción académica, patentes, proyectos sociales y trayectoria institucional.",
  },
  {
    id: "saved-2",
    title: "IA aplicada a ingeniería",
    type: "Concepto",
    description:
      "Uso de IA para resolver problemas técnicos en sistemas físicos, industria, energía, control y robótica.",
    reason:
      "Tema central para conectar entrevistas, roadmaps, biblioteca y posicionamiento técnico del proyecto.",
  },
  {
    id: "saved-3",
    title: "Knowledge Graphs",
    type: "Concepto",
    description:
      "Estructura de nodos y relaciones para modelar conocimiento como una red explorable.",
    reason:
      "Base conceptual del Atlas STEM, Mi Red STEM y futuras recomendaciones con IA.",
  },
  {
    id: "saved-4",
    title: "Control inteligente e IA aplicada",
    type: "Ruta",
    description:
      "Ruta para entender lógica difusa, redes neuronales, sistemas neuro-difusos, LabVIEW y control.",
    reason:
      "Ruta útil para preparar entrevistas con investigadores de control, automatización e IA industrial.",
  },
];

export const stemRecommendations: StemRecommendation[] = [
  {
    id: "rec-1",
    title: "Explorar investigadores de manufactura avanzada",
    type: "Área por explorar",
    description:
      "Buscar profesores o directores relacionados con Industria 4.0, digital twins, CPS, supply chain e IA industrial.",
    why:
      "Tu red actual ya conecta IA, manufactura y educación. Esta línea puede fortalecer tanto Archivo STEM como portafolio técnico.",
  },
  {
    id: "rec-2",
    title: "Crear colección institucional sobre IA aplicada",
    type: "Ruta recomendada",
    description:
      "Usar perfiles, clips y recursos para crear una colección educativa para preparatorias y primeros semestres.",
    why:
      "Convierte contenido en herramienta ODS 4, no solo en publicación de redes sociales.",
  },
  {
    id: "rec-3",
    title: "Construir buscador semántico del archivo",
    type: "Proyecto sugerido",
    description:
      "Indexar perfiles, transcripciones, libros y temas con embeddings para permitir búsqueda por significado.",
    why:
      "Es una función técnicamente fuerte para LinkedIn, portafolio y futuras integraciones con GraphRAG.",
  },
  {
    id: "rec-4",
    title: "Mapear campus, directores y profesores",
    type: "Proyecto sugerido",
    description:
      "Crear una red de invitados potenciales por campus, institución, área y relación con otros invitados.",
    why:
      "Ayuda a planear grabaciones, pedir introducciones y convertir Archivo STEM en red viva de conocimiento.",
  },
];
