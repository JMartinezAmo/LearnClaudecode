# CLAUDE.md

Este archivo instruye a Claude Code sobre cómo trabajar con este repositorio.

## Qué es este repositorio

Curso práctico de vibe coding con Claude Code. Estructura:

- `00-setup/` - Configuración inicial
- `01-piloto/` - Ejercicios básicos (dar instrucciones)
- `02-copiloto/` - Ejercicios intermedios (iterar y refinar)
- `03-director/` - Ejercicios avanzados (automatización)

## Convenciones de formato

### Markdown

- Párrafos cortos (máximo 3-4 líneas)
- Listas cuando ayuden a la claridad
- Código siempre en bloques con lenguaje especificado
- Sin tablas complejas (mobile-first)
- Sin emojis salvo que el usuario los pida

### Estructura de ejercicios

Cada ejercicio debe tener:

```markdown
# Nombre del Ejercicio

> Versión: Claude Code X.X.x
> Nivel: Piloto|Copiloto|Director
> Tiempo estimado: XX minutos

## Objetivo

Qué aprenderás (1-2 párrafos máximo).

## Contexto

Situación o escenario del ejercicio.

## Instrucciones

Pasos numerados y claros.

## Criterio de éxito

Lista de checks que definen "completado":
- [ ] Check 1
- [ ] Check 2

## Recursos

Archivos necesarios o links relevantes.

## Solución (opcional)

Pistas o solución para casos de bloqueo.
```

### Teoría vs práctica

- Máximo 30% teoría
- Mínimo 70% ejercicios y ejemplos
- Cada concepto teórico debe tener un ejercicio asociado

## Cómo añadir nuevos ejercicios

1. Identifica el nivel apropiado (Piloto/Copiloto/Director)
2. Usa la plantilla de estructura de ejercicios
3. Define criterios de éxito claros y verificables
4. Incluye recursos necesarios en la carpeta del ejercicio
5. Actualiza el README.md del nivel correspondiente
6. Actualiza el índice en el README.md principal

### Nomenclatura

- Archivos: `EXX-nombre-descriptivo.md`
- Carpetas de recursos: `EXX-recursos/`
- Numeración secuencial dentro de cada nivel

## Cómo actualizar contenido

Cuando cambie Claude Code:

1. Revisa cada ejercicio para compatibilidad
2. Actualiza el campo `Versión` en el frontmatter
3. Documenta cambios breaking en un `CHANGELOG.md` si es necesario
4. Prioriza: Setup > Piloto > Copiloto > Director

### Versionado

- El README principal indica la versión general
- Cada ejercicio indica su versión específica
- Formato: `Claude Code X.X.x`

## Idioma

- Todo el contenido en español
- Comandos y código en inglés (así funcionan)
- Nombres de archivos en español con guiones

## Al generar contenido

- Sé conciso, no redundante
- Usa ejemplos reales, no abstractos
- Incluye errores comunes y cómo evitarlos
- Cada archivo debe ser auto-contenido (legible sin contexto previo)
