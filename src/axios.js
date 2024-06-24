import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    withCredentials: true,
});

const initializeCsrfCookie = async () => {
    await api.get('/sanctum/csrf-cookie');
};

const login = async (email, password) => {
    try {
        await initializeCsrfCookie();
        const response = await api.post('/login', { email, password });
        console.log(response.data.message);
    } catch (error) {
        console.error('Login failed:', error.response.data);
    }
};

const register = async (userData) => {
    try {
        await initializeCsrfCookie();
        const response = await api.post('/register', userData);
        console.log(response.data.message);
    } catch (error) {
        console.error('Registration failed:', error.response.data);
    }
};

export default {
    login,
    register,
};