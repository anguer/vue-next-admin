import { asyncRoutes, constantRoutes, resetRouter } from '@/router';

/* Layout */
import Layout from '@/layout/index.vue';

export default {
  state: {
    routes: [
      {
        name: '激励管理7d8dcd95a8a6b581cbdb7e50b9f72516',
        path: '/app-guide/incentive',
        icon: 'fas journal-whills',
        children: [
          {
            name: '期权池11a9e1215cd9130e9c3385ba0aaaa4af',
            path: 'holder/index',
            component: () => import('@/views/index.vue'),
            icon: 'fas chart-pie',
            children: '',
            meta: {
              title: '期权池',
              icon: 'fas chart-pie'
            }
          },
          {
            name: '激励计划1762cbb887cbeabdf21026fa4188ffef',
            path: 'plan/index',
            component: () => import('@/views/index.vue'),
            icon: 'fas calendar-alt',
            children: '',
            meta: {
              title: '激励计划',
              icon: 'fas calendar-alt'
            }
          },
          {
            name: '成熟/解限计划9a50847c82c9db9c100604dc93b3c46b',
            path: 'unfreeze/index',
            component: () => import('@/views/index.vue'),
            icon: 'fas calculator',
            children: '',
            meta: {
              title: '成熟/解限计划',
              icon: 'fas calculator'
            }
          }
        ],
        component: Layout,
        redirect: 'noredirect',
        alwaysShow: true,
        meta: {
          title: '激励管理',
          icon: 'fas journal-whills'
        }
      }
    ],
    addRoutes: [],
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes;
      state.routes = constantRoutes.concat(routes);
    },
  },
  actions: {
    GenerateRoutes ({ commit }, routes) {
      // 404 page must be placed at the end !!!
      const NotFoundPage = { path: '*', redirect: '/404', hidden: true };

      return new Promise(resolve => {
        resetRouter();
        resolve();
      });
    },
  }
};
