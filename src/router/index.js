/**
 *
 * @author anguer
 * @date Create by 2021-04-18
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes.json';

/* Layout */
import Layout from '@/layout/index.vue';
const modules = import.meta.glob('../views/**/*.vue');

// menu tree to route tree
export const translate = (arr = [], isRoot = true) => arr.map(t => {
  const obj = {
    hidden: t.hidden,
    name: Symbol.for(t.title + Math.random()),
    path: t.url,
    // component: (t.path && typeof t.path === 'string') ? () => import(`../views${t.path}.vue`) : Layout,
    component: (t.path && typeof t.path === 'string') ? modules[`../views${t.path}.vue`] : Layout,
    meta: {
      title: t.title,
      icon: t.icon,
    },
    children: (t.children instanceof Array && t.children.length) ? translate(t.children, false) : null
  };
  if (isRoot) {
    obj.alwaysShow = t.alwaysShow;
  }
  return obj;
});

// console.log('#routes', translate(routes));
export const constantRoutes = translate(routes);
export const asyncRoutes = [];
export function resetRouter () {}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
});

export default router;
