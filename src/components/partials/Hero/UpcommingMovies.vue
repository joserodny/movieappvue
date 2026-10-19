<script>
import { getUpcomingMovies, imageUrl } from '../../../services/tmdb';

export default {
  data() { return { upcommingMovies: [], loading: false, error: '' }; },
  async mounted() {
    this.loading = true;
    try { this.upcommingMovies = (await getUpcomingMovies()).data.results; }
    catch (error) { this.error = error.message || 'Unable to load upcoming movies.'; }
    finally { this.loading = false; }
  },
  methods: { imageUrl },
};
</script>

<template>
  <section class="px-5 sm:px-10 lg:w-[48rem] lg:px-0">
    <h2 class="mb-4 text-xl font-bold text-white">Coming soon</h2>
    <p v-if="loading" class="text-gray-300">Loading upcoming movies…</p>
    <p v-else-if="error" class="text-red-300">{{ error }}</p>
    <div v-else class="flex gap-4 overflow-x-auto pb-4">
      <router-link v-for="movie in upcommingMovies.slice(0, 6)" :key="movie.id" :to="`/movies/${movie.id}`" class="w-28 shrink-0">
        <img :src="imageUrl(movie.poster_path, 'w342')" :alt="movie.title" class="h-40 w-28 rounded object-cover" />
        <p class="mt-2 truncate text-sm text-white">{{ movie.title }}</p>
      </router-link>
    </div>
  </section>
</template>
