
<script>
import CardVue from './Card.vue';
export default {
    components: {
        CardVue,
    }
    
}
</script>

<template>
    <div className="flex justify-center lg:mt-40 md:-mt-15">
        <div className="">
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-6 xl:gap-20 lg:gap-x-8">
                <CardVue/>
                <CardVue/>
                <CardVue/>
                <CardVue/>
                <CardVue/>
                <CardVue/>
                <CardVue/>
                <CardVue/>
             </div>
        </div>
   </div>
   
</template>
