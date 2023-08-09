import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import NotFound from './pages/404.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/404',
        name: '404',
        component: NotFound,
    },

]


const router = createRouter({
    routes,
    history: createWebHistory(),

})
export default router 