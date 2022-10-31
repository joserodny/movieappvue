<script>
import Searchbar from './Searchbar.vue'
import UpcommingMovies from './UpcommingMovies.vue';
export default {
    components: {
        Searchbar,
        UpcommingMovies,
    },
}
</script>
<template>
    <div
        class="container lg:h-[20rem] lg:pl-40 lg:mt-20 md:ml-36 md:mt-24 sm:ml-10 content-center">
        <div
            class="container  z-20  flex-col  px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0 sm:block hidden">
            <h1
                class="relative z-20 text-5xl font-extrabold leading-none text-white xl:text-6xl sm:text-center lg:text-left">
                WHAT’S ON <span class="text-red-600">TODAY</span></h1><br />
            <p class="relative z-20 block mt-6 text-base text-white xl:text-xl sm:text-center lg:text-left">We've
                DISCOVER UNLIMITED MOVIES TV SHOWS, WEB SERIES ONLY ON VIDEOSPIRE
            </p> <br />
           
        </div>
        
        <div class=" sm:mt-10 mt-10 xl:w-[70rem] lg:w-[60rem] md:w-[40rem]">
            <Searchbar />
        </div>
       
    </div>
</template>