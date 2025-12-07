# E02 - Formulario de Contacto

> Versión: Claude Code 1.0.x
> Nivel: Piloto
> Tiempo estimado: 25 minutos

## Objetivo

Aprender a iterar sobre resultados. Empezarás con un formulario básico y lo mejorarás paso a paso hasta tener algo completo.

## Contexto

Un cliente te pide un formulario de contacto. No tienes diseño, solo requisitos en texto. Usarás Claude para construirlo iterativamente.

## Instrucciones

### Paso 1: El formulario básico

Inicia Claude Code en tu carpeta:

```bash
cd ~/vibe-coding-curso
claude
```

Pide el formulario inicial:

```
Crea un formulario de contacto en HTML con CSS incluido.

Campos:
- Nombre (obligatorio)
- Email (obligatorio)
- Teléfono (opcional)
- Mensaje (obligatorio, textarea)

Botón: "Enviar mensaje"

Guárdalo como formulario.html
```

Abre el resultado en tu navegador y revísalo.

### Paso 2: Añade validación visual

El formulario funciona pero no da feedback. Mejóralo:

```
Añade validación visual al formulario:
- Los campos obligatorios deben tener un asterisco rojo
- Si un campo está vacío y es obligatorio, mostrar borde rojo
- El email debe validar formato básico
- Usa solo HTML5 y CSS (sin JavaScript)
```

### Paso 3: Mejora el estilo

Ahora el aspecto visual:

```
Mejora el estilo del formulario:
- Centra el formulario en la página
- Máximo 500px de ancho
- Añade sombra suave al contenedor
- Inputs con altura de 45px
- Textarea con altura de 120px
- Botón azul (#2563EB) que cambia a azul más oscuro en hover
- Espaciado consistente de 16px entre elementos
```

### Paso 4: Hazlo responsive

Verifica que funcione en móvil:

```
Ajusta el formulario para móvil:
- En pantallas menores a 600px, el formulario debe ocupar 90% del ancho
- El padding interior debe reducirse a 16px
- El botón debe ocupar todo el ancho
```

### Paso 5: Estados de interacción

Últimos detalles:

```
Añade estados de interacción:
- Focus en inputs: borde azul y sombra suave
- Transiciones suaves de 0.2s en todos los cambios de color
- Cursor pointer en el botón
- Estado disabled del botón: gris y sin cursor pointer
```

## Criterio de éxito

- [ ] El formulario tiene los 4 campos requeridos
- [ ] Los campos obligatorios están marcados visualmente
- [ ] Hay validación HTML5 básica (required, type="email")
- [ ] El formulario se ve bien en desktop y móvil
- [ ] Los estados hover y focus funcionan
- [ ] Hiciste al menos 4 iteraciones de mejora

## Comparación: antes y después

Tu primer formulario probablemente era funcional pero básico. Después de iterar deberías tener:

| Aspecto | Antes | Después |
|---------|-------|---------|
| Validación | Ninguna | HTML5 + visual |
| Estilo | Browser default | Diseño limpio |
| Responsive | No | Sí |
| Interactividad | Ninguna | Hover, focus |

## Tips para iterar bien

**Un cambio a la vez** produce mejores resultados que pedir todo junto:

Mal:
```
Hazlo más bonito, responsive, con validación y animaciones
```

Bien:
```
Primero añade validación visual.
Después ajustaremos el responsive.
```

**Sé específico con valores:**

Mal:
```
Hazlo más grande
```

Bien:
```
Aumenta la altura de los inputs a 50px
```

**Si algo se rompe**, pide que lo arregle sin cambiar lo demás:

```
El hover del botón dejó de funcionar después del último cambio.
Arréglalo sin modificar el resto de estilos.
```

## Qué aprendiste

- Iterar paso a paso produce mejores resultados
- Ser específico con valores evita ambigüedad
- Cada iteración debe tener un objetivo claro
- Es normal hacer muchas iteraciones

## Siguiente ejercicio

[E03 - Dashboard Simple](./E03-dashboard-simple.md)

---

[Volver al nivel](./README.md) | [Volver al índice](../README.md)
