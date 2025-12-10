import axios from 'axios';

const API_KEY = '53617461-9e512d52b7eb3a5977460a0f4';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const response = await axios.get('', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: PER_PAGE,
      page,
    },
  });

  return response.data;
}

export { PER_PAGE };
