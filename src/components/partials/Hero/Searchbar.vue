<script>
import axios from 'axios'

    const api_key = import.meta.env.VITE_API_KEY;
    const api_url = import.meta.env.VITE_BASE_URL; 
    
export default {
    data() {
        return {
            searchResults: []
        } 
    },

    methods: {
        debounceSearch(event) {
            clearTimeout(this.debounce)
            this.debounce = setTimeout(() => {
                this.fetchSearch(event.target.value);
            }, 600)
        },
    },
    async fetchSearch(term) {
        try {
            const response = await axios.get("/search/"+term+"?api_key="+api_key);
            this.searchResults = response.data.results;
        } catch (e) {
            console.log(e);
        }
    },   
}
</script>

<template>
    <div className="place-content-center dw overflow-hidden z-0 rounded-full relative p-3 lg:w-[50rem]">
        <form role="form" className="relative flex z-50 bg-white rounded-full">
            <input type="text" placeholder="Search Movies"
                className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none" @input="debounceSearch" />
            <button
                className="bg-red-700 text-white rounded-full font-semibold px-8 py-4 hover:bg-red-400 focus:bg-red-600 focus:outline-none">
                <svg class="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
            </button>
        </form>
        <div className="glow glow-1 z-10 bg-red-900 absolute"></div>
        <div className="glow glow-2 z-20 bg-red-700 absolute"></div>
        <div className="glow glow-3 z-30 bg-stone-900 absolute"></div>
        <div className="glow glow-4 z-40 bg-red-600 absolute"></div>
    </div>

    <div v-if="false" class="absolute mt-5 ml-5 rounded bg-gray-700">
        <ul>
            <li class="flex border-b border-gray-500">
                <div class="grid grid-rows-3 grid-flow-col gap-2  sm:w-[37rem] sm:h-[10rem] md:w-[40rem] md:h-[8.8rem] lg:w-[50rem] lg:h-[8.8rem] xl:w-[50rem] xl:h-[8.8rem] ">
                        <div class=" row-span-3">
                            <img src="https://www.themoviedb.org/t/p/w94_and_h141_bestv2/acfLUO8E61u0ooWS6htbzTHDBcI.jpg" />
                        </div>
                        <div class="col-span-2 w-[20rem]">   <span class="text-2xl font-bold">Days of Being Wild</span> <br/>
                            <span class="font-light">Days of Being Wild</span></div>
                        <div class="row-span-2 col-span-2 text-ellipsis overflow-hidden"><br/>Yuddy, a Hong Kong playboy known for breaking girls' hearts, tries to find solace and the truth after discovering the woman who raised him isn't his mother.</div>
                    </div>
            </li>
          
            
        </ul>
    </div>
</template>
