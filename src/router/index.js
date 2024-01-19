import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../pages/Tasks.vue';
import FinishedTasks from '../pages/FinishedTasks.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Tasks,
        },
        {
            path: '/about',
            name: 'about',
            component: FinishedTasks,
        },
    ],
});

export default router
