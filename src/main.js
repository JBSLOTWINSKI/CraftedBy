import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from "pinia";
import piniaPersist from 'pinia-plugin-persistedstate';
import App from './App.vue'
import router from "./routes.js";
import axios from 'axios';

const app = createApp(App);
app.config.globalProperties.$http = axios;

const pinia = createPinia();
pinia.use(piniaPersist);

app.use(router);
app.use(pinia);
app.mount('#app');
