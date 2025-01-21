const galleryContainer = document.getElementById("gallery");

const universos = [
    { id: 0, name: "universo0", description: "Universo vacío" },
    { id: 1, name: "universo1", description: "Universo gatuno" },
    { id: 2, name: "universo2", description: "Universo de la nada" },
    { id: 3, name: "universo3", description: "Universo del taco" },
    { id: 4, name: "universo4", description: "Universo de Cerveza" },
    { id: 5, name: "universo5", description: "Universo Eyeliner" },
    { id: 6, name: "universo6", description: "Universo Cuñado" },
    { id: 7, name: "universo7", description: "Universo Indiferente" },
    { id: 8, name: "universo8", description: "Universo Cachondo" }
];

const sizes = ["small", "medium", "large", "xlarge"];

generarGaleria();

function generarGaleria() {
  universos.forEach((universo) => {
      const colDiv = document.createElement("div");
      colDiv.className = "col-lg-4 col-md-6 col-sm-12 mb-4";

      const cardDiv = document.createElement("div");
      cardDiv.className = "card h-100";

      const picture = document.createElement("picture");
      sizes.forEach((size) => {
          const source = document.createElement("source");
          source.srcset = `img/${universo.name}-${size}-1x.jpg, img/${universo.name}-${size}-2x.jpg 2x`;
          if (size === "small") source.media = "(max-width: 320px)";
          if (size === "medium") source.media = "(max-width: 640px)";
          if (size === "large") source.media = "(max-width: 1280px)";
          if (size === "xlarge") source.media = "(min-width: 1920px)";
          picture.appendChild(source);
      });

      const imgElement = document.createElement("img");
      imgElement.src = `img/${universo.name}-xlarge-1x.jpg`;
      imgElement.alt = universo.description;
      imgElement.className = "card-img-top";
      imgElement.addEventListener("click", () => abrirModal(universo));

      picture.appendChild(imgElement);
      cardDiv.appendChild(picture);

      colDiv.appendChild(cardDiv);
      galleryContainer.appendChild(colDiv);
  });
}

function abrirModal(universo) {
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");

  modalImage.src = `img/${universo.name}-xlarge-2x.jpg`;
  modalImage.alt = universo.description;
  modalDescription.textContent = universo.description;

  modalDescription.classList.add("fw-semibold");

  const modal = new bootstrap.Modal(document.getElementById("imageModal"));
  modal.show();
}
