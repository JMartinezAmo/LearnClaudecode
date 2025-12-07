# E03 - Dashboard Simple

> Versión: Claude Code 1.0.x
> Nivel: Piloto
> Tiempo estimado: 30 minutos

## Objetivo

Aprender a dar datos estructurados como contexto. Crearás un dashboard a partir de un archivo CSV.

## Contexto

Tienes datos de ventas de tu negocio y quieres visualizarlos. Le darás a Claude los datos crudos y él creará los gráficos.

## Instrucciones

### Paso 1: Crea los datos

Primero, crea un archivo CSV con datos de ejemplo.

Inicia Claude Code:

```bash
cd ~/vibe-coding-curso
claude
```

Pide que cree los datos:

```
Crea un archivo ventas.csv con datos de ventas ficticios.

Columnas:
- fecha (formato YYYY-MM-DD, últimos 6 meses)
- producto (3-4 productos diferentes)
- cantidad (números entre 5 y 50)
- precio_unitario (números entre 10 y 100)
- region (Norte, Sur, Este, Oeste)

Genera 50 filas de datos realistas.
```

### Paso 2: Limpia el contexto

Antes de crear el dashboard, limpia el contexto anterior:

```
/clear
```

Esto es importante porque queremos que Claude se enfoque en el dashboard, no en la creación del CSV.

### Paso 3: Pide el dashboard

Ahora pide el dashboard dando contexto sobre los datos:

```
Tengo un archivo ventas.csv con datos de ventas.

Columnas: fecha, producto, cantidad, precio_unitario, region

Crea un dashboard en HTML que muestre:
1. Ventas totales (suma de cantidad * precio_unitario)
2. Gráfico de barras: ventas por producto
3. Gráfico de líneas: ventas por mes
4. Tabla con las 10 ventas más grandes

Usa Chart.js para los gráficos.
Guárdalo como dashboard.html
```

### Paso 4: Revisa y ajusta

Abre el dashboard:

```bash
open dashboard.html
```

Probablemente necesites ajustes. Pide mejoras específicas:

```
Ajustes al dashboard:
1. Los gráficos deben tener el mismo ancho
2. Añade un título "Dashboard de Ventas" arriba
3. La tabla necesita bordes y padding
4. Los números de dinero deben mostrar formato: $1,234.56
```

### Paso 5: Añade interactividad

Para hacerlo más útil:

```
Añade un filtro por región:
- Un dropdown arriba del dashboard
- Al seleccionar una región, los gráficos y tabla se actualizan
- Opción "Todas" para ver todo
```

## Criterio de éxito

- [ ] Tienes un archivo `ventas.csv` con 50 filas de datos
- [ ] El dashboard muestra el total de ventas
- [ ] Hay un gráfico de barras por producto
- [ ] Hay un gráfico de líneas por mes
- [ ] La tabla muestra las 10 ventas mayores
- [ ] Usaste `/clear` entre la creación del CSV y el dashboard

## El poder de /clear

En este ejercicio usaste `/clear` estratégicamente. ¿Por qué?

**Sin /clear:**
- Claude recuerda todo el contexto del CSV
- Puede confundirse entre "crear datos" y "visualizar datos"
- El contexto crece innecesariamente

**Con /clear:**
- Empiezas fresco para el dashboard
- Claude se enfoca solo en la visualización
- Das contexto limpio sobre qué contiene el CSV

**Regla práctica:** usa `/clear` cuando cambies de tarea, no cuando iteres sobre la misma.

## Tips para datos estructurados

**Describe las columnas claramente:**

```
Columnas del CSV:
- user_id: identificador único (número)
- email: email del usuario
- created_at: fecha de registro (YYYY-MM-DD)
- plan: free, pro, o enterprise
```

**Menciona el volumen:**

```
El archivo tiene aproximadamente 1000 filas
```

**Indica anomalías:**

```
Algunos campos de email pueden estar vacíos.
Las fechas anteriores a 2023 pueden tener formato diferente.
```

## Variación avanzada

Si quieres practicar más, intenta:

1. Añade un segundo CSV (por ejemplo, `clientes.csv`)
2. Pide un dashboard que combine datos de ambos
3. Incluye un gráfico que muestre ventas por tipo de cliente

## Qué aprendiste

- Dar contexto sobre estructura de datos
- Usar `/clear` para separar tareas
- Describir lo que quieres visualizar antes de cómo
- Iterar sobre dashboards complejos

## Siguiente nivel

Has completado el Nivel 1 - Piloto. Ahora estás listo para trabajar junto a Claude en el [Nivel 2 - Copiloto](../02-copiloto/README.md).

---

[Volver al nivel](./README.md) | [Volver al índice](../README.md)
