import { reactive } from 'vue';

const storageKey = 'movieappvue:favorites';

function loadFavorites() {
  try { return JSON.parse(localStorage.getItem(storageKey) || '[]'); }
  catch { return []; }
}

const state = reactive({ movies: loadFavorites() });

function save() { localStorage.setItem(storageKey, JSON.stringify(state.movies)); }

export function isFavorite(id) { return state.movies.some((movie) => movie.id === id); }

export function toggleFavorite(movie) {
  state.movies = isFavorite(movie.id)
    ? state.movies.filter((item) => item.id !== movie.id)
    : [...state.movies, movie];
  save();
}

export function useFavorites() {
  return { state, isFavorite, toggleFavorite };
}
