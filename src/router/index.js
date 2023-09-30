import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DonateBlank from '../components/DonateBlank.vue';
import NotFoundView from '../components/NotFoundView.vue';
import MerchShop from '../components/MerchShop.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/donate',
    name: 'donate',
    component: DonateBlank,
  },
  {
    path: '/merch/:type',
    name: 'merch',
    component: MerchShop,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFoundView,
  },
];

const router = createRouter({
  mode: 'abstract',
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes,
});

export default router;
