import { BASE_URL, API_KEY } from '../config/api';

export const fetchTvShows = async (category) => {
  try {
    const response = await fetch(
      `${BASE_URL}/tv/${category}?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching TV shows:', error);
    return [];
  }
};
