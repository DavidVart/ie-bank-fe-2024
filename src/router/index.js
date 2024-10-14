import Vue from 'vue';
import VueRouter from 'vue-router';
import Skull from '../components/Skull.vue';
import AppAccounts from '../components/AppAccounts.vue';
import WelcomeHome from '../components/WelcomeHome.vue'; // Import your WelcomeHome component

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'WelcomeHome',
    component: WelcomeHome,
  },
  {
    path: '/skull',
    name: 'Skull',
    component: Skull,
  },
  {
    path: '/accounts',
    name: 'AppAccounts',
    component: AppAccounts,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;