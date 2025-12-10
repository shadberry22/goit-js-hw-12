import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.js-gallery');
const loaderElem = document.querySelector('.js-loader');

const lightbox = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markupGallery = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}"
          ><img class="gallery-image" src="${webformatURL}" alt="${tags}"
        /></a>
        <ul class="gallery-info">
          <li class="info-item">
            <p class="label">Likes</p>
            <p class="value">${likes}</p>
          </li>
          <li class="info-item">
            <p class="label">Views</p>
            <p class="value">${views}</p>
          </li>
          <li class="info-item">
            <p class="label">Comments</p>
            <p class="value">${comments}</p>
          </li>
          <li class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${downloads}</p>
          </li>
        </ul>
      </li>`;
      }
    )
    .join('');

  galleryContainer.innerHTML = markupGallery;
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loaderElem.classList.add('is-visible');
}

export function hideLoader() {
  loaderElem.classList.remove('is-visible');
}
