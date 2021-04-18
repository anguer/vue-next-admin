/**
 *
 * @author anguer
 * @date Create by 2021-04-18
 */
import { createStore } from "vuex";
import getters from './getters';

// https://vitejs.dev/guide/features.html#glob-import
const modulesFiles = import.meta.globEager('./modules/*.js');

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = Object.keys(modulesFiles).reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1');
  const value = modulesFiles[modulePath];
  // console.log(moduleName, value.default);
  modules[moduleName] = value.default;
  return modules;
}, {});

const store = createStore({
  modules,
  getters
});

export default store;
