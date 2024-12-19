import { createRouter, createWebHistory } from 'vue-router';
import Top from '../components/Top.vue';

const routes = [
  { path: '/', component: Top },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;