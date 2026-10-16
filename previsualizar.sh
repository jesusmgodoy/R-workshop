#!/bin/sh
# Vista local de la primera sesión, siempre en el mismo puerto.
set -eu
cd "$(dirname "$0")"
exec quarto preview taller-1/sesion-1/presentacion.qmd \
  --host 127.0.0.1 --port 8769 --timeout 0 --no-browser --no-navigate
