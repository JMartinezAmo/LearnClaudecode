# Nivel 1 - Piloto

> Versión: Claude Code 1.0.x (Diciembre 2024)

En este nivel, tú eres el piloto. Das instrucciones claras y Claude ejecuta. Tu trabajo es aprender a comunicar qué quieres de forma efectiva.

## Qué aprenderás

- Dar contexto visual (imágenes, sketches)
- Ser específico en tus instrucciones
- Iterar sobre resultados
- Usar `/clear` para empezar fresco

## La regla de oro

**Cuanto más contexto des, mejor resultado obtienes.**

Claude no lee tu mente. Si le dices "haz una landing page", te dará algo genérico. Si le dices "haz una landing page para una cafetería hipster en Madrid, con colores tierra y tipografía sans-serif", te dará algo mucho más cercano a lo que imaginas.

## Cómo dar buen contexto

### 1. Sé específico sobre el QUÉ

Mal:
```
Haz un formulario
```

Bien:
```
Haz un formulario de contacto con campos para nombre, email y mensaje.
El botón debe decir "Enviar mensaje".
```

### 2. Describe el estilo visual

Mal:
```
Que se vea bonito
```

Bien:
```
Estilo minimalista, fondo blanco, tipografía oscura,
bordes redondeados en los inputs, botón azul (#3B82F6)
```

### 3. Da ejemplos o referencias

```
Algo similar al formulario de contacto de stripe.com
```

### 4. Incluye restricciones

```
Solo HTML y CSS, sin JavaScript.
Debe funcionar en móvil.
```

## Iterar es normal

Tu primer resultado casi nunca será perfecto. Eso está bien.

El flujo típico es:

1. Das instrucciones iniciales
2. Claude genera algo
3. Identificas qué cambiar
4. Pides cambios específicos
5. Repites hasta estar satisfecho

**Pedir cambios específicos** es clave:

Mal:
```
No me gusta, hazlo mejor
```

Bien:
```
El botón es muy pequeño, hazlo el doble de alto.
El texto del título debe ser más grande.
```

## Cuándo usar /clear

Usa `/clear` cuando:

- Quieras empezar un ejercicio nuevo
- Claude esté confundido por contexto anterior
- El chat se haya vuelto muy largo

No uses `/clear` cuando:

- Estás iterando sobre el mismo resultado
- Necesitas que Claude recuerde lo que hizo antes

## Ejercicios de este nivel

| Ejercicio | Input | Output | Foco |
|-----------|-------|--------|------|
| [E01 - Landing Page](./E01-landing-page.md) | Sketch a mano | HTML/CSS | Contexto visual |
| [E02 - Formulario](./E02-formulario.md) | Texto | Formulario con validación | Iterar |
| [E03 - Dashboard](./E03-dashboard-simple.md) | CSV + descripción | Gráficos | Datos estructurados |

## Antes de empezar

Asegúrate de:

1. Tener Claude Code funcionando (Nivel 0)
2. Estar en tu carpeta `~/vibe-coding-curso`
3. Ejecutar `claude` para iniciar

---

[Volver al índice](../README.md)
