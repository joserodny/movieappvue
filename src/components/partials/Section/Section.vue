
<script>
import axios from 'axios'
import Card from './Card.vue';

    const api_key = import.meta.env.VITE_API_KEY;
    const api_url = import.meta.env.VITE_BASE_URL; 
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=e26978b639a2dc2e25c28cc4106a34fa&language=en-US&sort_by=popularity.desc&include_video=true`;

export default {
    components: {
        Card,
    },


    data() {
        return {
            popularMovie: []
        }
    },

    async mounted() {
        try {
            const response = await axios.get(url);
            this.popularMovie = response.data.results;
        }catch (error) {
            console.log (error);
        }
    },
}
</script>

<template>
    <div className="flex xl:ml-[5rem] xl:mt-[5rem] ">
        <div className="md:w-[40rem] md:ml-40 lg:w-[50rem] lg:ml-[9rem] lg:mt-10 xl:w-auto xl:mr-40">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-6 xl:gap-2 lg:gap-x-8">
                <Card :key="popmovie.id" v-for="popmovie in popularMovie" :popmovie="popmovie" />
            </div>
        </div>
    </div> 
</template>
