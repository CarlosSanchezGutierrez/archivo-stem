export type AtlasNodeType =
  | "person"
  | "institution"
  | "campus"
  | "topic"
  | "book"
  | "project"
  | "technology"
  | "course"
  | "patent";

export type AtlasNode = {
  id: string;
  label: string;
  type: AtlasNodeType;
  description?: string;
};

export type AtlasEdge = {
  id: string;
  source: string;
  target: string;
  label: string;
};

export const atlasNodes: AtlasNode[] = [
  {
    id: "pedro-ponce",
    label: "Pedro Ponce Cruz",
    type: "person",
    description:
      "Investigador enfocado en control inteligente, IA aplicada, energía, robótica, educación STEM y manufactura avanzada.",
  },
  {
    id: "tec",
    label: "Tecnológico de Monterrey",
    type: "institution",
    description: "Institución universitaria donde se desarrolla parte central de su trayectoria académica.",
  },
  {
    id: "ccm",
    label: "Campus Ciudad de México",
    type: "campus",
    description: "Campus asociado a investigación, posgrado, ingeniería y proyectos tecnológicos.",
  },
  {
    id: "ipn",
    label: "Instituto Politécnico Nacional",
    type: "institution",
    description: "Institución base de formación en control, automatización e ingeniería eléctrica.",
  },
  {
    id: "mit",
    label: "MIT",
    type: "institution",
    description: "Institución relacionada con manufactura avanzada, máquinas eléctricas y formación técnica.",
  },
  {
    id: "berkeley",
    label: "UC Berkeley",
    type: "institution",
    description: "Institución relacionada con investigación en dispositivos conectados, energía e interfaces.",
  },
  {
    id: "ni",
    label: "National Instruments",
    type: "institution",
    description: "Empresa clave para LabVIEW, instrumentación, control, robótica y sistemas en tiempo real.",
  },
  {
    id: "control-inteligente",
    label: "Control inteligente",
    type: "topic",
    description:
      "Área que combina control automático, lógica difusa, redes neuronales, predicción y optimización.",
  },
  {
    id: "ia-aplicada",
    label: "IA aplicada a ingeniería",
    type: "topic",
    description:
      "Uso de inteligencia artificial para resolver problemas físicos, industriales, energéticos y educativos.",
  },
  {
    id: "smart-grids",
    label: "Smart Grids",
    type: "topic",
    description:
      "Redes eléctricas inteligentes con medición, control, simulación, energía distribuida y sistemas conectados.",
  },
  {
    id: "robotica",
    label: "Robótica",
    type: "topic",
    description:
      "Robots educativos, sociales, asistivos e industriales como plataformas para enseñanza, terapia y control.",
  },
  {
    id: "manufactura",
    label: "Manufactura avanzada",
    type: "topic",
    description:
      "Industria 4.0/5.0, digital twins, sistemas ciberfísicos, IA industrial y tecnologías habilitadoras.",
  },
  {
    id: "energia",
    label: "Energía",
    type: "topic",
    description:
      "Sistemas eléctricos, smart grids, energía renovable, eficiencia energética y electrónica de potencia.",
  },
  {
    id: "educacion-stem",
    label: "Educación STEM",
    type: "topic",
    description:
      "Uso de laboratorios, robótica, cursos, proyectos y recursos abiertos para formar nuevas generaciones.",
  },
  {
    id: "labview",
    label: "LabVIEW",
    type: "technology",
    description:
      "Herramienta gráfica para adquisición de datos, instrumentación, control, visualización e integración con hardware.",
  },
  {
    id: "digital-twins",
    label: "Digital Twins",
    type: "technology",
    description:
      "Representaciones digitales de sistemas físicos para simulación, monitoreo, predicción y control.",
  },
  {
    id: "book-ia",
    label: "IA con Aplicaciones a la Ingeniería",
    type: "book",
    description:
      "Libro orientado a técnicas de inteligencia artificial aplicadas a problemas de ingeniería.",
  },
  {
    id: "book-control",
    label: "Intelligent Control Systems with LabVIEW",
    type: "book",
    description:
      "Libro sobre lógica difusa, redes neuronales, neuro-fuzzy, métodos evolutivos y control inteligente con LabVIEW.",
  },
  {
    id: "book-robotica",
    label: "Robótica Aplicada con LabVIEW y LEGO",
    type: "book",
    description:
      "Libro práctico sobre robótica educativa, sensores, motores, control y programación gráfica.",
  },
  {
    id: "project-wheelchair",
    label: "Silla de ruedas inteligente",
    type: "project",
    description:
      "Proyecto asistivo con sensores, interfaces y lógica difusa para navegación inteligente.",
  },
  {
    id: "project-autism",
    label: "Robot para niños con autismo",
    type: "project",
    description:
      "Robot social para apoyar terapias mediante expresiones, interacción y actividades multimedia.",
  },
  {
    id: "project-greenhouse",
    label: "Invernadero inteligente",
    type: "project",
    description:
      "Sistema físico con sensores, actuadores y control inteligente aplicado a agricultura protegida.",
  },
  {
    id: "course-smart-grid",
    label: "Curso Smart Grid",
    type: "course",
    description:
      "Curso abierto sobre redes eléctricas inteligentes, energía y sistemas conectados.",
  },
  {
    id: "patent-toolkit",
    label: "Intelligent Control Toolkit",
    type: "patent",
    description:
      "Propiedad intelectual relacionada con herramientas de control neuro-difuso e integración con LabVIEW.",
  },
];

