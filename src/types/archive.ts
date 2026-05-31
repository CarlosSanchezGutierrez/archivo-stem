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
