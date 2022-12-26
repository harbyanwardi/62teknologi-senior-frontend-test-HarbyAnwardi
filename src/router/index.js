import {createRouter, createWebHistory} from 'vue-router'
import Backend from "../views/Backend";
import ProductDetail from "../views/ProductDetail";

const routes = [
    {path: '/', component: Backend},
    {
        path: '/business/:id',
        component: ProductDetail
      },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
