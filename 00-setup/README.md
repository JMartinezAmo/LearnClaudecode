# Nivel 0 - Setup

> Versión: Claude Code 1.0.x (Diciembre 2024)

Antes de hacer vibe coding, necesitas tener Claude Code funcionando. Este nivel te guía paso a paso.

## Requisitos previos

Antes de empezar, asegúrate de tener:

- [ ] **Cuenta de GitHub** con acceso configurado
- [ ] **Plan Pro de Claude** (claude.ai/settings)
- [ ] **Node.js 18+** instalado
- [ ] **Terminal** que sepas abrir y usar

### Verificar Node.js

```bash
node --version
```

Debe mostrar `v18.x.x` o superior. Si no tienes Node.js:

- **macOS**: `brew install node`
- **Windows**: Descarga desde [nodejs.org](https://nodejs.org)
- **Linux**: `sudo apt install nodejs` o equivalente

## Paso 1: Instalar Claude Code

Abre tu terminal y ejecuta:

```bash
npm install -g @anthropic-ai/claude-code
```

Verifica la instalación:

```bash
claude --version
```

Deberías ver algo como `claude-code/1.0.x`.

## Paso 2: Autenticación

Ejecuta Claude Code por primera vez:

```bash
claude
```

Se abrirá tu navegador para autenticarte con tu cuenta de Claude. Sigue las instrucciones en pantalla.

Una vez autenticado, verás el prompt de Claude Code en tu terminal:

```
claude>
```

## Paso 3: Tu primer comando

Escribe esto en el prompt de Claude Code:

```
¿Qué hora es?
```

Claude debería responder con la hora actual de tu sistema. Esto confirma que:

1. La instalación funciona
2. La autenticación está correcta
3. Claude puede ejecutar comandos en tu máquina

## Paso 4: Crear tu carpeta de práctica

Sal de Claude Code escribiendo:

```
/exit
```

Ahora crea una carpeta para los ejercicios del curso:

```bash
mkdir ~/vibe-coding-curso
cd ~/vibe-coding-curso
git init
```

Vuelve a entrar a Claude Code desde esta carpeta:

```bash
claude
```

## Paso 5: Verificación final

Dentro de Claude Code, pide:

```
Crea un archivo README.md que diga "Hola, estoy aprendiendo vibe coding"
```

Claude debería:
1. Crear el archivo
2. Mostrarte qué hizo
3. Pedirte confirmación si es necesario

Verifica que el archivo existe:

```bash
cat README.md
```

## Criterio de éxito

Has completado el setup cuando:

- [ ] `claude --version` muestra la versión instalada
- [ ] Puedes iniciar Claude Code con `claude`
- [ ] Claude responde a tus preguntas
- [ ] Claude puede crear archivos en tu carpeta de práctica
- [ ] Tienes una carpeta `~/vibe-coding-curso` con git inicializado

## Problemas comunes

### "command not found: claude"

Node.js no está en tu PATH o la instalación falló. Prueba:

```bash
npm list -g @anthropic-ai/claude-code
```

Si no aparece, reinstala con `sudo npm install -g @anthropic-ai/claude-code`.

### Error de autenticación

1. Verifica que tienes Plan Pro en claude.ai/settings
2. Intenta `claude logout` y luego `claude` de nuevo
3. Revisa que tu navegador no bloquee popups

### Claude no puede crear archivos

Asegúrate de estar en una carpeta donde tengas permisos de escritura. Evita carpetas del sistema.

## Comandos útiles

| Comando | Qué hace |
|---------|----------|
| `claude` | Inicia Claude Code |
| `claude --help` | Muestra ayuda |
| `/exit` | Sale de Claude Code |
| `/clear` | Limpia el contexto actual |
| `/help` | Ayuda dentro de Claude Code |

## Siguiente paso

Con el setup completo, estás listo para el [Nivel 1 - Piloto](../01-piloto/README.md).

---

[Volver al índice](../README.md)
