# E01 - Git Worktrees

> Versión: Claude Code 1.0.x
> Nivel: Director
> Tiempo estimado: 35 minutos

## Objetivo

Aprender a trabajar en múltiples features en paralelo usando git worktrees. Cada feature tiene su propio contexto de Claude Code.

## Contexto

Estás trabajando en una feature cuando llega un bug urgente. En lugar de hacer stash o perder contexto, usas worktrees para tener ambas cosas activas simultáneamente.

## Instrucciones

### Paso 1: Crea el proyecto base

```bash
cd ~/vibe-coding-curso
mkdir -p worktree-demo
cd worktree-demo
git init
```

Inicia Claude Code y crea una app base:

```bash
claude
```

```
Crea una app Node.js simple con:
- package.json con scripts para start y test
- index.js con un servidor HTTP básico en puerto 3000
- Endpoint GET / que devuelve { status: "ok" }
- Endpoint GET /users que devuelve un array vacío
- Un test básico con Jest

Inicializa git y haz el primer commit.
```

### Paso 2: Crea dos ramas de feature

```
Crea dos ramas sin cambiar a ellas:
- feature/add-user (para añadir endpoint POST /users)
- feature/health-check (para añadir endpoint GET /health)
```

### Paso 3: Configura worktrees

Sal de Claude Code y crea los worktrees:

```bash
/exit
```

```bash
# Crear worktree para add-user
git worktree add ../worktree-add-user feature/add-user

# Crear worktree para health-check
git worktree add ../worktree-health-check feature/health-check

# Verificar
git worktree list
```

Ahora tienes 3 carpetas:
- `worktree-demo/` (main)
- `worktree-add-user/` (feature/add-user)
- `worktree-health-check/` (feature/health-check)

### Paso 4: Trabaja en la primera feature

Abre una terminal en el primer worktree:

```bash
cd ../worktree-add-user
claude
```

```
Añade un endpoint POST /users que:
- Reciba { name, email } en el body
- Guarde el usuario en un array en memoria
- Devuelva el usuario creado con un id generado
- Añade tests para el nuevo endpoint

Haz commit cuando termines.
```

**No cierres esta terminal.**

### Paso 5: Trabaja en la segunda feature (en paralelo)

Abre **otra terminal** en el segundo worktree:

```bash
cd ~/vibe-coding-curso/worktree-health-check
claude
```

```
Añade un endpoint GET /health que devuelva:
{
  status: "healthy",
  uptime: <segundos desde que arrancó>,
  timestamp: <fecha actual ISO>
}

Añade tests para el endpoint.
Haz commit cuando termines.
```

### Paso 6: Verifica el aislamiento

En cada terminal, ejecuta los tests:

```bash
npm test
```

Cada worktree tiene su propio código. Los cambios de uno no afectan al otro.

### Paso 7: Cambia de contexto

Imagina que mientras trabajas en health-check, necesitas revisar algo en add-user.

En la terminal de add-user:

```
Muéstrame el código del endpoint POST /users
```

Claude tiene el contexto de ESA rama. No sabe nada de health-check.

### Paso 8: Merge de las features

Vuelve al proyecto principal:

```bash
cd ~/vibe-coding-curso/worktree-demo
git merge feature/add-user
git merge feature/health-check
```

Si hay conflictos, usa Claude para resolverlos:

```bash
claude
```

```
Hay conflictos de merge entre add-user y health-check.
Resuélvelos manteniendo ambas funcionalidades.
```

### Paso 9: Limpieza

Elimina los worktrees cuando ya no los necesites:

```bash
git worktree remove ../worktree-add-user
git worktree remove ../worktree-health-check
```

## Criterio de éxito

- [ ] Creaste dos worktrees para dos features
- [ ] Trabajaste en ambas features en paralelo
- [ ] Cada Claude Code tenía contexto de su rama
- [ ] Los tests pasan en ambos worktrees
- [ ] Mergeaste ambas features a main
- [ ] Eliminaste los worktrees al terminar

## Cuándo usar worktrees

**Usa worktrees cuando:**
- Trabajas en 2+ features simultáneamente
- Necesitas hacer hotfix sin perder trabajo
- Quieres comparar comportamiento entre ramas
- Revisas PR de otros mientras trabajas en lo tuyo

**No uses worktrees cuando:**
- Es una feature pequeña y rápida
- Solo necesitas cambiar de rama brevemente
- No necesitas contexto de Claude en ambas

## Worktrees vs Branches

| Branches | Worktrees |
|----------|-----------|
| Una carpeta, cambias de rama | Múltiples carpetas, una por rama |
| Un contexto de Claude | Múltiples contextos de Claude |
| `git stash` para cambiar | Sin stash, ya está todo separado |
| Rápido para cambios pequeños | Mejor para trabajo paralelo |

## Tips

**Nombra los worktrees claramente:**
```bash
git worktree add ../feat-auth feature/authentication
git worktree add ../fix-urgent hotfix/critical-bug
```

**Si un worktree se corrompe:**
```bash
git worktree remove --force ../worktree-roto
```

**Para ver en qué worktree estás:**
```bash
git rev-parse --show-toplevel
```

## Qué aprendiste

- Crear y gestionar worktrees
- Cada worktree = contexto separado de Claude
- Trabajo paralelo sin conflictos de contexto
- Merge después de desarrollo paralelo

## Siguiente ejercicio

[E02 - PR Automático](./E02-pr-automatico.md)

---

[Volver al nivel](./README.md) | [Volver al índice](../README.md)
