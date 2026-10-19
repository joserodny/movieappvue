<script>
import MovieDetails from '../partials/Section/MovieDetails.vue';
import CastCard from '../partials/Section/CastCard.vue';
import Navbar from '@/components/partials/Header/Navbar.vue';
import { getMovie } from '../../services/tmdb';
    
export default {
    
    components: {
        Navbar,
        MovieDetails,
        CastCard
    },
    
    data() {
        return {
            movie: {}, loading: true, error: ''
        }
    },

    mounted() {
        this.fetchMovieDetails(this.$route.params.id);
    },

    methods: {
        async fetchMovieDetails(movieId) {
            this.loading = true;
            try { this.movie = (await getMovie(movieId)).data; }
            catch (error) { this.error = error.message || 'Unable to load movie details.'; }
            finally { this.loading = false; }
        },  
    }
};
</script>
<template>
    <Navbar/>
    <p v-if="loading" class="py-20 text-center text-white">Loading movie…</p>
    <p v-else-if="error" class="py-20 text-center text-red-300">{{ error }}</p>
    <div class="container xs:ml-[2.5rem] sm:ml-[2.5rem] md:ml-[10rem] md:mt-[4rem] lg:ml-[10rem] lg:mt-[5rem] xl:ml-[13rem] xl:mt-[1rem]">
        <MovieDetails v-if="!loading && !error" :movie="movie" />
    
        <div class="flex justify-center">
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 mb-5">
                <template v-if="movie.credits?.cast">
                    <CastCard  :casts="movie.credits.cast" />
                </template>
            </div>   
        </div>
    </div>
</template>


