import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
/* eslint-disable */
import VueCookies from 'vue-cookies';

const isAuthenticated = $cookies.get('myCookie') === 'true';
const isAdmin = localStorage.getItem('role') === 'admin';
// Устанавливаем состояние аутентификации в хранилище
//store.commit('setAuthenticated', isAuthenticated);


const adus = 'root';
const adpa = 'root'; 


createApp(App)
            .use(store)
            .use(VueCookies, { expires: '7d'})
            .use(router)

            .mount('#app');
