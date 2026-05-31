# Arquitectura Conceptual — Archivo STEM

## Stack inicial

- Next.js
- TypeScript
- Tailwind CSS
- Supabase
- PostgreSQL
- pgvector
- Vercel
- React Flow / graph visualization
- IA para embeddings, resúmenes, transcripciones y rutas

## Entidades base

- Person
- Episode
- Book
- Paper
- Patent
- Project
- Course
- Institution
- Campus
- Topic
- Clip
- Transcript
- LearningPath
- KnowledgeNode
- KnowledgeEdge

## Relaciones clave

- Persona trabaja en Institución
- Persona estudió en Institución
- Persona publicó Libro
- Persona publicó Paper
- Persona desarrolló Proyecto
- Persona registró Patente
- Persona investiga Tema
- Episodio trata sobre Tema
- Curso pertenece a Tema
- Usuario sigue Persona
- Usuario guarda Recurso

## Evolución

MVP:
- Perfiles
- Homepage
- Biblioteca básica
- Timeline
- Atlas simple

Fase 2:
- Supabase
- Auth
- CMS interno
- Transcripciones
- Clips
- Roadmaps

Fase 3:
- Knowledge Graph interactivo
- Búsqueda semántica
- GraphRAG
- Recomendaciones

Fase 4:
- GNNs experimentales
- Comunidades temáticas
- Análisis de influencia
- Mi Red STEM
