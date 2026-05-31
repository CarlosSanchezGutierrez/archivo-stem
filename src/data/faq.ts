export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  title: string;
  description: string;
  items: FaqItem[];
};

export const faqGroups: FaqGroup[] = [
  {
    title: "Sobre Archivo STEM",
    description:
      "Preguntas para entender la intención general del proyecto y su diferencia frente a un podcast tradicional.",
    items: [
      {
        question: "¿Qué es Archivo STEM?",
        answer:
          "Archivo STEM es un archivo digital para documentar, preservar y explorar trayectorias de investigadores, profesores, ingenieros, científicos y profesionistas STEM. Su objetivo no es solo publicar entrevistas, sino convertirlas en perfiles, bibliotecas, líneas temporales, grafos de conocimiento, recursos educativos y rutas de aprendizaje.",
      },
      {
        question: "¿Archivo STEM es un podcast?",
        answer:
          "El podcast es una parte del proyecto, pero no es el producto completo. Cada episodio debe convertirse en una ficha documental con capítulos, extractos, transcripción, ideas clave, recursos conectados y preguntas educativas.",
      },
      {
        question: "¿Por qué documentar trayectorias STEM?",
        answer:
          "Porque gran parte del conocimiento de profesores e investigadores queda disperso en clases, laboratorios, libros, papers, tesis, anécdotas y proyectos institucionales. Archivo STEM busca reunir esas piezas para que nuevas generaciones puedan aprender de ellas con contexto.",
      },
    ],
  },
  {
    title: "Invitados y perfiles",
    description:
      "Criterios para seleccionar personas, construir perfiles y preservar su obra.",
    items: [
      {
        question: "¿A quién busca entrevistar Archivo STEM?",
        answer:
          "A personas con trayectorias relevantes en ciencia, tecnología, ingeniería, matemáticas, educación, investigación, innovación, industria o impacto social. Pueden ser profesores, investigadores, directores, profesionistas, científicos, emprendedores o líderes técnicos.",
      },
      {
        question: "¿Qué contiene una sala de archivo?",
        answer:
          "Una sala de archivo puede incluir biografía, áreas de conocimiento, entrevista, línea temporal, libros, papers, patentes, cursos, proyectos, instituciones, colaboradores, mapa de influencia, recursos para estudiantes y una pregunta de legado.",
      },
      {
        question: "¿Por qué registrar libros, papers, patentes y proyectos?",
        answer:
          "Porque la trayectoria de una persona no se entiende solo por su cargo. Su obra publicada, sus proyectos, su propiedad intelectual y sus cursos explican cómo piensa, enseña, investiga y transfiere conocimiento.",
      },
    ],
  },
  {
    title: "Uso educativo",
    description:
      "Cómo el archivo puede convertirse en material para estudiantes, profesores e instituciones.",
    items: [
      {
        question: "¿Cómo puede usarlo un estudiante?",
        answer:
          "Un estudiante puede explorar perfiles, ver episodios, consultar recursos, seguir rutas de aprendizaje, identificar áreas de interés, entender trayectorias reales y obtener ideas para proyectos o entrevistas.",
      },
      {
        question: "¿Cómo puede usarlo una institución?",
        answer:
          "Una institución puede usar Archivo STEM como material de orientación vocacional, clase, seminario, cultura científica, semana de carreras o programa STEM. Las entrevistas pueden convertirse en clips, preguntas de discusión, actividades, guías y colecciones temáticas.",
      },
      {
        question: "¿Cómo se conecta con el ODS 4?",
        answer:
          "Archivo STEM se conecta con educación de calidad porque preserva conocimiento, lo vuelve accesible, genera recursos reutilizables y ayuda a estudiantes a explorar áreas STEM mediante trayectorias reales.",
      },
    ],
  },
  {
    title: "Tecnología y futuro",
    description:
      "Conceptos técnicos que dan estructura al producto y preparan su evolución.",
    items: [
      {
        question: "¿Qué papel tiene el Atlas STEM?",
        answer:
          "El Atlas STEM permite visualizar relaciones entre personas, instituciones, campus, temas, tecnologías, proyectos, libros, cursos y patentes. No es decoración: es una forma de leer trayectorias como redes de conocimiento.",
      },
      {
        question: "¿Qué son los grafos de conocimiento en este proyecto?",
        answer:
          "Son una forma de modelar el archivo mediante nodos y relaciones. Por ejemplo: una persona publicó un libro, estudió en una institución, desarrolló un proyecto, investiga un tema o aparece en un episodio.",
      },
      {
        question: "¿Dónde entra la inteligencia artificial?",
        answer:
          "La IA puede apoyar transcripciones, resúmenes, extracción de ideas clave, búsqueda semántica, recomendaciones, generación de rutas, análisis de relaciones y consultas con GraphRAG sobre el archivo.",
      },
      {
        question: "¿Por qué no conectar Supabase todavía?",
        answer:
          "Porque primero conviene pulir la experiencia, la narrativa, la estructura visual y el criterio editorial. Después de eso, la base de datos debe reflejar un producto bien definido, no una maqueta genérica.",
      },
    ],
  },
];
