# FOR THE CLOUT · Catálogo de gorras

Catálogo web para vender gorras por WhatsApp. Es HTML, CSS y JavaScript puros: no necesita servidor, base de datos ni instalar nada.

## Archivos

```
for-the-clout/
├── index.html      ← estructura de la página (no hace falta tocarla)
├── styles.css      ← diseño y colores de la marca
├── app.js          ← lógica: tarjetas, botón Pedir, compartir
├── productos.js    ← ★ TUS GORRAS: nombres, precios, fotos, ofertas, existencias y número de WhatsApp
└── img/            ← fotos de las gorras y logo.png
```

---

## 1. Abrir el sitio en tu computadora

**Opción rápida:** abre la carpeta `for-the-clout` y da doble clic en `index.html`. Se abre en tu navegador.

**Opción recomendada (para que funcione igual que publicado):** desde una terminal dentro de la carpeta, ejecuta uno de estos comandos y entra a http://localhost:8000

```bash
python3 -m http.server 8000
# o, si tienes Node.js:
npx serve -l 8000
```

**Probarlo en tu celular:** con el servidor anterior encendido y el celular en la misma red Wi‑Fi, entra desde el celular a `http://IP-DE-TU-COMPUTADORA:8000`. Aun así, lo más fácil es publicarlo (paso 2) y abrir el enlace en el teléfono.

> Nota: el botón "Compartir" usa el menú nativo del celular. En computadora normalmente copia el enlace y muestra "Enlace copiado".

---

## 2. Publicarlo gratis y obtener un enlace

### Opción A · Netlify (la más fácil, sin cuentas técnicas)

1. Entra a https://app.netlify.com/drop
2. Arrastra la carpeta `for-the-clout` completa a la página.
3. En segundos te da un enlace tipo `https://nombre-aleatorio.netlify.app`.
4. Crea una cuenta gratis para que el sitio no se borre y para cambiar el nombre en **Site configuration → Change site name** (ej. `forthecloutgorras.netlify.app`).
5. **Para actualizar** precios o fotos: en tu sitio de Netlify ve a **Deploys** y arrastra otra vez la carpeta.

### Opción B · GitHub Pages

1. Crea una cuenta en https://github.com y un repositorio nuevo **público** (ej. `catalogo`).
2. En el repositorio: **Add file → Upload files**, arrastra todo el contenido de la carpeta (incluyendo la carpeta `img`) y da **Commit changes**.
3. Ve a **Settings → Pages**. En *Source* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)` y **Save**.
4. En 1–2 minutos tu catálogo estará en `https://TU-USUARIO.github.io/catalogo/`.
5. **Para actualizar:** sube de nuevo el archivo cambiado (por ejemplo `productos.js`) con *Upload files*, o edítalo directo en GitHub con el ícono del lápiz.

> Después de actualizar, si en el celular sigues viendo lo anterior, recarga la página o espera unos minutos.

---

## 3. Cambiar precios, existencias y ofertas

Todo está en **`productos.js`**. Ábrelo con cualquier editor de texto (Bloc de notas, VS Code…). Cada gorra se ve así:

```js
{
  nombre: "Nube Dorada",          // modelo
  precio: 500,                    // precio normal (solo número)
  foto: "img/gorra-nube-dorada.webp",
  oferta: true,                   // true = en oferta, false = sin oferta
  precioOferta: 420,              // precio con descuento
  cantidad: 5                     // 0 = "Agotado"
},
```

- **Cambiar precio:** modifica `precio` (sin `$` ni comas).
- **Poner en oferta:** `oferta: true` y escribe `precioOferta`. Aparecerá en la sección *Ofertas* con el precio anterior tachado.
- **Quitar la oferta:** `oferta: false`.
- **Existencias:** cambia `cantidad`. Con `0` se muestra **Agotado** y el botón se desactiva.
- **Agregar una gorra:** copia un bloque `{ ... },` completo, pégalo dentro de los corchetes `[ ]` y cambia los datos.
- **Quitar una gorra:** borra su bloque `{ ... },` completo.

⚠️ Cuida las comas: cada bloque `}` va seguido de una coma, excepto (opcionalmente) el último. Los textos van entre comillas `" "`. Si la página sale vacía, casi siempre es una coma o comilla faltante.

### Número de WhatsApp

Al inicio de `productos.js`:

```js
const WHATSAPP = "7491059339";
```

Escribe tus 10 dígitos sin `+52` ni espacios. El catálogo arma solo los enlaces `https://wa.me/527491059339?text=...`.

---

## 4. Cambiar fotos

1. Toma la foto de la gorra con fondo limpio (de preferencia oscuro) y **cuadrada**; si no es cuadrada se recorta al centro.
2. Reduce el tamaño a **máximo 800 px de ancho** y guárdala como **WebP** o **JPG** comprimido (idealmente menos de 100 KB). Herramienta gratis en el navegador: https://squoosh.app (elige *WebP*, calidad 70–75, *Resize* a 800).
3. Guárdala en la carpeta `img/` con un nombre sin espacios ni acentos, ej. `gorra-trueno.webp`.
4. En `productos.js` pon esa ruta: `foto: "img/gorra-trueno.webp"`.
5. Puedes borrar las fotos de ejemplo (`gorra-nube-dorada.webp`, `gorra-ola-morada.webp`, `gorra-eclipse.webp`) cuando ya no las uses.

## 5. Cambiar el logo

Reemplaza `img/logo.png` por tu logo con **el mismo nombre**. Recomendado: PNG con fondo transparente, unos 1000–1200 px de ancho. Se muestra centrado y sin deformarse, sea horizontal o cuadrado.

> Recomendado: recorta el espacio vacío alrededor del logo para que se vea más grande.

## 6. Colores y tipografía

En `styles.css`, al inicio (`:root`), están los colores de la marca:

```css
--morado: #6A2FD6;
--dorado: #C9A24A;
```

La tipografía es **Chakra Petch** (Google Fonts), de estilo angular. Si quieres otra, cambia el enlace en `index.html` y la variable `--fuente` en `styles.css`.
