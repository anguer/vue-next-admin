/**
 *
 * @author anguer
 * @date Create by 2021-04-18
 */
import http from '@/helper/http';
import { getStorage, setStorage, TokenKey, PrivilegeKey } from '@/helper/storage';
import { toJson } from '@/helper';

export default {
  state: {
    token: getStorage(TokenKey),
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
  },

  actions: {
    // 登录
    async Login ({ commit, dispatch }, { tel }) {
      // const token = await http.get('/api/login', { tel });
      // setStorage(TokenKey, token);
      // commit('SET_TOKEN', token);
    },

    GetUserInfo ({ commit, dispatch }) {
      return Promise.resolve({
        routes: toJson(getStorage(PrivilegeKey), [])
      });
    }
  }
};
