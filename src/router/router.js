import { createWebHistory, createRouter } from "vue-router";
import Welcome from '@/components/views/Welcome.vue';
import Movie from '@/components/views/Movie.vue';
import Favorites from '@/components/views/Favorites.vue';

const routes = [{
        path: '/',
        name: "Home",
        component: Welcome,
    },
    {
        path: '/movies/:id',
        name: "Movie",
        component: Movie,
    },
    {
        path: '/favorites',
        name: "Favorites",
        component: Favorites,
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
