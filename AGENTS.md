# Instrucciones compartidas para trabajar con IA

Estas instrucciones son comunes a Codex y Claude Code. Mantener las reglas del
proyecto en este archivo; `CLAUDE.md` solo lo importa para evitar duplicarlas.

## Proyecto y alcance

- Taller de R de Jesús y Nadia (`nadia-data`) en la Facultad de Ciencias Políticas
  y Sociología. La presentación se prepara con Quarto y Reveal.js.
- Añadir únicamente el contenido solicitado. No inventar temario, explicaciones,
  ejemplos, ejercicios, datos, referencias ni metadatos de portada.
- Conservar el contenido, la estructura y las modificaciones de ambos autores.
  Limitar cada cambio a lo necesario para la petición actual.
- Usar español en los materiales propios, salvo que se solicite otra cosa.

## Archivos y tema

- `taller-1/sesion-1/presentacion.qmd`: fuente editable de la primera presentación.
- Organizar las siguientes presentaciones en `taller-N/sesion-N/presentacion.qmd`.
- Usar nombres de carpeta en minúsculas, sin espacios y con guiones.
- `_quarto.yml`: configuración del proyecto y selección de las presentaciones.
- `index.html`: índice de enlaces a las sesiones; actualizarlo al añadir una sesión.
- `_site/`: salida generada para publicación; no editarla ni versionarla.
- `.github/workflows/pages.yml`: genera y publica `_site/` en GitHub Pages al
  subir cambios a `main`. El repositorio y las presentaciones son públicos.
- `_extensions/clean/`: extensión Clean utilizada por la presentación.
- `referencia-clean/`: copia de referencia del tema original, con su demo.
- `REFERENCIA.md`: procedencia, commit y licencia de esa copia.
- Mantener `referencia-clean/` intacta. Consultar su `README.md` y
  `demo/template.qmd` para conocer la sintaxis y los componentes del tema.
- Conservar los avisos de autoría y las licencias de terceros. La licencia del
  tema no determina la licencia de los materiales propios del taller.

## Coherencia visual

- Utilizar el formato `clean-revealjs` y el diseño original de Clean como base.
- Mantener la configuración actual de 1280 × 720 y los recursos incrustados.
  Actualmente no hay portada; no añadirla por iniciativa propia.
- Reutilizar los componentes y la sintaxis del tema antes de crear alternativas.
- Respetar las tipografías, los colores, las disposiciones y las convenciones que
  ya estén presentes en los materiales aprobados. No rediseñar por iniciativa propia.
- Si se solicita personalizar el diseño, hacerlo en archivos propios, por ejemplo
  `estilos.scss` o `estilos.css`, y enlazarlos desde la configuración de Quarto.
  Evitar modificar los archivos originales de `_extensions/clean/`.
- Guardar las decisiones visuales en la configuración y los estilos del proyecto,
  para que no dependan de la memoria o de las preferencias de una herramienta.

## Redacción y código R

- Seguir la terminología, el tono y las convenciones de código existentes.
  No imponer nuevas convenciones pedagógicas o de estilo sin que se hayan acordado.
- Mantener el código editable y reproducible; usar rutas relativas al proyecto.
- No inventar resultados ni presentar código como ejecutado si no se ha comprobado.
  No modificar ni sustituir datos originales por iniciativa propia.

## Comprobación y colaboración

- Antes de editar, revisar el estado de Git y los archivos afectados. Puede haber
  trabajo de Jesús o Nadia sin confirmar; no borrarlo, revertirlo ni sobrescribirlo.
- Al modificar la presentación o su configuración, ejecutar desde la raíz:

  ```bash
  quarto render
  ```

- Para previsualizar la primera presentación:
  `quarto preview "taller-1/sesion-1/presentacion.qmd"`.
- Cada sesión debe generar su propio `index.html` mediante `output-file: index.html`.
  Mantener las rutas publicadas para conservar los enlaces compartidos.
- Al añadir sesiones, actualizar el índice general y la tabla de `README.md`.
- Si se añaden bloques ejecutables de R, configurar sus dependencias en el workflow
  y comprobar también la generación en GitHub Actions.
- Si el cambio afecta al diseño, revisar también el HTML en un navegador para
  comprobar el aspecto y detectar desbordamientos o solapamientos.
- Si no se puede completar una comprobación, indicar qué queda sin verificar.
- Mantener los archivos generados y temporales fuera del control de versiones
  según `.gitignore`. No añadir dependencias o automatizaciones innecesarias.
- Al terminar, resumir los archivos modificados y las comprobaciones realizadas.
