import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Gallery markup
const imageGallery = document.querySelector(".gallery");
let markup = "";

galleryItems.forEach((galleryItem) => {
  let galleryElement = document.createElement("div");
  let galleryLink = document.createElement("a");
  let galleryImage = document.createElement("img");

  galleryElement.classList.add("gallery__item");
  galleryLink.classList.add("gallery__link");
  galleryImage.classList.add("gallery__image");

  galleryLink.setAttribute("href", galleryItem.original);
  galleryImage.setAttribute("src", galleryItem.preview);
  galleryImage.setAttribute("data-source", galleryItem.original);
  galleryImage.setAttribute("alt", galleryItem.description);

  markup += `<${galleryElement.localName} class="${galleryElement.className}"><${galleryLink.localName} class="${galleryLink.className}" href="${galleryLink.href}"><${galleryImage.localName} class="${galleryImage.className}" src="${galleryImage.src}" alt="${galleryImage.alt}" data-source="${galleryImage.dataset.source}"/></${galleryLink.localName}></${galleryElement.localName}>`;
});
imageGallery.insertAdjacentHTML("afterbegin", markup);

// Event listener on div.gallery and modal window of basicLightbox

const handleBasicLightBox = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1140" height="744"/>
`);
  instance.show();

  // Modal window is closed on Esc key down

  const handleEscapeClose = (event) => {
    if (event.key !== "Escape") {
      return;
    }
    instance.close();
  };

  document.addEventListener("keydown", handleEscapeClose);
  document.removeEventListener("keyup", handleEscapeClose);
};

imageGallery.addEventListener("click", handleBasicLightBox);

// console.log(galleryItems);
