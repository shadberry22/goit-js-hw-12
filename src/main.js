import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  timeout: 2000,
  position: 'topRight',
  progressBar: false,
});

import { getImagesByQuery, PER_PAGE } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const searchFormEl = document.querySelector('.js-search-form');
const loadMoreBtnEl = document.querySelector('.js-load-more');

let searchQuery = '';
let currentPage = 1;

const onSearchFormSubmit = async event => {
  event.preventDefault();

  const form = event.currentTarget;
  const query = form.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.warning({
      message: 'Please enter a search query.',
    });

    return;
  }

  searchQuery = query;
  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery, currentPage);

    if (!data.hits || data.hits.length === 0) {
      iziToast.info({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });

      return;
    }

    createGallery(data.hits);

    const totalPages = Math.ceil(data.totalHits / PER_PAGE);

    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoader();
    form.reset();
  }
};

const onLoadMoreClick = async () => {
  currentPage += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery, currentPage);

    if (!data.hits || data.hits.length === 0) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });

      return;
    }

    createGallery(data.hits);

    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
      const { height: cardHeight } = galleryItems[0].getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    const totalPages = Math.ceil(data.totalHits / PER_PAGE);

    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoader();
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreClick);
