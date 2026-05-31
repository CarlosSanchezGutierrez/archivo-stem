import type { StemPersonProfile } from "@/types/archive";

export const people: StemPersonProfile[] = [
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
    longBio:
      "Su trayectoria conecta ingeniería de control, automatización, inteligencia artificial, robótica, energía, manufactura, educación e innovación aplicada. Su trabajo representa una forma de ingeniería orientada a tomar sistemas físicos reales, medirlos, modelarlos, controlarlos y convertirlos en soluciones útiles para la industria y la sociedad.",
    areas: [
      "Control inteligente",
      "Inteligencia artificial",
      "Smart grids",
      "Robótica educativa",
      "Manufactura avanzada",
      "Sistemas ciberfísicos",
      "LabVIEW",
      "Energía",
      "Educación STEM",
    ],
    stats: {
      books: 20,
      papers: 200,
      patents: 12,
      years: 24,
    },
    archiveQuestion:
      "¿Qué conocimiento técnico, científico o humano considera que México debe preservar para las próximas generaciones de ingenieros e investigadores?",
    timeline: [
      {
        year: "1995",
        title: "Ingeniería en Control y Automatización",
        description:
          "Formación base en control, automatización, sistemas eléctricos y tecnologías industriales.",
        category: "Formación",
      },
      {
        year: "2002",
        title: "Doctorado en ingeniería eléctrica, control e inteligencia artificial",
        description:
          "Consolidación de una línea técnica centrada en control inteligente, sistemas eléctricos e IA aplicada.",
        category: "Formación",
      },
      {
        year: "2009",
        title: "Intelligent Control Toolkit",
        description:
          "Desarrollo de herramientas de control inteligente conectadas con LabVIEW, sistemas neuro-difusos e implementación aplicada.",
        category: "Patente",
      },
      {
        year: "2010",
        title: "Dirección de programas de maestría y doctorado",
        description:
          "Liderazgo académico en programas de ingeniería, investigación y formación de posgrado.",
        category: "Institución",
      },
      {
        year: "2016",
        title: "Robótica social y proyectos de impacto humano",
        description:
          "Desarrollo de tecnología aplicada a educación, autismo, asistencia, interacción humano-robot y sistemas inteligentes.",
        category: "Proyecto",
      },
      {
        year: "2019",
        title: "Smart homes, smart grids y productos sociales",
        description:
          "Trabajo en tecnologías inteligentes para ahorro energético, comportamiento humano, interfaces y sustentabilidad.",
        category: "Investigación",
      },
      {
        year: "2025",
        title: "Manufactura avanzada e Industria 4.0/5.0",
        description:
          "Integración de inteligencia artificial, digital twins, sistemas ciberfísicos y tecnologías habilitadoras para manufactura.",
        category: "Investigación",
      },
    ],
    resources: [
      {
        title: "Inteligencia Artificial con Aplicaciones a la Ingeniería",
        type: "Libro",
        description:
          "Libro orientado a introducir técnicas de IA aplicadas a problemas de ingeniería.",
      },
      {
        title: "Intelligent Control Systems with LabVIEW",
        type: "Libro",
        description:
          "Obra sobre control inteligente, lógica difusa, redes neuronales, sistemas neuro-difusos y métodos evolutivos usando LabVIEW.",
      },
      {
        title: "Robótica Aplicada con LabVIEW y LEGO",
        type: "Libro",
        description:
          "Libro práctico para explorar robótica educativa, sensores, motores, control y programación gráfica.",
      },
      {
        title: "Power System Fundamentals",
        type: "Libro",
        description:
          "Introducción a sistemas eléctricos de potencia y su evolución hacia smart grids.",
      },
      {
        title: "Greenhouse Design and Control",
        type: "Libro",
        description:
          "Diseño y control de invernaderos inteligentes como sistemas físicos complejos con sensores, actuadores y control avanzado.",
      },
      {
        title: "Smart Grid: las redes eléctricas del futuro",
        type: "Curso",
        description:
          "Curso abierto sobre redes eléctricas inteligentes, energía, medición y sistemas conectados.",
      },
    ],
    projects: [
      {
        title: "Silla de ruedas inteligente",
        type: "Proyecto",
        description:
          "Sistema asistivo con sensores, interfaces y lógica difusa para navegación inteligente.",
      },
      {
        title: "Robot para terapias de niños con autismo",
        type: "Proyecto",
        description:
          "Robot social orientado a apoyar terapias mediante expresiones, interacción y actividades multimedia.",
      },
      {
        title: "Robots para enseñar matemáticas",
        type: "Proyecto",
        description:
          "Uso de plataformas robóticas para apoyar aprendizaje de matemáticas en educación básica.",
      },
      {
        title: "Invernadero inteligente",
        type: "Proyecto",
        description:
          "Sistema controlado mediante sensores, actuadores y lógica difusa para agricultura protegida.",
      },
      {
        title: "Smart Grid Laboratory",
        type: "Proyecto",
        description:
          "Laboratorio y plataforma educativa para estudiar redes eléctricas inteligentes y energía.",
      },
      {
        title: "Smart thermostats y ahorro energético",
        type: "Proyecto",
        description:
          "Investigación sobre interfaces, gamificación, comportamiento humano y ahorro energético en hogares conectados.",
      },
    ],
    knowledgeConnections: [
      {
        source: "Pedro Ponce Cruz",
        relation: "investiga",
        target: "Control inteligente",
      },
      {
        source: "Pedro Ponce Cruz",
        relation: "aplica",
        target: "Inteligencia artificial",
      },
      {
        source: "Pedro Ponce Cruz",
        relation: "trabaja en",
        target: "Tecnológico de Monterrey",
      },
      {
        source: "Pedro Ponce Cruz",
        relation: "usa",
        target: "LabVIEW",
      },
      {
        source: "LabVIEW",
        relation: "habilita",
        target: "Instrumentación y control",
      },
      {
        source: "Control inteligente",
        relation: "se aplica en",
        target: "Smart grids",
      },
      {
        source: "Control inteligente",
        relation: "se aplica en",
        target: "Robótica",
      },
      {
        source: "Inteligencia artificial",
        relation: "se aplica en",
        target: "Manufactura avanzada",
      },
      {
        source: "Robótica",
        relation: "impacta",
        target: "Educación STEM",
      },
    ],
  },
];

export const featuredPeople = people;

export function getPersonBySlug(slug: string) {
  return people.find((person) => person.slug === slug);
}
