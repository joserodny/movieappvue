<script>
import Navbar from '@/components/partials/Header/Navbar.vue';
import Hero from '@/components/partials/Hero/Hero.vue';
import Section from '@/components/partials/Section/Section.vue';
export default {
    components: {
        Navbar,
        Hero,
        Section,
    },
};
</script>


<template>
    <Navbar/>
    <Hero/>
    <Section/>
</template>