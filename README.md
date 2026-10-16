# R-workshop

## Presentaciones

| Taller | Sesión | Fuente | Presentación |
| --- | --- | --- | --- |
| 1 | 1 | [presentacion.qmd](taller%201/sesion%201/presentacion.qmd) | [Abrir](https://jesusmgodoy.github.io/R-workshop/taller%201/sesion%201/) |

Las instrucciones compartidas para Codex y Claude Code están en `AGENTS.md`.
La procedencia y licencia del tema Clean están documentadas en `REFERENCIA.md`.

## Edición y generación

Desde la raíz del repositorio:

```bash
quarto preview "taller 1/sesion 1/presentacion.qmd"
```

Para generar todas las presentaciones:

```bash
quarto render
```

La salida se guarda en `_site/`. Cada presentación genera un `index.html`
dentro de su carpeta de taller y sesión. `_site/index.html` es el índice general.

Para añadir una presentación, crear `taller N/sesion N/presentacion.qmd`,
utilizar el formato `clean-revealjs` con `output-file: index.html` y añadir su
enlace relativo al `index.html` de la raíz. El patrón de `_quarto.yml` incluye
las presentaciones con esa estructura y excluye los ejemplos de referencia.

## Publicación

Repositorio público: <https://github.com/jesusmgodoy/R-workshop>.

Índice de presentaciones: <https://jesusmgodoy.github.io/R-workshop/>.

El workflow `.github/workflows/pages.yml` genera todas las presentaciones y
publica únicamente `_site/` en GitHub Pages con cada subida a `main`. También
se puede ejecutar manualmente desde GitHub Actions. Utiliza Quarto 1.10.19.

Cada sesión conserva su propia ruta, por ejemplo `taller%201/sesion%201/`.
Los espacios de los nombres de carpeta se representan con `%20` en los enlaces.
Al añadir una sesión, actualizar también la tabla de este documento.

La presentación actual no ejecuta código R. Cuando se añadan bloques de R,
configurar R y sus dependencias en el workflow para que también se puedan generar
en GitHub Actions.
