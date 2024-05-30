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
        async login(username, password) {
            try {
                const response = await fetch('https://fakestoreapi.com/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });
                const data = await response.json();
                if (data.token) {
                    this.setUser({ username });
                    this.setToken(data.token);
                    return true;
                } else {
                    throw new Error(data.message || 'Login failed');
                }
            } catch (error) {
                console.error('Login error:', error);
                throw error;
            }
        },
        logout() {
            this.user = null;
            this.token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        },
    },
});
