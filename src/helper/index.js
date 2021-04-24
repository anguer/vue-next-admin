/**
 *
 * @author anguer
 * @date Create by 2021-04-18
 */
import cloneDeep from 'clone-deep';

export function isExternal (path) {
  return (/^(https?:|mailto:|tel:)/).test(path);
}

/**
 * 将扁平数据转化成树形结构
 * @param   {Array}  source    扁平数据列表
 * @param   {String} id        标识唯一索引字段的名称
 * @param   {String} parentId  标识父级字段的名称
 * @param   {String} children  标识子级字段的名称
 * @param   {Number} root      根节点
 *
 * Eg.: DataHandle.treeData( [ { id: 1, name: '文件管理', parentId: 0 } ])
 * @returns {*}
 */
export function arrayToTree (source = [], id = 'id', parentId = 'parentId', children = 'children', root = 0) {
  const cloneData = cloneDeep(source);
  return cloneData.filter(father => {
    const branchArr = cloneData.filter(child => father[id] === child[parentId]);
    father[children] = branchArr.length > 0 ? branchArr : '';
    // 如果第一层不是parentId=0，请自行修改
    return father[parentId] === root;
  });
}

export function filesToTree (files = []) {
  function addPath (arr, obj = {}) {
    const component = arr.shift();
    const current = obj[component] || (obj[component] = { label: component });
    if (arr.length) {
      addPath(arr, current.children || (current.children = {}));
    }
    return obj;
  }

  function makeArray (obj) {
    const arr = Object.values(obj);
    arr.filter(item => item.children).forEach(item => {
      item.children = makeArray(item.children);
    });
    return arr;
  }

  // make tree
  const treeObj = files.reduce((obj, path) => addPath(path.split('/'), obj), {});

  return makeArray(treeObj);
}

export function toJson (str, def = null) {
  try {
    return JSON.parse(str) || def;
  } catch (e) {
    return def;
  }
}
