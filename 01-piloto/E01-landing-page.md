# E01 - Landing Page desde Sketch

> Versión: Claude Code 1.0.x
> Nivel: Piloto
> Tiempo estimado: 20 minutos

## Objetivo

Aprender a dar contexto visual a Claude. Convertirás un dibujo hecho a mano en una página web funcional.

## Contexto

Tienes una idea para una landing page. En lugar de describirla con mil palabras, la dibujas en papel y dejas que Claude la interprete.

## Instrucciones

### Paso 1: Dibuja tu landing

En un papel, dibuja una landing page simple. Incluye:

- Un header con logo y menú
- Una sección hero con título y botón
- Al menos una sección más (features, testimonios, etc.)
- Un footer

No te preocupes por que sea bonito. Lo importante es que sea claro.

### Paso 2: Toma una foto

Fotografía tu dibujo con buena luz. Asegúrate de que:

- Se lean los textos que escribiste
- Las secciones estén claras
- No haya sombras que tapen partes

Guarda la imagen en tu carpeta de práctica:

```bash
# Ejemplo: copiar desde Descargas
cp ~/Downloads/mi-sketch.jpg ~/vibe-coding-curso/
```

### Paso 3: Pide a Claude que la interprete

Inicia Claude Code en tu carpeta:

```bash
cd ~/vibe-coding-curso
claude
```

Ahora pide la landing. Sé específico sobre el contexto:

```
Mira la imagen mi-sketch.jpg. Es un sketch de una landing page.

Créala en HTML y CSS con estas características:
- Responsive (mobile-first)
- Colores: fondo blanco, texto oscuro, acentos en azul
- Tipografía: sans-serif moderna
- El archivo debe llamarse landing.html

Interpreta el sketch lo mejor que puedas. Si algo no está claro,
usa tu criterio para completarlo.
```

### Paso 4: Revisa el resultado

Abre `landing.html` en tu navegador:

```bash
# En macOS
open landing.html

# En Linux
xdg-open landing.html

# En Windows
start landing.html
```

### Paso 5: Itera

Identifica 2-3 cosas que quieras cambiar y pídelas específicamente:

```
Cambios en la landing:
1. El botón del hero debe ser más grande y con bordes redondeados
2. Añade más espacio entre secciones
3. El footer debe tener fondo gris claro
```

Repite hasta que estés satisfecho.

## Criterio de éxito

- [ ] Tienes un archivo `landing.html` funcional
- [ ] La página refleja la estructura de tu sketch
- [ ] Es responsive (se ve bien en móvil y desktop)
- [ ] Hiciste al menos una iteración de mejoras

## Tips

**Si Claude no interpreta bien el sketch:**
```
En mi sketch, la sección de arriba es el header con el menú.
El rectángulo grande del medio es la sección hero.
Los tres cuadrados son tarjetas de features.
```

**Si quieres un estilo específico:**
```
Estilo similar a las landings de Stripe o Linear.
Minimalista, con mucho espacio en blanco.
```

**Si algo no te gusta:**

Sé preciso. En lugar de "no me gusta el header", di "el header necesita más padding vertical y el logo debe estar a la izquierda".

## Qué aprendiste

- Dar contexto visual acelera la comunicación
- Claude puede interpretar sketches imperfectos
- Iterar con feedback específico mejora resultados rápidamente

## Siguiente ejercicio

[E02 - Formulario de Contacto](./E02-formulario.md)

---

[Volver al nivel](./README.md) | [Volver al índice](../README.md)