export const atlasEdges: AtlasEdge[] = [
  {
    id: "e1",
    source: "pedro-ponce",
    target: "tec",
    label: "investiga en",
  },
  {
    id: "e2",
    source: "tec",
    target: "ccm",
    label: "incluye",
  },
  {
    id: "e3",
    source: "pedro-ponce",
    target: "ipn",
    label: "se formó en",
  },
  {
    id: "e4",
    source: "pedro-ponce",
    target: "mit",
    label: "estancia / formación",
  },
  {
    id: "e5",
    source: "pedro-ponce",
    target: "berkeley",
    label: "investigación",
  },
  {
    id: "e6",
    source: "pedro-ponce",
    target: "ni",
    label: "colaboración técnica",
  },
  {
    id: "e7",
    source: "pedro-ponce",
    target: "control-inteligente",
    label: "investiga",
  },
  {
    id: "e8",
    source: "pedro-ponce",
    target: "ia-aplicada",
    label: "aplica",
  },
  {
    id: "e9",
    source: "control-inteligente",
    target: "labview",
    label: "implementado con",
  },
  {
    id: "e10",
    source: "control-inteligente",
    target: "smart-grids",
    label: "se aplica en",
  },
  {
    id: "e11",
    source: "control-inteligente",
    target: "robotica",
    label: "se aplica en",
  },
  {
    id: "e12",
    source: "ia-aplicada",
    target: "manufactura",
    label: "habilita",
  },
  {
    id: "e13",
    source: "manufactura",
    target: "digital-twins",
    label: "usa",
  },
  {
    id: "e14",
    source: "smart-grids",
    target: "energia",
    label: "pertenece a",
  },
  {
    id: "e15",
    source: "robotica",
    target: "educacion-stem",
    label: "apoya",
  },
  {
    id: "e16",
    source: "pedro-ponce",
    target: "book-ia",
    label: "publicó",
  },
  {
    id: "e17",
    source: "pedro-ponce",
    target: "book-control",
    label: "publicó",
  },
  {
    id: "e18",
    source: "pedro-ponce",
    target: "book-robotica",
    label: "publicó",
  },
  {
    id: "e19",
    source: "book-control",
    target: "labview",
    label: "usa",
  },
  {
    id: "e20",
    source: "book-control",
    target: "control-inteligente",
    label: "explica",
  },
  {
    id: "e21",
    source: "book-robotica",
    target: "robotica",
    label: "explica",
  },
  {
    id: "e22",
    source: "pedro-ponce",
    target: "project-wheelchair",
    label: "desarrolló",
  },
  {
    id: "e23",
    source: "pedro-ponce",
    target: "project-autism",
    label: "desarrolló",
  },
  {
    id: "e24",
    source: "pedro-ponce",
    target: "project-greenhouse",
    label: "desarrolló",
  },
  {
    id: "e25",
    source: "project-wheelchair",
    target: "robotica",
    label: "usa",
  },
  {
    id: "e26",
    source: "project-autism",
    target: "robotica",
    label: "usa",
  },
  {
    id: "e27",
    source: "project-greenhouse",
    target: "control-inteligente",
    label: "usa",
  },
  {
    id: "e28",
    source: "course-smart-grid",
    target: "smart-grids",
    label: "enseña",
  },
  {
    id: "e29",
    source: "pedro-ponce",
    target: "course-smart-grid",
    label: "imparte",
  },
  {
    id: "e30",
    source: "pedro-ponce",
    target: "patent-toolkit",
    label: "registró",
  },
  {
    id: "e31",
    source: "patent-toolkit",
    target: "control-inteligente",
    label: "implementa",
  },
  {
    id: "e32",
    source: "patent-toolkit",
    target: "labview",
    label: "integra",
  },
];
