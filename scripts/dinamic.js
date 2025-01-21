// Obtener el contenedor donde se mostrará la galería
const galleryContainer = document.getElementById("gallery"); // Asegúrate de tener un div con id="gallery" en tu HTML

// Configuración de las imágenes
const universos = ["universo0", "universo1", "universo2", "universo3"]; // Agrega tantos nombres como universos tengas
const sizes = ["small", "medium", "large", "xlarge"];
const resolutions = ["1x", "2x"];

// Crear la galería
generarGaleria();

function generarGaleria() {
  universos.forEach((universo) => {
    sizes.forEach((size) => {
      resolutions.forEach((resolution) => {
        // Crear el nombre del archivo basado en la convención
        const fileName = `${universo}-${size}-${resolution}.jpg`;

        // Crear un elemento de imagen
        const imgElement = document.createElement("img");
        imgElement.src = `img/${fileName}`;
        imgElement.alt = `${universo} (${size}, ${resolution})`;
        imgElement.className = "gallery-image"; // Para aplicar estilos si lo deseas

        // Agregar la imagen al contenedor
        galleryContainer.appendChild(imgElement);
      });
    });
  });
}
