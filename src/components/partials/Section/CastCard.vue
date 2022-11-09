<script>
export default {
    props: {
        casts:{
            required: true,
        },
    },
    methods:{
        castProfileImage(casting) {
            if(casting.profile_path){
                return "http://image.tmdb.org/t/p/original/" + casting.profile_path;
            } else {
                return "https://via.placeholder.com/340x500";
            }
            
        }
    }
}
</script>

<style>

</style>
<template>

    <div :key="casting.id" v-for="casting in casts">
    <div class="group 
        overflow-hidden
        relative shadow-lg max-w-xs">

            <img class="block group-hover:opacity-40 transition-opacity duration-700"
                :src="castProfileImage(casting)" />
            <div class="absolute  bg-gradient-to-br duration-700 from-green-800 to-blue-800 text-white block left-0 right-0 top-full text-base h-1/2 w-full opacity-50 
        transition-all group-hover:top-1/2 group-hover:opacity-100">
                <div class="py-4 text-xs px-7">
                    <div class="text-xl font-bold"></div>
                    <div class="overflow-ellipsis overflow-hidden whitespace-nowrap">
                        <span
                            class="uppercase text-gray-400 whitespace-nowrap text-xs md:text-sm">Name:</span>
                        <span class="whitespace-nowrap overflow-hidden overflow-ellipsis relative z-20">
                            {{casting.name}}
                        </span>
                    </div>
                    <div class="whitespace-nowrap overflow-hidden overflow-ellipsis relative z-20">
                        <span
                            class="uppercase text-gray-400 whitespace-nowrap text-xs md:text-sm">character:</span>
                        <span class="whitespace-nowrap overflow-hidden overflow-ellipsis relative z-20">
                           {{casting.character}}
                        </span>
                    </div>
                    <div class="whitespace-nowrap overflow-hidden overflow-ellipsis relative z-20">
                        <span class="uppercase text-gray-400 whitespace-nowrap text-xs md:text-sm">All
                            Reviews:</span>
                        <span class="whitespace-nowrap overflow-hidden overflow-ellipsis relative z-20">
                            <span class="text-gray-300">{{ casting.popularity }}</span>
                        </span>
                    </div>
                </div>
            </div>
    </div>
</div>
</template>