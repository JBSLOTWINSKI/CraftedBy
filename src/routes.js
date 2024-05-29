import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/body/Home.vue';
import Cart from '@/components/body/Cart.vue';
import Catalog from '@/components/body/Catalog.vue';
import Order from '@/components/body/Order.vue';
import Product from '@/components/body/Product.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog,
    },
    {
        path: '/order',
        name: 'Order',
        component: Order,
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: Product,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
