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
// console.log('#moduls', modules);

// vue view modules
export const viewModules = Object.keys(modules).map(path => path.replace('../views/', ''));

// menu tree to route tree
export const translate = (arr = [], isRoot = true) => arr.map(t => {
  const hasPath = t.path && typeof t.path === 'string';
  const rawPath = hasPath ? t.path.split('.vue')[0] : undefined;

  const rawUrl = isRoot ? ('/' + t.url).replace('//', '/') : ('' + t.url).replace('/', '');

  const obj = {
    hidden: t.hidden,
    name: Symbol.for(t.title + Math.random()),
    path: rawUrl,
    // component: hasPath ? () => import(`../views/${rawPath}.vue`) : Layout,
    component: hasPath ? modules[`../views/${rawPath}.vue`] : Layout,
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

export const constantRoutes = translate(routes);
// console.log('#routes', constantRoutes);
export const asyncRoutes = [];
export function resetRouter () {}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
});

export default router;
