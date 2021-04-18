/**
 *
 * @author anguer
 * @date Create by 2021-04-18
 */
export default {};

export function isExternal (path) {
  return (/^(https?:|mailto:|tel:)/).test(path);
}
