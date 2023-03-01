import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageGallery = document.querySelector(".gallery");
// imageGallery.classList.add("list");
let markup = "";

galleryItems.forEach((galleryItem) => {
  //   image.width = 1260;
  //   image.height = 750;

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

  console.log(galleryElement);
  console.log(galleryLink);
  console.log(galleryImage);

  markup += `<${galleryElement.localName} class="${galleryElement.className}"><${galleryLink.localName} class="${galleryLink.className}" href="${galleryLink.href}"><${galleryImage.localName} class="${galleryImage.className}" src="${galleryImage.src}" alt="${galleryImage.alt}" data-source="${galleryImage.dataset.source}"/></${galleryLink.localName}></${galleryElement.localName}>`;
});
imageGallery.insertAdjacentHTML("afterbegin", markup);

// console.log(galleryItems);
