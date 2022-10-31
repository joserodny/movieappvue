<script>

import axios from 'axios'

    const api_key = import.meta.env.VITE_API_KEY;
    const api_url = import.meta.env.VITE_BASE_URL; 
    const url = `${api_url}/movie/upcoming?api_key=${api_key}&language=en-US`;

export default {
    components: {
       
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

