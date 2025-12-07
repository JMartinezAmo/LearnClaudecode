# Estudio Crítico del Curso

> Análisis técnico para mejoras - Diciembre 2024

## Resumen de Tests

```
✓ Estructura de archivos: 15/15
✓ Links internos: Todos válidos
✓ Versionado: 14/14 archivos
✓ Estructura ejercicios: 9/9
✓ Criterios de éxito: 9/9 (promedio 5.7 criterios)
✓ Navegación: 13/13
✓ Sin placeholders: OK
```

---

## Problemas Técnicos Identificados

### 1. Git anidado en ejercicios (CRÍTICO)

**Archivo:** `02-copiloto/E01-feature-con-tests.md:91-95`

```bash
cd ~/vibe-coding-curso
mkdir -p validador-password
cd validador-password
# ...
git init  # ← PROBLEMA: git init dentro de repo existente
```

**Problema:** El setup inicial ya hace `git init` en `~/vibe-coding-curso`. Hacer `git init` dentro de una subcarpeta crea repos anidados, causando comportamiento inesperado.

**Solución:** Cambiar a:
```bash
cd ~/vibe-coding-curso/validador-password
# No hacer git init, usar el repo padre
# O bien: crear fuera de vibe-coding-curso
```

**Afecta también:**
- `02-copiloto/E02-refactor-guiado.md`
- `02-copiloto/E03-debug-sistematico.md`
- `03-director/E01-worktrees.md`

---

### 2. Flags de CLI potencialmente incorrectos (VERIFICAR)

**Archivo:** `03-director/E03-pipeline-completo.md:180-181`

```bash
claude -p "/pipeline" --headless
```

**Problema:** Los flags `--headless` y `--timeout` deben verificarse contra la documentación oficial de Claude Code. El modo no interactivo podría usar sintaxis diferente.

**Acción:** Verificar en docs oficiales los flags correctos para:
- Modo no interactivo
- Timeout
- Output a archivo

---

### 3. Prompt de Claude Code incorrecto (MENOR)

**Archivo:** `00-setup/README.md:56-58`

```
Una vez autenticado, verás el prompt de Claude Code en tu terminal:

claude>
```

**Problema:** El prompt real de Claude Code no muestra `claude>`. La interfaz es diferente.

**Solución:** Eliminar o corregir la representación del prompt.

---

### 4. Pre-commit hook con Claude Code (DISEÑO)

**Archivo:** `03-director/E03-pipeline-completo.md:189-198`

```bash
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
claude -p "Ejecuta lint y tests..." --headless
exit $?
EOF
```

**Problema:** Ejecutar Claude Code en cada commit sería extremadamente lento (varios segundos mínimo). Esto afectaría la experiencia de desarrollo.

**Sugerencia:** Aclarar que es para demostración/aprendizaje, no para uso productivo real. Para producción, usar herramientas nativas (husky + lint-staged).

---

## Mejoras de Contenido

### 1. Alternativa digital para E01-landing-page

**Problema:** El ejercicio requiere papel, lápiz y cámara. Algunos usuarios podrían no tener cámara o preferir digital.

**Sugerencia:** Añadir alternativa:
```markdown
### Alternativa digital
Si prefieres no usar papel:
- Usa Excalidraw (excalidraw.com)
- O cualquier herramienta de wireframing
- Exporta como PNG y sigue desde el Paso 3
```

---

### 2. Falta referencia a documentación oficial

**Problema:** No hay links a la documentación oficial de Claude Code en ningún archivo.

**Sugerencia:** Añadir en README.md principal:
```markdown
## Recursos adicionales

- [Documentación oficial de Claude Code](https://docs.anthropic.com/claude-code)
- [GitHub de Claude Code](https://github.com/anthropics/claude-code)
```

---

### 3. Inconsistencia en formato de prompts

**Problema:** Los comandos para Claude a veces están en bloques de código bash, a veces sin especificar lenguaje.

**Ejemplo inconsistente:**
```bash
claude
```
vs
```
Crea un archivo...
```

**Sugerencia:** Definir convención clara en CLAUDE.md:
- Comandos de terminal: ` ```bash `
- Prompts para Claude: ` ``` ` (sin lenguaje) o ` ```text `

---

### 4. Versión de Node.js más específica

**Archivo:** `00-setup/README.md:22`

**Actual:** "v18.x.x o superior"

**Sugerencia:** Especificar "Node.js 18 LTS o 20 LTS" para mayor claridad.

---

### 5. Falta validación de requisitos en ejercicios avanzados

**Problema:** Los ejercicios del Nivel 3 asumen que `gh` está instalado sin verificación previa en el ejercicio.

**Sugerencia:** Añadir al inicio de E02 y E03:
```markdown
### Verificación rápida
```bash
gh --version  # Debe mostrar versión
gh auth status  # Debe estar autenticado
```
Si algo falla, revisa la [sección de setup del Nivel 3](./README.md#instalar-github-cli).
```

---

## Mejoras de UX

### 1. Tiempo estimado vs real

Los tiempos estimados podrían ser optimistas para principiantes:
- E01-landing-page: 20 min → considerar 30-40 min
- E03-pipeline-completo: 45 min → considerar 60-90 min

**Sugerencia:** Añadir nota: "Tiempos para usuarios con experiencia en terminal. Principiantes pueden necesitar el doble."

---

### 2. Checkpoint visual de progreso

**Sugerencia:** Añadir al final de cada nivel un resumen visual:
```markdown
## Tu progreso

✅ Nivel 0 - Setup
✅ Nivel 1 - Piloto
⬜ Nivel 2 - Copiloto
⬜ Nivel 3 - Director
```

---

## Tabla de Prioridades

| Problema | Severidad | Esfuerzo | Prioridad |
|----------|-----------|----------|-----------|
| Git anidado en ejercicios | Alta | Bajo | **P0** |
| Flags CLI verificar | Media | Medio | **P1** |
| Pre-commit hook lento | Baja | Bajo | **P2** |
| Alternativa digital E01 | Baja | Bajo | **P2** |
| Links docs oficiales | Baja | Bajo | **P2** |
| Inconsistencia prompts | Baja | Medio | **P3** |

---

## Conclusión

El curso está bien estructurado con **tests pasando al 100%**. Los problemas identificados son menores excepto el tema de **git anidado** que debería corregirse antes de publicar.

La progresión Piloto → Copiloto → Director es pedagógicamente sólida. Los criterios de éxito son claros y verificables.

**Acción inmediata recomendada:** Corregir los ejercicios que hacen `git init` dentro de `~/vibe-coding-curso`.
