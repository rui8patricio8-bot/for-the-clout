/* =========================================================
   FOR THE CLOUT · DATOS DEL CATÁLOGO
   ---------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para cambiar
   gorras, precios, ofertas y existencias.

   Campos de cada gorra:
     nombre       → Modelo que verá el cliente.
     precio       → Precio normal en MXN (solo número, sin $ ni comas).
     foto         → Ruta de la foto dentro de la carpeta img/.
     oferta       → true si está en oferta, false si no.
     precioOferta → Precio con descuento (solo se usa si oferta es true).
     cantidad     → Piezas disponibles. Si es 0 se muestra "Agotado".

   ➕ AGREGAR UNA GORRA: copia un bloque { ... }, pégalo antes del
      corchete final ] y cambia sus datos. Cada bloque va separado
      por una coma. Ejemplo:

      {
        nombre: "Gorra Trueno",
        precio: 500,
        foto: "img/gorra-trueno.webp",
        oferta: false,
        precioOferta: 0,
        cantidad: 4
      },

   ➖ QUITAR UNA GORRA: borra su bloque completo { ... } y su coma.
   ========================================================= */

// Tu número de WhatsApp (10 dígitos, sin +52, sin espacios).
const WHATSAPP = "7491059339";

const PRODUCTOS = [
  {
    nombre: "Barbas Hats World Tour",
    precio: 550,
    foto: "img/gorra-barbas-world-tour.webp",
    oferta: true,
    precioOferta: 500,
    cantidad: 2
  },
  {
    nombre: "LA LA LA MESH WHITE/PINK",
    precio: 550,
    foto: "img/gorra-la-la-la-mesh-white-pink.webp",
    oferta: true,
    precioOferta: 500,
    cantidad: 2
  },
  {
    nombre: "Bigg Boss San Judas Verde",
    precio: 550,
    foto: "img/gorra-bigg-boss-san-judas-verde.webp",
    oferta: true,
    precioOferta: 500,
    cantidad: 2
  },
  {
    nombre: "Gorras Chava Hats Diablo Y Fantasma",
    precio: 550,
    foto: "img/gorra-chava-hats-diablo-y-fantasma.webp",
    oferta: true,
    precioOferta: 500,
    cantidad: 1
  },
  {
    nombre: "All Star",
    precio: 550,
    foto: "img/gorra-all-star.webp",
    oferta: true,
    precioOferta: 500,
    cantidad: 1
  },
  {
    nombre: "Rich Life Black",
    precio: 550,
    foto: "img/gorra-rich-life-black.webp",
    oferta: true,
    precioOferta: 500,
    cantidad: 1
  },
  {
    nombre: "B Skull",
    precio: 550,
    foto: "img/gorra-b-skull.webp",
    oferta: true,
    precioOferta: 500,
    cantidad: 1
  },
  {
    nombre: "Dandy x Junior H Sad Boyz 2.0 (Y LLoro)",
    precio: 550,
    foto: "img/gorra-sad-boyz-2-0.webp",
    oferta: true,
    precioOferta: 500,
    cantidad: 1
  },
  {
    nombre: "Dandy X Sad Boyz II Clave Ali II",
    precio: 550,
    foto: "img/gorra-clave-ali-ii.webp",
    oferta: true,
    precioOferta: 500,
    cantidad: 1
  },
  {
    nombre: "Rude Awakenings Calvary Negro Y Blanco",
    precio: 550,
    foto: "img/gorra-rude-awakenings-calvary.webp",
    oferta: true,
    precioOferta: 500,
    cantidad: 1
  },
  {
    nombre: "31 Hats And Still",
    precio: 550,
    foto: "img/gorra-31-hats-and-still.webp",
    oferta: true,
    precioOferta: 500,
    cantidad: 1
  },
  {
    nombre: "ThirtyOne - Universo Mago",
    precio: 550,
    foto: "img/gorra-universo-mago.webp",
    oferta: true,
    precioOferta: 500,
    cantidad: 1
  },
  {
    nombre: "Ultima Cena",
    precio: 550,
    foto: "img/gorra-ultima-cena.webp",
    oferta: true,
    precioOferta: 500,
    cantidad: 1
  },
  {
    nombre: "AB Ny Thorned 24k",
    precio: 550,
    foto: "img/gorra-ab-ny-thorned-24k.webp",
    oferta: true,
    precioOferta: 500,
    cantidad: 1
  },
  {
    nombre: "El Boo 2 Chucky Hats",
    precio: 550,
    foto: "img/gorra-el-boo-2-chucky-hats.webp",
    oferta: true,
    precioOferta: 500,
    cantidad: 1
  },
  {
    nombre: "Jc Hats x Dandy Hats",
    precio: 550,
    foto: "img/gorra-jc-hats-x-dandy-hats.webp",
    oferta: true,
    precioOferta: 500,
    cantidad: 1
  },
  {
    nombre: "Canelo WBC BLK",
    precio: 550,
    foto: "img/gorra-canelo-wbc-blk.webp",
    oferta: true,
    precioOferta: 500,
    cantidad: 1
  }
];
