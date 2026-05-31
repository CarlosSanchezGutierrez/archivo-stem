# Pulido 09 — Auditoría visual global

## Problemas atacados

- Títulos demasiado grandes en móvil.
- Secciones con demasiado padding vertical en pantallas chicas.
- Grafos altos y pesados en móvil.
- Navegación saturada en tamaños intermedios.
- Falta de skip link.
- Falta de foco visible consistente.
- Falta de criterio responsive global.

## Cambios aplicados

- Títulos principales bajan a `text-4xl` en móvil y suben en desktop.
- Secciones pasan de `py-24` a `py-16 md:py-24`.
- Los grafos usan `.graph-canvas` con altura responsive.
- Header pasa a navegación completa solo en `xl`.
- Se agrega skip link al contenido principal.
- Se agregan estilos `focus-visible`.
- Se respeta `prefers-reduced-motion`.

## Criterio

El sitio debe verse serio en desktop, pero no debe sentirse inflado o incómodo en móvil.

## Checklist siguiente

1. Revisar cada página en ancho móvil.
2. Revisar que los grafos sigan siendo legibles.
3. Revisar contraste de badges.
4. Revisar textos repetidos.
5. Revisar que ninguna sección parezca plantilla genérica.
6. Revisar que el build pase sin errores.
