# E03 - Pipeline Completo

> Versión: Claude Code 1.0.x
> Nivel: Director
> Tiempo estimado: 45 minutos

## Objetivo

Automatizar un pipeline completo: lint → test → build → PR. Usarás modo headless y crearás slash commands personalizados.

## Contexto

Quieres que cada vez que termines una feature, se ejecute un pipeline completo sin intervención manual. Claude Code lo orquesta todo.

## Instrucciones

### Paso 1: Crea el proyecto

```bash
cd ~/vibe-coding-curso
mkdir pipeline-demo
cd pipeline-demo
claude
```

```
Crea un proyecto Node.js/TypeScript con:
- package.json con scripts: lint, test, build
- tsconfig.json para compilar a dist/
- src/index.ts con una función simple exportada
- src/index.test.ts con tests usando Jest
- ESLint configurado para TypeScript
- .gitignore apropiado

Inicializa git con commit inicial.
```

### Paso 2: Conecta con GitHub

Crea un repo en GitHub llamado `pipeline-demo` y conecta:

```
Conecta este repo con GitHub:
git remote add origin https://github.com/TU_USUARIO/pipeline-demo.git
git push -u origin main
```

### Paso 3: Crea el slash command para pipeline

Sal de Claude Code:

```
/exit
```

Crea la estructura de comandos:

```bash
mkdir -p .claude/commands
```

Crea el archivo del comando:

```bash
cat > .claude/commands/pipeline.md << 'EOF'
# Pipeline de Release

Ejecuta el pipeline completo para preparar un release:

## 1. Lint
Ejecuta ESLint y corrige errores automáticamente si es posible.
Si hay errores que no se pueden corregir, para aquí y repórtalos.

## 2. Tests
Ejecuta todos los tests con Jest.
Si algún test falla, para aquí y muestra cuáles fallaron.

## 3. Build
Compila TypeScript a JavaScript en dist/.
Si hay errores de compilación, para aquí y repórtalos.

## 4. Verificación
Verifica que dist/ contiene los archivos compilados.

## 5. Commit y Push
Si todo pasó:
- Haz commit con mensaje "chore: build for release"
- Push a la rama actual

## 6. Reporte
Al final, muestra un resumen:
- ✅ o ❌ para cada paso
- Tiempo total aproximado
- Siguiente acción recomendada
EOF
```

### Paso 4: Prueba el slash command

Vuelve a Claude Code:

```bash
claude
```

Ejecuta el comando:

```
/pipeline
```

Claude ejecutará todo el pipeline definido en el archivo.

### Paso 5: Crea un comando para PR

```bash
cat > .claude/commands/release-pr.md << 'EOF'
# Crear PR de Release

Crea un Pull Request para la rama actual con:

## Título
Usa formato: "release: vX.Y.Z - [descripción breve]"
Obtén la versión del package.json.

## Descripción
Genera automáticamente basándote en:
- Commits desde el último merge a main
- Cambios en el código (resumen)
- Cualquier breaking change

## Formato del body
```
## Cambios en esta release

[lista de cambios basada en commits]

## Testing
- [ ] Tests unitarios pasan
- [ ] Build compila sin errores
- [ ] Probado localmente

## Checklist
- [ ] Versión actualizada en package.json
- [ ] CHANGELOG actualizado (si existe)
```

## Ejecución
Usa gh pr create con el título y body generados.
Muestra el link del PR creado.
EOF
```

### Paso 6: Crea un comando combinado

```bash
cat > .claude/commands/ship-it.md << 'EOF'
# Ship It! 🚀

Pipeline completo de release:

1. Ejecuta /pipeline
2. Si todo pasa, ejecuta /release-pr
3. Muestra resumen final con link al PR

Si algún paso falla, para y muestra qué falló.
EOF
```

Ahora un solo comando hace todo:

```
/ship-it
```

### Paso 7: Modo headless

Prueba ejecutar el pipeline sin interacción:

```bash
claude -p "/pipeline" --headless
```

Esto es útil para:
- Scripts de CI/CD
- Git hooks
- Tareas programadas

### Paso 8: Crea un pre-commit hook

```bash
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
claude -p "Ejecuta lint y tests. Si fallan, muestra los errores." --headless
exit $?
EOF
chmod +x .git/hooks/pre-commit
```

Ahora cada commit ejecutará lint y tests automáticamente.

### Paso 9: Prueba el flujo completo

Haz un cambio en el código:

```bash
claude
```

```
Añade una nueva función multiply(a, b) en src/index.ts con su test.
```

Luego:

```
/ship-it
```

Observa cómo Claude:
1. Ejecuta lint
2. Ejecuta tests
3. Compila
4. Hace commit y push
5. Crea el PR

## Criterio de éxito

- [ ] El proyecto tiene lint, test y build funcionando
- [ ] Creaste al menos 2 slash commands en `.claude/commands/`
- [ ] `/pipeline` ejecuta lint → test → build
- [ ] `/release-pr` crea un PR con formato correcto
- [ ] Probaste modo headless con `--headless`
- [ ] El flujo completo funciona sin intervención manual

## Estructura de slash commands

```
.claude/
└── commands/
    ├── pipeline.md      # Lint, test, build
    ├── release-pr.md    # Crear PR
    └── ship-it.md       # Combinado
```

## Ejemplos de comandos útiles

**Fix rápido:**
```markdown
# /fix.md
Analiza el último error de lint o test.
Propón una corrección.
Si es segura, aplícala automáticamente.
```

**Revisión de código:**
```markdown
# /review.md
Revisa los cambios staged (git diff --staged).
Busca:
- Bugs potenciales
- Mejoras de rendimiento
- Código duplicado
- Falta de tests
Reporta lo que encuentres.
```

**Documentación:**
```markdown
# /docs.md
Para cada función pública sin JSDoc:
1. Añade documentación JSDoc
2. Incluye @param y @returns
3. Añade ejemplo de uso si es útil
```

## Modo headless avanzado

```bash
# Con timeout
claude -p "Ejecuta tests" --headless --timeout 60000

# Guardando output
claude -p "/pipeline" --headless > pipeline-output.txt 2>&1

# En CI/CD
if claude -p "/pipeline" --headless; then
  echo "Pipeline passed"
else
  echo "Pipeline failed"
  exit 1
fi
```

## Tips

**Si un comando es muy largo:**
Divídelo en comandos más pequeños y encadénalos.

**Para debug de comandos:**
```
Muéstrame qué harías si ejecuto /pipeline, paso a paso, sin ejecutar.
```

**Si headless se cuelga:**
```bash
timeout 120 claude -p "..." --headless
```

## Qué aprendiste

- Crear slash commands personalizados
- Encadenar comandos en pipelines
- Usar modo headless para automatización
- Integrar con git hooks
- Flujo completo sin intervención manual

## Fin del curso

Has completado el Nivel 3 - Director y todo el curso de Vibe Coding.

Ahora sabes:
- **Piloto**: Dar instrucciones claras y contexto efectivo
- **Copiloto**: Colaborar, iterar y usar TDD
- **Director**: Automatizar y orquestar flujos complejos

El siguiente paso es aplicar esto a tus proyectos reales.

---

[Volver al nivel](./README.md) | [Volver al índice](../README.md)
