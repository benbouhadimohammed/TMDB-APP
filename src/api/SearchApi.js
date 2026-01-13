import { BASE_URL, API_KEY } from '../config/api';

export const searchMovies = async (query) => {
  try {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const searchTv = async (query) => {
  try {
    const res = await fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}`);
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
};
