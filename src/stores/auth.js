import api from '@/api';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || null,
    }),

    actions: {
        setUser(user) {
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },

        setToken(token) {
            this.token = token;
            localStorage.setItem('token', token);
        },

        async register(userData) {
            const response = await api.post('/register', userData);
            this.setUser(response.data.user);
            this.setToken(response.data.access_token);
            return true;
        },

        async login(credentials) {
            const response = await api.post('/login', credentials);
            this.setUser(response.data.user);
            this.setToken(response.data.access_token);
            return true;
        },

        async logout() {
            await api.post('/logout');
            this.user = null;
            this.token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        },
    },
});
