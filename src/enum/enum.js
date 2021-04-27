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
 * new Enum({key: value, key2: value, key3: value, ...});
 */
export default class Enum {
  static fromItem (key, args) {
    if (!args) {
      throw new Error('no args by create item');
    }

    const item = {};
    item.key = key;

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

  constructor (args = []) {
    if (typeof args !== 'object') {
      throw new Error('args must be an array or object');
    }

    Object.defineProperty(this, '__rawKeys__', {
      writable: false,
      enumerable: false,
      value: Object.freeze(Object.keys(args))
    });

    Object.defineProperty(this, '__rawArgs__', {
      writable: false,
      enumerable: false,
      value: Object.freeze(mapValue(args, (value, key) => Enum.fromItem(key, value)))
    });

    Object.defineProperty(this, '__valueBy__', {
      writable: false,
      enumerable: false,
      value: Object.freeze(mapKey(this.flatValues, o => o.value))
    });

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

  get values () {
    return Object.values(this.__rawArgs__);
  }

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

  label (value) {
    return this.__valueBy__[value]?.label;
  }
}
