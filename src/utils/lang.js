// import platform from 'config/platform';

export const isArray = Array.isArray;

export function isUndefined(value) {
  return typeof value === 'undefined';
}

export function isDefined(value) {
  return typeof value !== 'undefined';
}

export function isObject(value) {
  return value !== null && typeof value === 'object';
}

export function isString(value) {
  return typeof value === 'string';
}

export function isNumber(value) {
  return typeof value === 'number';
}

export function isDate(value) {
  return toString.call(value) === '[object Date]';
}

export function isFunction(value) {
  return typeof value === 'function';
}

export function isRegExp(value) {
  return toString.call(value) === '[object RegExp]';
}

export function isWindow(obj) {
  return obj && obj.window === obj;
}

export function isFile(obj) {
  return toString.call(obj) === '[object File]';
}

export function isFormData(obj) {
  return toString.call(obj) === '[object FormData]';
}

export function isBlob(obj) {
  return toString.call(obj) === '[object Blob]';
}

export function isBoolean(value) {
  return typeof value === 'boolean';
}

export function isPromiseLike(obj) {
  return obj && isFunction(obj.then);
}

export function isElement(node) {
  return !!(node && node.nodeName(node.prop && node.attr && node.find)); // we have an on and find method part of jQuery API
}

export function uuid() {
  let d = new Date().getTime();
  const _uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return _uuid;
}

const defaultOptions = {
  breakOnWords: false,
  minDelta: 0, // Prevents truncating a tiny bit off the end
  elipsis: '...',
};

export const truncate = (str, maxChars, options) => {
  options = { ...defaultOptions, ...options };
  if (str && str.length && str.length - options.minDelta + options.elipsis.length >= maxChars) {
    str = str.slice(0, maxChars - options.elipsis.length + 1);
    if (options.breakOnWords) {
      const ii = Math.max(str.lastIndexOf(' '), str.lastIndexOf('\n'));
      str = str.slice(0, ii);
    }
    str = str.trim() + options.elipsis;
  }
  return str;
};

export const isValidPhone = value => {
  const reg = new RegExp(
    [
      '^([0-9]{3,4}-)?[0-9]{7,8}$',
      '|^((\\+?86)',
      '|(\\(\\+86\\)))?(13[0123456789][0-9]{8}',
      '|15[0123456789][0-9]{8}',
      '|16[0123456789][0-9]{8}',
      '|17[0123456789][0-9]{8}',
      '|18[0123456789][0-9]{8}',
      '|19[0123456789][0-9]{8}',
      '|147[0-9]{8}',
      '|145[0-9]{8}',
      '|1349[0-9]{7})$',
    ].join(''),
  );

  return reg.test(value);
};

export const getDateData = endTime => {
  const diff = endTime - new Date().getTime();
  const sec = Math.floor((diff / 1000) % 60);
  const min = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return {
    days: Zerofill(days),
    hours: Zerofill(hours),
    min: Zerofill(min),
    sec: Zerofill(sec),
    diff,
  };
};

export const Zerofill = n => (n < 10 ? `0${n}` : n);

export const compare = (key, type = 'asc') => (a, b) => {
  const value1 = a[key];
  const value2 = b[key];

  if (type === 'desc') {
    return value2 - value1;
  }
  return value1 - value2;
};

export const addListen = (obj, type, fn) => {
  if (obj.attachEvent) {
    obj[`e${type}${fn}`] = fn;
    obj[type + fn] = function() {
      obj[`e${type}${fn}`](window.event);
    };
    obj.attachEvent(`on${type}`, obj[type + fn]);
  } else {
    obj.addEventListener(type, fn, false);
  }
};

export const delListen = (obj, type, fn) => {
  if (obj.attachEvent) {
    obj[`e${type}${fn}`] = fn;
    obj[type + fn] = function() {
      obj[`e${type}${fn}`](window.event);
    };
    obj.detachEvent(`on${type}`, obj[type + fn]);
  } else {
    obj.removeEventListener(type, fn, false);
  }
};

// 裁剪url中查询字符串
export const funcUrlDel = (url, name) => {
  const query = url.split('?')[1];
  const baseUrl = url.split('?')[0];
  if (query.indexOf(name) > -1) {
    const obj = {};
    const arr = query.split('&');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('=');
      obj[arr[i][0]] = arr[i][1];
    }
    delete obj[name];
    var url = `${baseUrl}?${JSON.stringify(obj)
      .replace(/[\"\{\}]/g, '')
      .replace(/\:/g, '=')
      .replace(/\,/g, '&')}`;
    return url;
  }
};
