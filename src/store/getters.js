/**
 *
 * @author anguer
 * @date Create by 2021-04-18
 */
export default {
  app: state => state.app,
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,

  token: state => state.user.token,

  permission: state => state.permission,
  permission_routes: state => state.permission.routes,
};

