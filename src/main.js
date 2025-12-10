import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  timeout: 2000,
  position: 'topRight',
  progressBar: false,
});

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const searchFormEl = document.querySelector('.js-search-form');

const onSearchFormSubmit = function (event) {
  event.preventDefault();

  const form = event.currentTarget;
  const searchedQuery = form.elements['search-text'].value.trim();

  if (searchedQuery === '') {
    iziToast.warning({
      message: 'Please enter a search query.',
    });

    return;
  }

  clearGallery();

  showLoader();

  getImagesByQuery(searchedQuery)
    .then(function (data) {
      if (!data.hits || data.hits.length === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });

        return;
      }

      createGallery(data.hits);
    })
    .catch(function () {
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
      });
    })
    .finally(function () {
      hideLoader();
      form.reset();
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
