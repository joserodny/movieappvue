<script>
import { imageUrl } from '../../../services/tmdb';

export default {
  props: {
    popmovie: {
      required: true,
    }
  },
  methods: { imageUrl }
}
</script>


<template>
      <!-- Item 1 -->
      <div class="flex flex-col gap-1">
        <!-- Image -->
        <router-link :to="`/movies/${popmovie.id}`" class="bg-purple-500">
          <img :src="imageUrl(popmovie.poster_path)" :alt="popmovie.title" class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100" />
        </router-link>
      </div>
</template>



