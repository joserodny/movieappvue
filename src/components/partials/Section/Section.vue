
<script>
import Card from './Card.vue';
import Slider from './Slider.vue'


export default {
    components: {
        Card,
        Slider,
    },
}
</script>

<template>
   <Slider/>
    <div className="flex justify-center lg:mt-40 md:-mt-15">
        <div className="">
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-6 xl:gap-20 lg:gap-x-8">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
             </div>
        </div>
   </div>
   
</template>
