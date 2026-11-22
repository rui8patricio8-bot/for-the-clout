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
    nombre: "Nube Dorada",
    precio: 500,
    foto: "img/gorra-nube-dorada.webp",
    oferta: true,
    precioOferta: 420,
    cantidad: 5
  },
  {
    nombre: "Ola Morada",
    precio: 500,
    foto: "img/gorra-ola-morada.webp",
    oferta: false,
    precioOferta: 0,
    cantidad: 2
  },
  {
    nombre: "Eclipse",
    precio: 500,
    foto: "img/gorra-eclipse.webp",
    oferta: false,
    precioOferta: 0,
    cantidad: 0
  }
];
