# E01 - Feature con Tests

> Versión: Claude Code 1.0.x
> Nivel: Copiloto
> Tiempo estimado: 30 minutos

## Objetivo

Aprender desarrollo guiado por tests (TDD) con Claude. Primero defines qué debe hacer el código (tests), luego pides la implementación.

## Contexto

Vas a crear un validador de contraseñas. En lugar de describir las reglas en texto, las definirás como tests. Claude implementará el código que los pase.

## Instrucciones

### Paso 1: Setup del proyecto

Crea la estructura del proyecto:

```bash
cd ~/vibe-coding-curso
mkdir -p validador-password
cd validador-password
npm init -y
npm install --save-dev jest
```

Configura Jest en `package.json`:

```bash
claude
```

```
Modifica el package.json para que el script "test" ejecute jest.
```

### Paso 2: Define los tests primero

Pide a Claude que escriba solo los tests:

```
Crea un archivo password.test.js con tests para un validador de contraseñas.

Reglas que debe cumplir una contraseña válida:
- Mínimo 8 caracteres
- Al menos una mayúscula
- Al menos una minúscula
- Al menos un número
- Al menos un carácter especial (!@#$%^&*)

Escribe tests para:
- Contraseña válida (cumple todo)
- Contraseña muy corta
- Sin mayúsculas
- Sin minúsculas
- Sin números
- Sin caracteres especiales
- String vacío
- Null o undefined

NO escribas la implementación todavía.
La función se llamará validatePassword y devolverá { valid: boolean, errors: string[] }
```

### Paso 3: Revisa los tests

Abre `password.test.js` y revisa:

- ¿Los tests cubren todos los casos?
- ¿Los nombres son descriptivos?
- ¿Falta algún caso edge?

Si quieres añadir algún test:

```
Añade un test para contraseñas que solo tienen espacios.
```

### Paso 4: Ejecuta los tests (deben fallar)

```bash
npm test
```

Todos los tests deben fallar porque no existe la implementación. Esto es correcto en TDD.

### Paso 5: Checkpoint

```bash
git init
git add -A
git commit -m "test: casos de prueba para validador de password"
```

### Paso 6: Pide la implementación

```
Ahora crea el archivo password.js con la función validatePassword.
Debe hacer que pasen todos los tests que escribiste.
```

### Paso 7: Ejecuta los tests

```bash
npm test
```

¿Pasan todos? Si no:

```
El test "debe rechazar contraseña sin mayúsculas" falla.
Error: [pega el error]
Arregla la implementación.
```

### Paso 8: Itera si es necesario

A veces los tests pasan pero quieres añadir casos:

```
Añade un test para verificar que "Password1!" es válida
y otro para verificar que "password1!" es inválida (sin mayúscula).
```

Luego ajusta la implementación si falla.

## Criterio de éxito

- [ ] Tienes un archivo `password.test.js` con al menos 8 tests
- [ ] Tienes un archivo `password.js` con la implementación
- [ ] Todos los tests pasan (`npm test`)
- [ ] Los tests se escribieron ANTES de la implementación
- [ ] Tienes al menos un commit de checkpoint

## Estructura final

```
validador-password/
├── package.json
├── password.js
└── password.test.js
```

## Por qué TDD funciona con Claude

1. **Tests como especificación**: Claude sabe exactamente qué cumplir
2. **Menos ambigüedad**: No hay que interpretar "valida bien"
3. **Verificación automática**: `npm test` te dice si funciona
4. **Refactor seguro**: Puedes pedir mejoras sin romper nada

## Tips

**Si un test es confuso:**
```
Explícame qué verifica el test "debe rechazar passwords con solo espacios"
```

**Si quieres ver el coverage:**
```
Añade configuración de coverage a Jest y muéstrame qué líneas no están cubiertas
```

**Si la implementación es muy compleja:**
```
Simplifica la función validatePassword.
Usa expresiones regulares si ayuda a la legibilidad.
```

## Qué aprendiste

- Escribir tests antes que código
- Los tests definen el comportamiento esperado
- Claude implementa para cumplir los tests
- TDD + Claude = desarrollo predecible

## Siguiente ejercicio

[E02 - Refactor Guiado](./E02-refactor-guiado.md)

---

[Volver al nivel](./README.md) | [Volver al índice](../README.md)
