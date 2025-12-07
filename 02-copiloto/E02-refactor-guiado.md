# E02 - Refactor Guiado

> Versión: Claude Code 1.0.x
> Nivel: Copiloto
> Tiempo estimado: 35 minutos

## Objetivo

Aprender a refactorizar código paso a paso, usando planes y checkpoints. Tomarás código "feo" y lo mejorarás de forma controlada.

## Contexto

Te han pasado código legacy que funciona pero es difícil de mantener. En lugar de reescribirlo todo, lo mejorarás paso a paso con Claude.

## Instrucciones

### Paso 1: Crea el código feo

Primero, crea el código que vamos a refactorizar:

```bash
cd ~/vibe-coding-curso
mkdir -p refactor-exercise
cd refactor-exercise
claude
```

```
Crea un archivo calculator.js con código intencionalmente malo.

Debe ser una calculadora que:
- Suma, resta, multiplica, divide
- Calcula porcentajes
- Tiene historial de operaciones

Hazlo "feo" a propósito:
- Variables con nombres de una letra
- Funciones muy largas (todo en una)
- Código duplicado
- Sin manejo de errores
- Números mágicos sin explicar
- Mezcla de responsabilidades

El código debe FUNCIONAR, solo que sea difícil de leer.
Unas 80-100 líneas.
```

### Paso 2: Checkpoint inicial

```bash
git init
git add -A
git commit -m "inicial: código legacy antes de refactor"
```

### Paso 3: Pide un plan de refactoring

**No pidas que refactorice todavía.** Pide un plan:

```
Analiza calculator.js y dame un plan de refactoring.

Lista cada cambio que harías, en orden de prioridad.
Para cada cambio indica:
- Qué mejorarías
- Por qué es importante
- Riesgo (bajo/medio/alto)

No hagas ningún cambio aún, solo dame el plan.
```

### Paso 4: Revisa el plan

Lee el plan de Claude. Decide:

- ¿Estás de acuerdo con el orden?
- ¿Hay algo que no quieras cambiar?
- ¿Falta algo importante?

Si quieres ajustar:

```
Mueve "separar funciones" al principio del plan.
Ignora "añadir TypeScript" por ahora.
```

### Paso 5: Ejecuta paso a paso

Ahora sí, ejecuta un paso a la vez:

```
Ejecuta solo el paso 1 del plan: [nombre del paso]
Muéstrame qué cambios harás antes de hacerlos.
```

Claude te muestra los cambios. Si estás de acuerdo:

```
Procede con esos cambios.
```

### Paso 6: Checkpoint después de cada paso

Después de cada paso del plan:

```bash
git add -A
git commit -m "refactor: [descripción del paso]"
```

Esto te permite volver atrás si algo sale mal.

### Paso 7: Verifica que sigue funcionando

Después de cada paso, verifica manualmente:

```
Crea un archivo test-manual.js que pruebe todas las operaciones
de la calculadora y muestre los resultados.
```

```bash
node test-manual.js
```

¿Funciona igual que antes? Si no:

```bash
git checkout .  # Vuelve al último checkpoint
```

Y pide a Claude que lo intente de otra forma.

### Paso 8: Continúa el plan

Repite pasos 5-7 para cada elemento del plan:

```
Ejecuta el paso 2 del plan: [nombre]
```

Checkpoint. Verifica. Continúa.

### Paso 9: Revisa el resultado final

Cuando termines el plan:

```
Muéstrame un resumen de todos los cambios que hicimos.
Compara la complejidad antes vs después.
```

## Criterio de éxito

- [ ] Empezaste con código "feo" que funcionaba
- [ ] Pediste un plan ANTES de refactorizar
- [ ] Ejecutaste el plan paso a paso
- [ ] Hiciste al menos 4 commits (checkpoint por paso)
- [ ] El código final funciona igual que el original
- [ ] El código final es más legible

## Ejemplo de plan típico

Un plan de refactoring podría verse así:

1. **Renombrar variables** (riesgo bajo)
   - `a` → `firstNumber`
   - `r` → `result`

2. **Extraer funciones** (riesgo medio)
   - Separar suma, resta, multiplicación, división

3. **Eliminar código duplicado** (riesgo medio)
   - El logging se repite 5 veces

4. **Añadir manejo de errores** (riesgo bajo)
   - División por cero
   - Inputs no numéricos

5. **Separar responsabilidades** (riesgo alto)
   - Calculadora vs Historial vs UI

## Por qué paso a paso

**Refactor big bang:**
- Muchos cambios a la vez
- Si algo falla, no sabes qué lo causó
- Difícil de revertir

**Refactor guiado:**
- Un cambio a la vez
- Verificas después de cada paso
- Puedes revertir cualquier paso individual
- Entiendes cada cambio

## Tips

**Si Claude hace demasiados cambios:**
```
Para. Solo quiero que renombres las variables, nada más.
```

**Si rompe algo:**
```bash
git diff  # Ver qué cambió
git checkout .  # Revertir
```

Luego:
```
El paso anterior rompió la función divide.
Hazlo de otra forma que no afecte esa función.
```

**Si el código es muy largo:**
```
Enfócate solo en la función calculateTotal por ahora.
```

## Qué aprendiste

- Pedir plan antes de ejecutar
- Ejecutar refactoring paso a paso
- Usar git como red de seguridad
- Verificar después de cada cambio

## Siguiente ejercicio

[E03 - Debug Sistemático](./E03-debug-sistematico.md)

---

[Volver al nivel](./README.md) | [Volver al índice](../README.md)
