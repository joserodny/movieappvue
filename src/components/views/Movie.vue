<script>
import MovieDetails from '../partials/Section/MovieDetails.vue';
import CastCard from '../partials/Section/CastCard.vue';
import Navbar from '@/components/partials/Header/Navbar.vue';
import axios from 'axios'
    
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
            "https://api.themoviedb.org/3"+ "/movie/"+ movieId + "?api_key=" + "e26978b639a2dc2e25c28cc4106a34fa" + "&append_to_response=credits,videos,images"
            );
            this.movie = response.data;
        },  
    }
};
</script>
<template>
    <Navbar/>
    <div class="container xs:ml-[2.5rem] sm:ml-[2.5rem] md:ml-[10rem] md:mt-[4rem] lg:ml-[10rem] lg:mt-[5rem] xl:ml-[13rem] xl:mt-[1rem]">
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


