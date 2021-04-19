/**
 *
 * @author anguer
 * @date Create by 2021-04-18
 */
import { createRouter, createWebHashHistory } from 'vue-router';

/* Layout */
import Layout from '@/layout/index.vue';

export const constantRoutes = [
  {
    hidden: true,
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    name: 'Dashboard',
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/index.vue'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'el-icon-s-home', affix: true }
      }
    ],
    redirect: 'noredirect',
  },
  {
    name: 'form',
    path: '/form',
    children: [
      {
        name: 'select',
        path: 'select',
        component: () => import('@/views/form/select.vue'),
        children: '',
        meta: {
          title: 'Select',
          icon: 'el-icon-s-home'
        }
      },
      {
        name: 'table',
        path: 'table',
        component: () => import('@/views/form/table.vue'),
        children: '',
        meta: {
          title: 'Table',
          icon: 'el-icon-s-home'
        }
      },
      {
        name: 'input',
        path: 'input',
        component: () => import('@/views/form/input.vue'),
        children: '',
        meta: {
          title: 'Input',
          icon: 'el-icon-s-home'
        }
      }
    ],
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    meta: {
      title: 'Form',
      icon: 'el-icon-s-home'
    }
  }
];
export const asyncRoutes = [];
export function resetRouter () {}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
});

export default router;
