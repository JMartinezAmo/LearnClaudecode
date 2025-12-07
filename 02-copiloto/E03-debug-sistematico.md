# E03 - Debug Sistemático

> Versión: Claude Code 1.0.x
> Nivel: Copiloto
> Tiempo estimado: 30 minutos

## Objetivo

Aprender a hacer debug con Claude de forma sistemática. Darás contexto preciso sobre errores y iterarás hasta resolver el bug.

## Contexto

Tienes código con un bug. En lugar de decir "no funciona", aprenderás a dar información estructurada que ayude a Claude a encontrar el problema rápido.

## Instrucciones

### Paso 1: Crea el código con bug

```bash
cd ~/vibe-coding-curso
mkdir -p debug-exercise
cd debug-exercise
claude
```

```
Crea un archivo shopping-cart.js con un carrito de compras.

Funcionalidades:
- Añadir productos (nombre, precio, cantidad)
- Eliminar productos
- Calcular total
- Aplicar descuento porcentual
- Vaciar carrito

IMPORTANTE: Introduce 2-3 bugs sutiles a propósito:
- Un error en el cálculo del total
- Un problema con el descuento
- Un edge case no manejado

Los bugs deben ser sutiles, no obvios.
No me digas cuáles son los bugs.

Añade también un archivo test-cart.js que use el carrito
con varios casos de prueba que impriman resultados.
```

### Paso 2: Encuentra los bugs

Ejecuta los tests:

```bash
node test-cart.js
```

Revisa los resultados. Algo no cuadra.

### Paso 3: Documenta el bug (sin pedir ayuda aún)

Antes de pedir ayuda a Claude, documenta:

1. **Qué esperabas:**
   ```
   Al añadir 2 productos de $10 cada uno, el total debería ser $20
   ```

2. **Qué obtuviste:**
   ```
   El total muestra $10
   ```

3. **Pasos para reproducir:**
   ```
   1. Crear carrito nuevo
   2. Añadir producto("Libro", 10, 2)
   3. Llamar getTotal()
   ```

4. **Datos exactos:**
   ```
   Input: { nombre: "Libro", precio: 10, cantidad: 2 }
   Output esperado: 20
   Output actual: 10
   ```

### Paso 4: Pide ayuda estructurada

Ahora sí, pide ayuda con todo el contexto:

```
Hay un bug en shopping-cart.js.

Comportamiento esperado:
Al añadir un producto con cantidad 2 y precio $10, el total debería ser $20.

Comportamiento actual:
El total muestra $10.

Pasos para reproducir:
1. const cart = new ShoppingCart()
2. cart.addProduct("Libro", 10, 2)
3. cart.getTotal() // Devuelve 10, debería ser 20

¿Puedes identificar el bug y explicarme dónde está?
No lo arregles aún, solo explícame el problema.
```

### Paso 5: Entiende el bug

Claude te explicará dónde está el bug. Antes de arreglarlo:

```
Explícame por qué ese código causa el bug.
¿Qué debería hacer en su lugar?
```

Entender el bug es tan importante como arreglarlo.

### Paso 6: Arregla el bug

```
Arregla ese bug específico.
No cambies nada más del código.
```

Verifica:

```bash
node test-cart.js
```

### Paso 7: Busca más bugs

Si hay más bugs (los hay):

```
El cálculo del descuento también parece incorrecto.

Esperado: 10% de descuento sobre $100 = $90
Actual: Muestra $0

¿Dónde está el problema?
```

Repite el proceso: entender → arreglar → verificar.

### Paso 8: Checkpoint final

```bash
git init
git add -A
git commit -m "fix: corregir bugs en shopping-cart"
```

## Criterio de éxito

- [ ] Identificaste al menos 2 bugs
- [ ] Documentaste cada bug antes de pedir ayuda
- [ ] Entendiste la causa de cada bug
- [ ] Arreglaste los bugs uno por uno
- [ ] El código final pasa todas las pruebas
- [ ] Puedes explicar qué causaba cada bug

## Plantilla para reportar bugs

Usa esta plantilla cada vez que pidas ayuda con un bug:

```
## Bug en [archivo]

### Esperado
[Qué debería pasar]

### Actual
[Qué pasa realmente]

### Pasos para reproducir
1. [Paso 1]
2. [Paso 2]
3. [Paso 3]

### Datos
- Input: [datos de entrada]
- Output esperado: [resultado correcto]
- Output actual: [resultado incorrecto]

### Error (si hay)
[Mensaje de error exacto]
```

## Errores comunes al debuggear

**Error 1: "No funciona"**

Mal:
```
El carrito no funciona, arréglalo
```

Claude no sabe qué no funciona. Puede cambiar algo que sí funcionaba.

**Error 2: Pedir arreglo sin entender**

Mal:
```
Arréglalo
```

Mejor:
```
Explícame primero qué causa el bug
```

**Error 3: Arreglar todo a la vez**

Mal:
```
Arregla todos los bugs que encuentres
```

Mejor:
```
Arregla solo el bug del total. Después vemos los otros.
```

## Por qué funciona

1. **Contexto preciso** → Claude no tiene que adivinar
2. **Un bug a la vez** → Cambios controlados
3. **Entender antes de arreglar** → Aprendes y evitas recurrencia
4. **Verificar después** → Confirmas que está resuelto

## Tips

**Si el bug es intermitente:**
```
El bug solo ocurre cuando la cantidad es mayor a 10.
Con cantidad <= 10 funciona bien.
```

**Si hay un stack trace:**
```
Error: Cannot read property 'price' of undefined
    at ShoppingCart.getTotal (shopping-cart.js:45)
    at Object.<anonymous> (test-cart.js:12)
```

Incluye el stack trace completo.

**Si no sabes qué está mal:**
```
El resultado no es el esperado pero no sé dónde está el error.
¿Puedes añadir console.logs para trazar la ejecución?
```

## Qué aprendiste

- Documentar bugs antes de pedir ayuda
- Dar contexto estructurado
- Entender antes de arreglar
- Debuggear de forma metódica

## Siguiente nivel

Has completado el Nivel 2 - Copiloto. Estás listo para el [Nivel 3 - Director](../03-director/README.md).

---

[Volver al nivel](./README.md) | [Volver al índice](../README.md)
