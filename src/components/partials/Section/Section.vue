<script>
import Card from './Card.vue';
import { getPopularMovies, searchMovies } from '../../../services/tmdb';

export default {
  components: { Card },
  props: { query: { type: String, default: '' } },
  data() { return { popularMovie: [], loading: true, error: '' }; },
  watch: { query: 'loadMovies' },
  mounted() { this.loadMovies(); },
  methods: {
    async loadMovies() {
      this.loading = true; this.error = '';
      try {
        const response = this.query.trim() ? await searchMovies(this.query.trim()) : await getPopularMovies();
        this.popularMovie = response.data.results;
      } catch (error) { this.error = error.message || 'Unable to load movies.'; }
      finally { this.loading = false; }
    },
  },
};
</script>

<template>
  <div id="popular" class="flex xl:ml-[5rem] xl:mt-[5rem]">
    <div class="w-full px-4 md:w-[40rem] md:ml-40 lg:w-[50rem] lg:ml-[9rem] lg:mt-10 xl:w-auto xl:mr-40">
      <h2 class="mb-5 text-2xl font-bold text-white">{{ query ? `Search results for “${query}”` : 'Popular movies' }}</h2>
      <p v-if="loading" class="py-10 text-center text-white">Loading movies…</p>
      <p v-else-if="error" class="py-10 text-center text-red-300">{{ error }}</p>
      <p v-else-if="!popularMovie.length" class="py-10 text-center text-white">No movies found.</p>
      <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-2 lg:gap-x-8">
        <Card v-for="popmovie in popularMovie" :key="popmovie.id" :popmovie="popmovie" />
      </div>
    </div>
  </div>
</template>
