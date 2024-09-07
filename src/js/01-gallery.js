import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Selectăm elementul <ul> pentru galeria de imagini
const galleryList = document.querySelector('.gallery');

// Generăm markup-ul pentru fiecare imagine din array-ul galleryItems
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `;
  })
  .join('');

// Adăugăm markup-ul în HTML, în elementul <ul>
galleryList.innerHTML = galleryMarkup;

// Inițializăm SimpleLightbox pentru a face imaginile clickabile și pentru a le deschide în lightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',  // Setăm legenda să fie luată din atributul "alt" al imaginii
  captionDelay: 250,    // Setăm o întârziere de 250ms pentru afișarea legendei
});