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
    data() { return { searchQuery: '' }; },
    methods: { updateSearch(query) { this.searchQuery = query; } },
};
</script>


<template>
    <Navbar/>
    <Hero @search="updateSearch" />
    <br/>
    <Section :query="searchQuery" />
</template>
