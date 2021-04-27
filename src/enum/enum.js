/**
 * enum.js
 * version 0.0.1
 *
 * @author anguer
 * @date Create by 2019-09-10
 */
'use strict';

function mapValue (object, iteratee) {
  // object = Object(object)
  const result = {};

  Object.keys(object).forEach((key) => {
    result[key] = iteratee(object[key], key, object);
  });
  return result;
}

function mapKey (object, iteratee) {
  // object = Object(object)
  const result = {};

  Object.keys(object).forEach((key) => {
    const value = object[key];
    result[iteratee(value, key, object)] = value;
  });
  return result;
}

/**
 * @class Enum
 *
 * new Enum({key1: [value, label], key2: [value, label], key3: [value, label], ...});
 * new Enum([{key1, value, label}, {key2, value, label}, {key3, value, label}, ...]);
 * new Enum({key1, value, label}, {key2, value, label}, {key3, value, label}, ...);
 */
export default class Enum {
  static fromItem (key, args) {
    if (!args) {
      throw new Error('no args by create item');
    }

    const item = {};
    item.key = args.key || key;

    if (args instanceof Enum) {
      item.value = args;
      item.label = Symbol.for(key);
    } else if (args instanceof Array) {
      const [value, label] = args;
      item.value = value;
      item.label = label;
    } else if (args instanceof Object) {
      const { value, label } = args;
      item.value = value;
      item.label = label;
    }

    return item;
  }

  static isEnum (item) {
    return item instanceof Enum || item?.value instanceof Enum;
  }

  constructor (...args) {
    const _args = args.length > 1 ? [...args] : args[0];
    if (typeof _args !== 'object' || !Object.keys(_args).length) {
      throw new Error('args must be an array or object');
    }

    // => ['key1', 'key2', 'key3', ...]
    Object.defineProperty(this, '__rawKeys__', {
      writable: false,
      enumerable: false,
      value: Object.freeze(Object.keys(mapKey(_args, (value, key) => value.key || key)))
    });

    // => [{key1, value, label}, {key2, value, label}, {key3, value, label}, ...]
    Object.defineProperty(this, '__rawArgs__', {
      writable: false,
      enumerable: false,
      value: Object.freeze(mapValue(_args, (value, key) => Enum.fromItem(key, value)))
    });

    // => {value1: {key1, value, label}, value2: {key1, value, label}, value3: {key1, value, label}, ...}
    Object.defineProperty(this, '__valueBy__', {
      writable: false,
      enumerable: false,
      value: Object.freeze(mapKey(this.flatValues, o => o.value))
    });

    // proxy property in raw keys
    return new Proxy(this, {
      get (target, property) {
        if (target.__rawKeys__.includes(property)) {
          return Enum.isEnum(target.__rawArgs__[property]) ? target.__rawArgs__[property].value : target.__rawArgs__[property];
        } else {
          return target[property];
        }
      }
    });
  }

  // top layer values
  get values () {
    return Object.values(this.__rawArgs__);
  }

  // nest values to flat values
  get flatValues () {
    function iteratee (t) {
      if (Enum.isEnum(t)) {
        return t.value.values.map(iteratee);
      } else {
        return t;
      }
    }
    return this.values.map(iteratee).flat();
  }

  // value to label
  label (value) {
    return this.__valueBy__[value]?.label;
  }
}
