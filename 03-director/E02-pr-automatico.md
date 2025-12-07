# E02 - PR Automático

> Versión: Claude Code 1.0.x
> Nivel: Director
> Tiempo estimado: 30 minutos

## Objetivo

Aprender a crear Pull Requests completos desde Claude Code usando GitHub CLI. Desde escribir código hasta abrir el PR, todo en un flujo.

## Contexto

Tienes una feature que implementar. En lugar de hacer el PR manualmente en GitHub, le pides a Claude que lo haga todo: código, commits, push y PR.

## Requisitos previos

Asegúrate de tener GitHub CLI configurado:

```bash
gh --version    # Debe mostrar versión
gh auth status  # Debe mostrar que estás autenticado
```

Si no está configurado:

```bash
gh auth login
```

## Instrucciones

### Paso 1: Crea un repo en GitHub

Ve a github.com y crea un repositorio nuevo llamado `pr-automatico-demo`.

**Importante:** No inicialices con README (hazlo vacío).

### Paso 2: Configura el proyecto local

```bash
cd ~/vibe-coding-curso
mkdir pr-automatico-demo
cd pr-automatico-demo
git init
```

Inicia Claude Code:

```bash
claude
```

```
Crea un proyecto Node.js con:
- package.json con nombre "pr-automatico-demo"
- README.md explicando qué es el proyecto
- index.js con un "Hello World" básico
- .gitignore para node_modules

Haz commit inicial y conecta con el repo remoto:
git remote add origin https://github.com/TU_USUARIO/pr-automatico-demo.git
git push -u origin main
```

Reemplaza `TU_USUARIO` con tu usuario de GitHub.

### Paso 3: Crea una feature branch

```
Crea una rama feature/add-calculator y cámbiate a ella.
```

### Paso 4: Implementa la feature

```
Añade un archivo calculator.js con funciones para:
- add(a, b)
- subtract(a, b)
- multiply(a, b)
- divide(a, b) - con manejo de división por cero

Añade tests en calculator.test.js usando Jest.
Haz que los tests pasen.
```

### Paso 5: Commit y push

```
Haz commit de todos los cambios con mensaje descriptivo.
Push a origin feature/add-calculator.
```

### Paso 6: Crea el PR con Claude

Aquí viene lo interesante:

```
Crea un Pull Request usando gh cli con:
- Título: "feat: add calculator module"
- Descripción que incluya:
  - Qué hace este PR
  - Lista de funciones añadidas
  - Cómo probar (npm test)
- Base branch: main
- Head branch: feature/add-calculator
```

Claude ejecutará algo como:

```bash
gh pr create --title "feat: add calculator module" \
  --body "## Descripción
Añade módulo de calculadora con operaciones básicas.

## Funciones
- add(a, b)
- subtract(a, b)
- multiply(a, b)
- divide(a, b)

## Testing
\`\`\`bash
npm install
npm test
\`\`\`" \
  --base main \
  --head feature/add-calculator
```

### Paso 7: Verifica el PR

```
Muéstrame el link del PR que acabas de crear.
```

Abre el link en tu navegador y verifica que:
- El título es correcto
- La descripción está bien formateada
- Los archivos cambiados son los esperados

### Paso 8: Añade cambios al PR

Imagina que necesitas añadir una función más:

```
Añade una función power(base, exponent) a calculator.js
con su test correspondiente.
Haz commit y push para actualizar el PR.
```

El PR se actualizará automáticamente.

### Paso 9: Merge del PR

Cuando estés satisfecho:

```
Mergea el PR usando gh cli con squash merge.
```

Claude ejecutará:

```bash
gh pr merge --squash
```

## Criterio de éxito

- [ ] Tienes un repo en GitHub
- [ ] Creaste una feature branch
- [ ] Implementaste código con tests
- [ ] El PR se creó desde Claude Code
- [ ] El PR tiene título y descripción correctos
- [ ] Añadiste commits adicionales al PR
- [ ] Mergeaste el PR desde Claude Code

## Comandos gh útiles

```bash
# Crear PR
gh pr create --title "..." --body "..."

# Listar PRs abiertos
gh pr list

# Ver detalles de PR
gh pr view 123

# Ver en navegador
gh pr view 123 --web

# Mergear
gh pr merge 123 --squash

# Cerrar sin merge
gh pr close 123

# Añadir reviewers
gh pr edit 123 --add-reviewer usuario1,usuario2
```

## Templates de PR

Para PRs consistentes, Claude puede usar un template:

```
Crea el PR con este formato:

## Resumen
[1-2 oraciones]

## Cambios
- [cambio 1]
- [cambio 2]

## Testing
[cómo probar]

## Screenshots
[si aplica]

## Checklist
- [ ] Tests pasan
- [ ] Código revisado
- [ ] Documentación actualizada
```

## Flujo completo en un comando

Puedes pedir todo el flujo de una vez:

```
Implementa una función remainder(a, b) en calculator.js.
Añade tests, haz commit, push y crea un PR con descripción apropiada.
```

Claude hará todo el flujo secuencialmente.

## Tips

**Si gh no tiene permisos:**
```bash
gh auth refresh -s repo,read:org
```

**Para ver qué haría sin ejecutar:**
```
Muéstrame el comando gh que usarías para crear el PR, sin ejecutarlo.
```

**Si el PR ya existe:**
```
Actualiza la descripción del PR abierto para incluir [nuevo info].
```

## Qué aprendiste

- Usar gh cli desde Claude Code
- Crear PRs con título y descripción
- Actualizar PRs con nuevos commits
- Mergear desde la terminal
- Flujo completo: código → commit → push → PR

## Siguiente ejercicio

[E03 - Pipeline Completo](./E03-pipeline-completo.md)

---

[Volver al nivel](./README.md) | [Volver al índice](../README.md)
