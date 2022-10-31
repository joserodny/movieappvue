
<script>
import "@lottiefiles/lottie-player";


import axios from 'axios'

    const api_key = import.meta.env.VITE_API_KEY;
    const api_url = import.meta.env.VITE_BASE_URL; 
    const url = `${api_url}/movie/top_rated?api_key=${api_key}&language=en-US`;


export default {
    data: function () {
        return {
            movies: []
        };
    },

    async mounted() {
        try {
            const response = await axios.get(url);
            this.movies = response.data.results;
        } catch (error) {
            console.log (error);
        }
    },

    computed: {
        postTest() {
            return "http://image.tmdb.org/t/p/original/"
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('#slider');
    setTimeout(function moveSlide() {
        const max = slider.scrollWidth - slider.clientWidth;
        const left = slider.clientWidth;

        if (max === slider.scrollLeft) {
            slider.scrollTo({left: 0, behavior: 'smooth'})
        } else {
            slider.scrollBy({left, behavior: 'smooth'})
        }

        setTimeout(moveSlide, 2000)
    }, 2000)

})

</script>

<template>
    <div class="flex xs:h-[20rem] md:h-[20rem] md:w-[40rem] lg:h-[30rem] lg:w-[80rem] lg:ml-[20rem] lg:mt-[5rem] md:mt-[2rem] md:ml-[10rem] overflow-hidden  flex-nowrap text-center" id="slider">
        <div class="relative space-y-4 flex-none w-full flex flex-col items-center justify-center" :key="movie.id" v-for="movie in movies">
            <div class="absolute z-10">
                <a :href="movie.id">
                    <div class="z-10 flex justify-center">
                        <lottie-player src="https://lottie.host/47ad623a-ec26-44bd-8de9-132ede1970db/4aiDCZ9HCF.json"  background="transparent"  speed="1"  style="width: 200px; height: 200px;"  loop  autoplay></lottie-player>
                    </div>
                </a>
                <div class="">
                    <h1
                    class="relative z-20 text-3xl font-extrabold leading-none text-white xl:text-6xl sm:text-center lg:text-left">
                    {{ movie.title }}</h1>
                </div> 
            </div>
            <img class="relative" :src="postTest+movie.backdrop_path" />
        </div>
    </div>
</template>

