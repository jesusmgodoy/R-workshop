/* Mostrar confeti solo al entrar en la bienvenida; no necesita servicios externos. */
(() => {
  const movimientoReducido = window.matchMedia("(prefers-reduced-motion: reduce)");
  let capa;
  let temporizador;

  function limpiar() {
    clearTimeout(temporizador);
    capa?.remove();
    capa = undefined;
  }

  function celebrar(diapositiva) {
    limpiar();
    if (diapositiva?.id !== "bienvenida" || movimientoReducido.matches ||
        document.documentElement.classList.contains("print-pdf")) return;

    const colores = ["#107895", "#e64173", "#e9b949", "#4ca78b", "#8064a2"];
    capa = document.createElement("div");
    capa.className = "confeti";
    capa.setAttribute("aria-hidden", "true");

    for (let i = 0; i < 100; i++) {
      const papel = document.createElement("span");
      papel.style.left = `${Math.random() * 100}%`;
      papel.style.backgroundColor = colores[i % colores.length];
      papel.style.setProperty("--duracion", `${2.8 + Math.random() * 2}s`);
      papel.style.setProperty("--retraso", `${Math.random() * 0.6}s`);
      papel.style.setProperty("--deriva", `${(Math.random() - 0.5) * 35}vw`);
      papel.style.setProperty("--giro", `${(Math.random() - 0.5) * 1080}deg`);
      capa.appendChild(papel);
    }

    document.body.appendChild(capa);
    temporizador = setTimeout(limpiar, 5500);
  }

  function iniciar() {
    const presentacion = window.Reveal;
    if (!presentacion) return;
    presentacion.on("ready", (evento) => celebrar(evento.currentSlide));
    presentacion.on("slidechanged", (evento) => celebrar(evento.currentSlide));
    presentacion.on("overviewshown", limpiar);
    if (presentacion.isReady()) celebrar(presentacion.getCurrentSlide());
  }

  movimientoReducido.addEventListener("change", limpiar);
  window.addEventListener("pagehide", limpiar);
  if (document.readyState === "complete") iniciar();
  else window.addEventListener("load", iniciar, { once: true });
})();
