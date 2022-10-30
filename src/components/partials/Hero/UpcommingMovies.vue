<script>
import { Carousel3d, Slide } from 'vue3-carousel-3d'
import axios from 'axios'

    const api_key = import.meta.env.VITE_API_KEY;
    const api_url = import.meta.env.VITE_BASE_URL; 
    const url = `${api_url}/movie/upcoming?api_key=${api_key}&language=en-US`;

export default {
    components: {
        Carousel3d,
        Slide,
    },
    
    data() {
        return {
            upcommingMovies: [],
        }
    },

    async mounted() {
        await axios
        .get(url)
        .then((res) => {
            this.upcommingMovies = res.data.results;
        })
    },

}
</script>
<template>
    <!-- <div id="example">
        <ul>
            <li v-for="upcommingMovie in upcommingMovies" :key="upcommingMovie.id">
                    {{ upcommingMovie.id }}
            </li>
        </ul>
    </div> -->
    <div></div>
</template>

