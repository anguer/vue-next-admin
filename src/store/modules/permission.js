import { constantRoutes, translate } from '@/router';
import { arrayToTree } from '@/helper';

export default {
  state: {
    routes: [],
    addRoutes: [],
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes;
      state.routes = constantRoutes.concat(routes);
    },
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      // 404 page must be placed at the end !!!
      // const NotFoundPage = { path: '*', redirect: '/404', hidden: true };
      const tree = arrayToTree(data);
      const asyncRoutes = translate(tree);
      // console.log('#GenerateRoutes', asyncRoutes);
      commit('SET_ROUTES', asyncRoutes);
      // return asyncRoutes;
    },
  }
};
