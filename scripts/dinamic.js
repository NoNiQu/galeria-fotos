// Obtener el contenedor donde se mostrará la galería
const galleryContainer = document.getElementById("gallery");

// Configuración de las imágenes
const universos = [
  {
    id: 0,
    name: "universo0",
    description: "Universo vacío"
  },
  {
    id: 1,
    name: "universo1",
    description: "Universo gatuno"
  },
  {
    id: 2,
    name: "universo2",
    description: "Universo de la nada"
  },
  {
    id: 3,
    name: "universo3",
    description: "Universo del taco"
  },
  {
    id: 4,
    name: "universo4",
    description: "Universo de Cerveza"
  },
  {
    id: 5,
    name: "universo5",
    description: "Universo Eyeliner"
  },
  {
    id: 6, 
    name: "universo6",
    description: "Universo Cuñado"
  },
  {
    id: 7,
    name: "universo7",
    description: "Universo Indiferente"
  },
  {
    id: 8,
    name: "universo8",
    description: "Universo Cachondo"
  }
];

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
