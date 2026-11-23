/* Lógica del catálogo. Para cambiar gorras usa el panel /admin, no este archivo. */
(function () {
  const formatoMXN = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  const precio = (n) => formatoMXN.format(n).replace("MX$", "$");

  let numeroLimpio = "";
  let PRODUCTOS = [];

  function enlaceWhatsApp(mensaje) {
    return "https://wa.me/52" + numeroLimpio + "?text=" + encodeURIComponent(mensaje);
  }

  function precioFinal(p) {
    return p.oferta && p.precioOferta > 0 ? p.precioOferta : p.precio;
  }

  function crearTarjeta(p) {
    const agotado = !(Number(p.cantidad) > 0);
    const enOferta = p.oferta && p.precioOferta > 0;

    const art = document.createElement("article");
    art.className = "tarjeta" + (agotado ? " agotada" : "");

    const fig = document.createElement("div");
    fig.className = "foto";
    const img = document.createElement("img");
    img.src = p.foto;
    img.alt = "Gorra " + p.nombre;
    img.loading = "lazy";
    img.decoding = "async";
    img.width = 800;
    img.height = 800;
    fig.appendChild(img);
    if (enOferta) {
      const tag = document.createElement("span");
      tag.className = "badge";
      tag.textContent = "Oferta";
      fig.appendChild(tag);
    }
    art.appendChild(fig);

    const info = document.createElement("div");
    info.className = "info";

    const h3 = document.createElement("h3");
    h3.className = "modelo";
    h3.textContent = p.nombre;
    info.appendChild(h3);

    const precios = document.createElement("p");
    precios.className = "precios";
    if (enOferta) {
      const antes = document.createElement("s");
      antes.className = "precio-anterior";
      antes.textContent = precio(p.precio);
      precios.appendChild(antes);
    }
    const actual = document.createElement("span");
    actual.className = "precio";
    actual.textContent = precio(precioFinal(p)) + " MXN";
    precios.appendChild(actual);
    info.appendChild(precios);

    const stock = document.createElement("p");
    stock.className = "stock" + (agotado ? " stock-agotado" : "");
    stock.textContent = agotado ? "Agotado" : "Disponibles: " + p.cantidad;
    info.appendChild(stock);

    const mensaje =
      "Hola, quiero más información sobre la gorra " + p.nombre +
      " con precio de " + precio(precioFinal(p));

    if (agotado) {
      const btn = document.createElement("button");
      btn.className = "btn btn-pedir";
      btn.type = "button";
      btn.disabled = true;
      btn.textContent = "Agotado";
      info.appendChild(btn);
    } else {
      const a = document.createElement("a");
      a.className = "btn btn-pedir";
      a.href = enlaceWhatsApp(mensaje);
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = "Pedir";
      info.appendChild(a);
    }

    art.appendChild(info);
    return art;
  }

  function render() {
    const ofertas = PRODUCTOS.filter((p) => p.oferta && p.precioOferta > 0);
    const contOfertas = document.getElementById("ofertas");
    const contCatalogo = document.getElementById("catalogo");

    if (ofertas.length) {
      document.getElementById("seccion-ofertas").hidden = false;
      ofertas.forEach((p) => contOfertas.appendChild(crearTarjeta(p)));
    }
    PRODUCTOS.forEach((p) => contCatalogo.appendChild(crearTarjeta(p)));
  }

  // ---- Aviso flotante ----
  let temporizador;
  function aviso(texto) {
    const el = document.getElementById("aviso");
    el.textContent = texto;
    el.classList.add("visible");
    clearTimeout(temporizador);
    temporizador = setTimeout(() => el.classList.remove("visible"), 2500);
  }

  // ---- Compartir ----
  async function copiar(texto) {
    try {
      await navigator.clipboard.writeText(texto);
      return true;
    } catch (e) {
      const t = document.createElement("textarea");
      t.value = texto;
      t.setAttribute("readonly", "");
      t.style.position = "fixed";
      t.style.opacity = "0";
      document.body.appendChild(t);
      t.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (_) {}
      document.body.removeChild(t);
      return ok;
    }
  }

  async function compartir() {
    const url = location.href.split("#")[0];
    if (navigator.share) {
      try {
        await navigator.share({
          title: "FOR THE CLOUT · Catálogo de gorras",
          text: "Checa el catálogo de gorras FOR THE CLOUT",
          url
        });
        return;
      } catch (e) {
        if (e && e.name === "AbortError") return; // el usuario canceló
      }
    }
    aviso((await copiar(url)) ? "Enlace copiado" : "No se pudo copiar el enlace");
  }

  // ---- Pie de página ----
  function pie() {
    const a = document.getElementById("pie-whatsapp");
    const n = numeroLimpio;
    a.textContent = "+52 " + n.slice(0, 3) + " " + n.slice(3, 6) + " " + n.slice(6);
    a.href = enlaceWhatsApp("Hola, vi el catálogo de FOR THE CLOUT");
    document.getElementById("anio").textContent = new Date().getFullYear();
  }

  document.getElementById("compartir").addEventListener("click", compartir);

  fetch("data/productos.json", { cache: "no-cache" })
    .then((r) => r.json())
    .then((datos) => {
      numeroLimpio = String(datos.whatsapp).replace(/\D/g, "").slice(-10);
      PRODUCTOS = datos.productos || [];
      render();
      pie();
    });
})();
