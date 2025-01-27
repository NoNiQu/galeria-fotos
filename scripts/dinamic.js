const galleryContainer = document.getElementById("gallery");

const universos = [
  { id: 0, name: "universo0", description: "Universo vacío" },
  { id: 1, name: "universo1", description: "Universo gatuno" },
  { id: 2, name: "universo2", description: "Universo de perros" },
  { id: 3, name: "universo3", description: "Universo del taco" },
  { id: 4, name: "universo4", description: "Universo de Cerveza" },
  { id: 5, name: "universo5", description: "Universo Eyeliner" },
  { id: 6, name: "universo6", description: "Universo Cuñado" },
  { id: 7, name: "universo8", description: "Universo Cachondo" },
];

renderGallery();

function renderGallery() {
  galleryContainer.innerHTML = "";

  universos.forEach((universo) => {
    galleryContainer.innerHTML += `
        <a href="img/${universo.name}-xlarge-1x.jpg" target="_blank" data-lightbox="gallery" data-title="${universo.description}">
            <picture class="foto position-relative">
              <source srcset="img/${universo.name}-small-1x.jpg, img/${universo.name}-small-2x.jpg 2x" media="(max-width: 640px)" />
              <source srcset="img/${universo.name}-medium-1x.jpg, img/${universo.name}-medium-2x.jpg 2x" media="(min-width: 0px)" />
              <source srcset="img/${universo.name}-large-1x.jpg, img/${universo.name}-large-2x.jpg 2x" />
              <source srcset="img/${universo.name}-xlarge-1x.jpg, img/${universo.name}-xlarge-2x.jpg 2x" />
              <img src="img/${universo.name}-small-1x.jpg" alt="${universo.description}" class="img-fluid m-3" />
              <div class="description">${universo.description}</div>
            </picture>
        </a>
        `;
  });
}
