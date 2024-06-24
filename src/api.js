import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withCredentials: true,
});

export const initializeCsrfCookie = async () => {
    await api.get('/sanctum/csrf-cookie');
};

export const register = async (userData) => {
    await initializeCsrfCookie();
    return api.post('/register', userData);
};

export const login = async (email, password) => {
    await initializeCsrfCookie();
    return api.post('/login', { email, password });
};

export const logout = async () => {
    return api.post('/logout');
};

export default api;
