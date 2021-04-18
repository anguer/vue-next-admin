/**
 *
 * @author anguer
 * @date Create by 2021-04-18
 */
import { createRouter, createWebHashHistory } from 'vue-router';

/* Layout */
import Layout from '@/layout/index.vue';

export const constantRoutes = [];
export const asyncRoutes = [];
export function resetRouter () {}

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/index.vue'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  // { path: '/', name: 'Home', component: () => import('../views/index.vue') },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      // keepAlive: true,
    },
    component: () => import('../views/login/index.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
