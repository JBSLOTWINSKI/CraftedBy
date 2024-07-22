import api from '@/api';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    // État initial du store
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null, // Utilisateur actuellement connecté
        token: localStorage.getItem('token') || null, // Jeton d'authentification
    }),

    actions: {
        // Définit l'utilisateur actuel dans le store et le stockage local
        setUser(user) {
            this.user = user;
        },

        // Définit le jeton d'authentification dans le store et le stockage local
        setToken(token) {
            this.token = token;
            localStorage.setItem('token', token);
        },

        // Enregistre un nouvel utilisateur et met à jour le store avec ses informations
        async register(userData) {
            const response = await api.post('/register', userData);
            this.setUser(response.data.user);
            this.setToken(response.data.access_token);
            return true;
        },

        // Connecte l'utilisateur et met à jour le store avec ses informations
        async login(credentials) {
            const response = await api.post('/login', credentials);
            this.setUser(response.data.user);
            this.setToken(response.data.access_token);
            return true;
        },

        // Déconnecte l'utilisateur et réinitialise le store
        async logout() {
            await api.post('/logout');
            this.user = null;
            this.token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        },
    },
});