import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL || 'https://api.themoviedb.org/3';

export const imageUrl = (path, size = 'w500') =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : 'https://via.placeholder.com/500x750?text=No+poster';

const request = (path, params = {}) => {
  if (!apiKey) return Promise.reject(new Error('TMDB API key is missing. Add VITE_API_KEY to your .env file.'));
  return axios.get(`${baseUrl}${path}`, { params: { api_key: apiKey, language: 'en-US', ...params } });
};

export const getPopularMovies = () => request('/discover/movie', { sort_by: 'popularity.desc' });
export const getUpcomingMovies = () => request('/movie/upcoming');
export const searchMovies = (query) => request('/search/movie', { query, include_adult: false });
export const getMovie = (id) => request(`/movie/${id}`, { append_to_response: 'credits,videos,images' });
