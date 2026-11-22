# Instrucciones para la IA que edite este proyecto

Catálogo web estático (HTML/CSS/JS puros, sin backend ni dependencias) de gorras de la marca FOR THE CLOUT. Los clientes lo ven desde el celular y piden por WhatsApp.

Publicado en: https://rui8patricio8-bot.github.io/for-the-clout/
(repositorio GitHub: rui8patricio8-bot/for-the-clout, rama main, GitHub Pages desde la raíz)

## Dónde va cada cosa
- `productos.js` → ÚNICO archivo de datos: número de WhatsApp (`WHATSAPP`, 10 dígitos sin +52) y arreglo `PRODUCTOS`.
  Campos: `nombre`, `precio` (número MXN), `foto` (ruta en `img/`), `oferta` (true/false), `precioOferta`, `cantidad` (0 = Agotado).
- `img/` → fotos de las gorras y `logo.png` (logo real de la marca, no reemplazar salvo que lo pidan).
- `app.js` → lógica (tarjetas, botón Pedir con enlace wa.me/52..., compartir). No debería necesitar cambios.
- `styles.css` → diseño. Colores: negro #000000, morado #6A2FD6, dorado #C9A24A. Fuente Chakra Petch.
- `index.html` → estructura. Las etiquetas `og:` usan la URL publicada; actualízalas si cambia el dominio.

## Tareas típicas
1. Reemplazar las 3 gorras de ejemplo (`gorra-nube-dorada.webp`, `gorra-ola-morada.webp`, `gorra-eclipse.webp`) por las reales y borrar esas fotos.
2. Fotos nuevas: cuadradas, máximo 800 px de ancho, WebP (calidad ~70–75) o JPG comprimido, idealmente < 100 KB, nombres sin espacios ni acentos.
3. Mantener `productos.js` como JavaScript válido (comas entre bloques, textos entre comillas).

## Reglas del dueño (no agregar)
- Sin filtros ni buscador.
- Sin carrito ni pedidos múltiples: cada pedido es una pieza, por WhatsApp.
- Sin cuentas, login ni panel de administración.
- Sin pagos en línea ni bases de datos.
- Textos de la interfaz en español (México).

## Probar
Abrir `index.html` con doble clic, o `python3 -m http.server 8000` y entrar a http://localhost:8000.
Ver `README.md` para publicar y actualizar.
