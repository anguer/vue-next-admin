import { asyncRoutes, constantRoutes, resetRouter } from '@/router';

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
    GenerateRoutes ({ commit }, routes) {
      // 404 page must be placed at the end !!!
      // const NotFoundPage = { path: '*', redirect: '/404', hidden: true };
      commit('SET_ROUTES', routes);
    },
  }
};
