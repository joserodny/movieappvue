<script>
import UpcommingMovies from './UpcommingMovies.vue';
export default {
  components: { UpcommingMovies },
  emits: ['search'],
  data() { return { search: '', searchTimer: null }; },
  methods: {
    submitSearch() {
      clearTimeout(this.searchTimer);
      this.$emit('search', this.search.trim());
    },
    liveSearch() {
      clearTimeout(this.searchTimer);
      this.searchTimer = setTimeout(() => {
        this.$emit('search', this.search.trim());
      }, 400);
    },
  },
  beforeUnmount() { clearTimeout(this.searchTimer); },
}
</script>
<template>
    <div
        class="sm:mt-10 xl:pl-[11rem] lg:h-[20rem] lg:pl-30 md:mr-auto lg:mt-20 md:ml-36 md:mt-24 sm:ml-10 content-center">
        <div
            class="container z-20 flex-col px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0 sm:block hidden">
            <h1
                class="relative z-20 text-5xl font-extrabold leading-none text-white xl:text-6xl sm:text-center lg:text-left">
                WHAT’S ON <span class="text-red-600">TODAY</span></h1><br />
            <p class="relative z-20 block mt-6 text-base text-white xl:text-xl sm:text-center lg:text-left">Discover unlimited movies and TV shows on Videospire.
            </p>
            <form class="relative z-20 mt-5 flex max-w-xl gap-2" @submit.prevent="submitSearch">
                <input v-model="search" @input="liveSearch" aria-label="Search movies" placeholder="Search movies…" class="min-w-0 flex-1 rounded bg-white/90 px-4 py-3 text-base text-gray-900 outline-none" />
                <button type="submit" class="rounded bg-red-600 px-5 py-3 text-base font-bold text-white hover:bg-red-700">Search</button>
            </form>
        </div>
        
      <UpcommingMovies />
    </div>
</template>
