/**
 *
 * @author anguer
 * @date Create by 2021-04-18
 */
export const TokenKey = 'X-Token';

export function getStorage (key) {
  return sessionStorage.getItem(key);
}

export function setStorage (key, token) {
  return sessionStorage.setItem(key, token);
}

export function removeToken (key) {
  return sessionStorage.removeItem(key);
}
