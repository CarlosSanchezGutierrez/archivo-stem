export type StemRole =
  | "Investigador"
  | "Profesor"
  | "Ingeniero"
  | "Científico"
  | "Director"
  | "Emprendedor"
  | "Estudiante";

export type StemPerson = {
  id: string;
  name: string;
  slug: string;
  role: StemRole;
  institution: string;
  campus?: string;
  headline: string;
  shortBio: string;
  areas: string[];
  stats: {
    books?: number;
    papers?: number;
    patents?: number;
    years?: number;
  };
};

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  category:
    | "Formación"
    | "Investigación"
    | "Proyecto"
    | "Libro"
    | "Patente"
    | "Premio"
    | "Institución";
};

export type ArchiveResource = {
  title: string;
  type: "Libro" | "Paper" | "Patente" | "Curso" | "Proyecto" | "Video";
  year?: string;
  description: string;
  status?: string;
};

export type KnowledgeConnection = {
  source: string;
  relation: string;
  target: string;
};

export type StemPersonProfile = StemPerson & {
  longBio: string;
  archiveQuestion: string;
  timeline: TimelineEvent[];
  resources: ArchiveResource[];
  projects: ArchiveResource[];
  knowledgeConnections: KnowledgeConnection[];
};

export type KnowledgeNode = {
  id: string;
  label: string;
  type:
    | "person"
    | "institution"
    | "campus"
    | "topic"
    | "book"
    | "paper"
    | "patent"
    | "project"
    | "course"
    | "episode";
};

export type KnowledgeEdge = {
  id: string;
  source: string;
  target: string;
  relation:
    | "trabaja_en"
    | "estudió_en"
    | "publicó"
    | "desarrolló"
    | "investiga"
    | "colaboró_con"
    | "pertenece_a"
    | "trata_sobre"
    | "recomienda"
    | "influyó_a";
};
