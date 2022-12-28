import {createRouter, createWebHistory} from 'vue-router'
import ProductList from "../views/ProductList";
import ProductDetail from "../views/ProductDetail";

const routes = [
    {path: '/', component: ProductList},
    {
        path: '/business/:slug',
        component: ProductDetail
      },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
