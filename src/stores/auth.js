import { defineStore } from 'pinia';

/**
 * Store for managing authentication state and actions.
 */
export const useAuthStore = defineStore('auth', {
    state: () => ({
        // Initialize user and token from localStorage
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || null,
    }),

    actions: {
        /**
         * Sets the user state and stores it in localStorage.
         * @param {Object} user - The user object to set.
         */
        setUser(user) {
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },

        /**
         * Sets the token state and stores it in localStorage.
         * @param {string} token - The authentication token to set.
         */
        setToken(token) {
            this.token = token;
            localStorage.setItem('token', token);
        },

        /**
         * Performs login by sending username and password to the API.
         * Sets the user and token on successful login.
         * @param {string} username - The username for login.
         * @param {string} password - The password for login.
         * @returns {Promise<boolean>} - Returns true if login is successful.
         * @throws {Error} - Throws an error if login fails.
         */
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

        /**
         * Logs out the user by clearing the user and token from state and localStorage.
         */
        logout() {
            this.user = null;
            this.token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        },
    },
});
