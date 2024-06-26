import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/body/Home.vue';
import Cart from '@/components/body/Cart.vue';
import Catalog from '@/components/body/Catalog.vue';
import Order from '@/components/body/Order.vue';
import Product from '@/components/body/Product.vue';
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";
import Profile from "@/components/body/Profile.vue";
import Address from "@/components/body/Address.vue";
import Payment from "@/components/body/Payment.vue";
import ConfirmationOrder from "@/components/body/ConfirmationOrder.vue";
import { useAuthStore } from "@/stores/auth.js";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/catalog', name: 'Catalog', component: Catalog },
    { path: '/order', name: 'Order', component: Order, meta: { requiresAuth: true } },
    { path: '/product/:id', name: 'Product', component: Product, props: true },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/profile', name: 'Profile', component: Profile, meta: { requiresAuth: true } },
    { path: '/address', name: 'Address', component: Address, meta: { requiresAuth: true } },
    { path: '/payment', name: 'Payment', component: Payment, meta: { requiresAuth: true } },
    { path: '/confirmation-order', name: 'ConfirmationOrder', component: ConfirmationOrder, meta: { requiresAuth: true } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    if (to.meta.requiresAuth && !authStore.user) {
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router;
