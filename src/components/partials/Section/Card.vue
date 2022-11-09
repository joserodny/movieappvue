<script>
export default {
  props: {
    popmovie: {
      required: true,
    }
  },
  computed: {
      postPath() {
            return "http://image.tmdb.org/t/p/original/"
        },

      moviepath() {
          return "/movies/"
      }  
    }
}
</script>


<template>
      <!-- Item 1 -->
      <div class="flex flex-col gap-1">
        <!-- Image -->
        <router-link :to="`/movies/${popmovie.id}`" class="bg-purple-500">
          <img :src="postPath+popmovie.poster_path" class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100" />
        </router-link>
      </div>
</template>



