/**
 *
 * @author anguer
 * @date Create by 2021-04-18
 */
export const TokenKey = 'X-Token';
export const PrivilegeKey = '__VNA_PRIVILEGE__';

export function getStorage (key) {
  return localStorage.getItem(key);
}

export function setStorage (key, token) {
  return localStorage.setItem(key, token);
}

export function removeToken (key) {
  return localStorage.removeItem(key);
}
