/**
 *
 * @author anguer
 * @date Create by 2021-04-18
 */
import axios from 'axios';
import store from '../store';
import { getStorage, TokenKey } from '@/helper/storage';

const TOKEN_KEY = 'X-ACCESS-TOKEN';

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 3000,
  headers: {},
  withCredentials: true,
  // proxy: false,
});

// Add a request interceptor
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (store.getters.token) {
    // 让每个请求携带自定义token 请根据实际情况自行修改
    config.headers[TOKEN_KEY] = getStorage(TokenKey);
  }

  return config;
}, function (error) {
  // for debug
  // console.log(error);
  return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
  const res = response.data;

  // if the custom code is not 20000, it is judged as an error.
  if (!res.success) {
    return Promise.reject(new Error(res.msg || 'Error'));
  } else {
    return res.data;
  }
}, function (error) {
  // for debug
  console.log('err: ' + error);
  // Do something with response error
  if (error.response) {
    return Promise.reject(error.response.data || error);
  } else {
    return Promise.reject(new Error('网络异常'));
  }
});

// axios
export default {
  /**
   * get
   * @param url
   * @param params
   * @param config
   * @returns {*}
   */
  get (url = '', params = {}, config = { showLoading: false }) {
    return http.get(url,{
      params,
      ...config
    });
  },

  /**
   * post
   * @param url
   * @param data
   * @param config
   * @returns {*}
   */
  post (url = '', data = {}, config = { showLoading: false }) {
    return http.post(url, {
      data,
      ...config
    });
  },
};
