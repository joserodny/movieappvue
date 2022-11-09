<script>
import Navbar from '@/components/partials/header/Navbar.vue';
import MovieDetails from '../partials/Section/MovieDetails.vue';
import CastCard from '../partials/Section/CastCard.vue'
import axios from 'axios'

    const api_key = import.meta.env.VITE_API_KEY;
    const api_url = import.meta.env.VITE_BASE_URL; 
    
export default {
    
    components: {
        Navbar,
        MovieDetails,
        CastCard
    },
    
    data() {
        return {
            movie: []
        }
    },

    mounted() {
        this.fetchMovieDetails(this.$route.params.id);
    },

    methods: {
        async fetchMovieDetails(movieId) {
            const response = await axios.get(
            api_url+ "/movie/"+ movieId + "?api_key=" + api_key + "&append_to_response=credits,videos,images"
            );
            this.movie = response.data;
        },

        
    }
};
</script>
<template>
    <Navbar/>
    <div class="container sm:ml-[2.5rem] md:ml-[10rem] md:mt-[4rem] lg:ml-[10rem] lg:mt-[5rem] xl:ml-[13rem] xl:mt-[10rem]">
        <MovieDetails :movie="movie" />
        <div class="flex justify-center">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 mb-5">
            <template v-if="movie.credits?.cast">
                <CastCard  :casts="movie.credits.cast" />
            </template>
        </div>   
          
        </div>
    </div>
</template>


