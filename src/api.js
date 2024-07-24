import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

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
