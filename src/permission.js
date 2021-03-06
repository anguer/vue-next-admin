/**
 *
 * @author anguer
 * @date Create by 2021-04-18
 */
import router from './router';
import store from './store';
import { getStorage, TokenKey } from '@/helper/storage';

// no redirect whitelist
const whiteList = [
  '/login',
];

function checkAlwaysAllowedUrls (urls, path) {
  return urls.some((url) => url === path);
}

router.beforeEach(async (to, from, next) => {
  const { routes } = await store.dispatch('GetUserInfo');
  await store.dispatch('GenerateRoutes', routes);
  // await store.dispatch('GenerateRoutes', []);

  // [[[ determine whether the user has logged in
  // const hasToken = getStorage(TokenKey);
  // if (checkAlwaysAllowedUrls(whiteList, to.path)) {
  //   // in the free login whitelist, go directly
  //   if (hasToken && to.path === '/login') {
  //     next({ path: '/' });
  //   } else {
  //     next();
  //   }
  // } else if (hasToken) {
  //   // getInfo
  //   return next();
  // } else {
  //   /* has no token */
  //   next({ path: '/login'});
  // }
  // ]]]
  next();
});
