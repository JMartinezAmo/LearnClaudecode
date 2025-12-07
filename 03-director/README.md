# Nivel 3 - Director

> Versión: Claude Code 1.0.x (Diciembre 2024)

En este nivel tú diriges y Claude orquesta. Gestionas múltiples contextos, automatizas flujos completos y usas Claude Code en modo avanzado.

## Qué aprenderás

- Git worktrees para trabajo paralelo
- Crear PRs desde Claude Code
- Automatizar pipelines completos
- Modo headless y slash commands custom

## De Copiloto a Director

En los niveles anteriores trabajabas en una cosa a la vez. Ahora vas a:

1. **Gestionar múltiples contextos** (worktrees)
2. **Automatizar flujos end-to-end** (lint → test → build → PR)
3. **Crear comandos personalizados** (slash commands)
4. **Usar Claude sin supervisión** (headless mode)

## Git Worktrees

Los worktrees permiten tener múltiples ramas activas simultáneamente, cada una en su carpeta. Útil para:

- Trabajar en 2 features en paralelo
- Hacer hotfix sin perder el trabajo actual
- Comparar comportamiento entre ramas

```bash
# Crear worktree
git worktree add ../feature-login feature/login

# Listar worktrees
git worktree list

# Eliminar worktree
git worktree remove ../feature-login
```

Cada worktree tiene su propio Claude Code con contexto separado.

## GitHub CLI (gh)

Claude Code puede usar `gh` para interactuar con GitHub:

```bash
# Crear PR
gh pr create --title "feat: login" --body "Descripción"

# Ver PRs abiertos
gh pr list

# Mergear PR
gh pr merge 123 --squash
```

Asegúrate de tener `gh` instalado y autenticado:

```bash
gh auth login
```

## Modo Headless

Claude Code puede ejecutarse sin interacción:

```bash
claude -p "Ejecuta los tests y muéstrame el resultado" --headless
```

Útil para:
- Scripts de CI/CD
- Automatización
- Tareas programadas

## Slash Commands Custom

Puedes crear comandos personalizados en `.claude/commands/`:

```
.claude/
└── commands/
    └── deploy.md
```

Contenido de `deploy.md`:

```markdown
Ejecuta el pipeline de deploy:
1. Corre los tests
2. Si pasan, haz build
3. Si el build funciona, despliega a staging
4. Reporta el resultado
```

Uso:

```
/deploy
```

Claude ejecutará todo el flujo definido.

## Ejercicios de este nivel

| Ejercicio | Qué harás | Foco |
|-----------|-----------|------|
| [E01 - Worktrees](./E01-worktrees.md) | 2 features en paralelo | Contextos separados |
| [E02 - PR Automático](./E02-pr-automatico.md) | PR completo desde Claude | Integración con gh |
| [E03 - Pipeline Completo](./E03-pipeline-completo.md) | lint → test → build → PR | Headless + slash commands |

## Antes de empezar

Asegúrate de:

1. Haber completado los Niveles 1 y 2
2. Tener GitHub CLI instalado (`gh --version`)
3. Estar autenticado en GitHub (`gh auth status`)
4. Tener un repositorio en GitHub para practicar

### Instalar GitHub CLI

**macOS:**
```bash
brew install gh
```

**Linux:**
```bash
sudo apt install gh
```

**Windows:**
```bash
winget install GitHub.cli
```

Luego autentícate:

```bash
gh auth login
```

---

[Volver al índice](../README.md)
