# Nivel 2 - Copiloto

> Versión: Claude Code 1.0.x (Diciembre 2024)

En este nivel trabajas junto a Claude. Ya no solo das instrucciones: colaboras, validas y diriges el proceso.

## Qué aprenderás

- Pedir un plan antes de ejecutar
- Usar checkpoints para no perder trabajo
- Desarrollo guiado por tests (TDD)
- Debug sistemático con Claude

## De Piloto a Copiloto

En el Nivel 1 dabas instrucciones y Claude ejecutaba. Ahora vas a:

1. **Pedir planes** antes de que Claude actúe
2. **Validar** cada paso antes de continuar
3. **Guardar checkpoints** para poder volver atrás
4. **Colaborar** en la solución, no solo recibirla

## Pedir plan antes de ejecutar

Esta es la técnica más importante de este nivel.

**Sin plan:**
```
Refactoriza este código para que sea más legible
```
Claude hace cambios. Algunos te gustan, otros no. Es difícil volver atrás.

**Con plan:**
```
Antes de hacer cambios, dame un plan de refactoring.
Lista los cambios que harías, en orden, sin ejecutarlos aún.
```

Claude te da un plan. Tú validas. Luego:

```
Ejecuta solo el paso 1 del plan.
```

Revisas. Si está bien:

```
Continúa con el paso 2.
```

## Checkpoints con git

Antes de cambios grandes, haz commit:

```bash
git add -A && git commit -m "checkpoint: antes de refactor"
```

Si algo sale mal:

```bash
git checkout .
```

Vuelves al último checkpoint.

**Regla:** haz checkpoint antes de cada paso importante. Es gratis y te salva.

## Desarrollo guiado por tests (TDD)

El flujo TDD con Claude:

1. **Pides los tests primero**
   ```
   Escribe tests para una función que valide emails.
   No escribas la implementación aún.
   ```

2. **Revisas los tests**
   ¿Cubren los casos que te importan?

3. **Pides la implementación**
   ```
   Ahora implementa la función para que pasen los tests.
   ```

4. **Verificas**
   ```bash
   npm test
   ```

¿Por qué funciona? Los tests son tu especificación. Claude sabe exactamente qué debe cumplir.

## Debug sistemático

Cuando algo falla, da contexto:

**Mal:**
```
No funciona, arréglalo
```

**Bien:**
```
El código falla con este error:
[pega el error exacto]

Estoy intentando hacer: [describe qué esperabas]
Input: [datos de entrada]
Output esperado: [qué debería pasar]
Output actual: [qué pasa realmente]
```

Cuanto más contexto sobre el fallo, mejor será la solución.

## Ejercicios de este nivel

| Ejercicio | Qué harás | Foco |
|-----------|-----------|------|
| [E01 - Feature con Tests](./E01-feature-con-tests.md) | Crear función con TDD | Tests primero |
| [E02 - Refactor Guiado](./E02-refactor-guiado.md) | Mejorar código feo | Plan + checkpoints |
| [E03 - Debug Sistemático](./E03-debug-sistematico.md) | Encontrar y arreglar bug | Dar contexto de error |

## Antes de empezar

Asegúrate de:

1. Haber completado el Nivel 1
2. Tener Node.js instalado (para ejecutar tests)
3. Saber hacer commits con git

---

[Volver al índice](../README.md)
