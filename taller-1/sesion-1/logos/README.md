# Logos de la portada

- `originales/facultad.svg`: copia intacta del archivo facilitado por Jesús.
- `originales/ugr-color.svg`: copia intacta del SVG oficial de la UGR:
  <https://secretariageneral.ugr.es/sites/webugr/secretariageneral/public/inline-files/UGR-MARCA-01-color.svg>.
- `ugr-ajustado.svg`: mismo dibujo de la UGR, con el encuadre ajustado mediante
  `viewBox` para retirar el espacio vacío exterior. Se conservan las formas,
  los colores y las proporciones, con un pequeño margen alrededor del dibujo.
- `portada.svg`: composición vectorial de ambos logos, sin imágenes externas,
  situada debajo de la fecha mediante `../estilos.css`. La opción nativa
  `title-logo` queda comentada en el `.qmd` como referencia.

Para cambiar el tamaño del conjunto, ajustar `--title-logo-width` y
`--title-logo-height` en `../estilos.css`, manteniendo la proporción 460:130.

## Lenguajes de programación

- `r.svg`: SVG original de <https://www.r-project.org/logo/Rlogo.svg>.
  © 2016 The R Foundation. Se conserva sin modificaciones bajo
  [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
  Condiciones de distribución: <https://www.r-project.org/logo/>.
- `python.svg`: SVG original de las dos serpientes, enlazado desde la
  [página oficial de la Python Software Foundation](https://www.python.org/community/logos/).
  Archivo: <https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg>.
  Se conserva sin modificaciones. Su uso está sujeto a la
  [política de marcas de la PSF](https://www.python.org/psf/trademarks/).

Ambos se insertan como imágenes SVG en el resumen de R y Python, con sus
proporciones originales. La atribución también figura en las notas de esa diapositiva.
