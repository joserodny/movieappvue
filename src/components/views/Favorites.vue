<script>
import Navbar from '@/components/partials/Header/Navbar.vue';
import Card from '@/components/partials/Section/Card.vue';
import { useFavorites } from '../../composables/useFavorites';

export default {
  components: { Navbar, Card },
  setup() { return useFavorites(); },
};
</script>

<template>
  <Navbar />
  <main id="favorites" class="px-5 py-10 md:ml-24 md:px-10">
    <h1 class="mb-8 text-3xl font-bold text-white">My favorites</h1>
    <p v-if="!state.movies.length" class="text-gray-300">
      You have not added any favorites yet. Open a movie and tap the star to save it.
    </p>
    <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      <Card v-for="movie in state.movies" :key="movie.id" :popmovie="movie" />
    </div>
  </main>
</template>
