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
        }
    }
}
</script>


<template>
  
      <!-- Item 1 -->
      <div class="flex flex-col gap-1">
        <!-- Image -->
        <a href="" class="bg-purple-500">
          <img :src="postPath+popmovie.poster_path" class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100" />
        </a>
      </div>
</template>



