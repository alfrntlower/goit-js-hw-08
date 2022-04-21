// Add imports above this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMorkup = createGalleryMorkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMorkup)

function createGalleryMorkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        
        return `<div class="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`
    }).join(' ');
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
