import { createWebHistory, createRouter } from "vue-router";
import Welcome from '@/components/views/Welcome.vue';
import Movie from '@/components/views/Movie.vue';

const routes = [{
        path: '/',
        name: "Home",
        component: Welcome,
    },
    {
        path: '/movies',
        name: "Movie",
        component: Movie,
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;