import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
/* eslint-disable */
import VueCookies from 'vue-cookies';

const isAuthenticated = localStorage.getItem('authenticated') === 'true';
const isAdmin = localStorage.getItem('role') === 'admin';
// Устанавливаем состояние аутентификации в хранилище
store.commit('setAuthenticated', isAuthenticated);
store.commit('setRole', isAdmin);


createApp(App).use(store).use(VueCookies, { expires: '7d'}).use(router).mount('#app');
