import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'Conócenos',
    },
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/:catchAll(.*)',
    meta: {
      layout: 'empty',
    },
    component: () => import('@/views/errors/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  },
});

export default router;
