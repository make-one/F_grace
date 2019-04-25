import { isArray, isObject, isString } from './lang';

const decodeComponent = window.decodeURIComponent;

function encode(value, opts) {
  if (opts.encode) {
    return encodeURIComponent(value);
  }

  return value;
}

function encoderForArrayFormat(opts) {
  switch (opts.arrayFormat) {
    case 'index':
      return (key, value, index) => {
        return value === null
          ? [encode(key, opts), '[', index, ']'].join('')
          : [encode(key, opts), '[', encode(index, opts), ']=', encode(value, opts)].join('');
      };

    case 'bracket':
      return (key, value) => {
        return value === null
          ? encode(key, opts)
          : [encode(key, opts), '[]=', encode(value, opts)].join('');
      };

    default:
      return (key, value) => {
        return value === null
          ? encode(key, opts)
          : [encode(key, opts), '=', encode(value, opts)].join('');
      };
  }
}

function parserForArrayFormat(opts) {
  let result;

  switch (opts.arrayFormat) {
    case 'index':
      return (key, value, accumulator) => {
        result = /\[(\d*)\]$/.exec(key);

        key = key.replace(/\[\d*\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = {};
        }

        accumulator[key][result[1]] = value;
      };

    case 'bracket':
      return (key, value, accumulator) => {
        result = /(\[\])$/.exec(key);
        key = key.replace(/\[\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }
        if (accumulator[key] === undefined) {
          accumulator[key] = [value];
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };

    default:
      return (key, value, accumulator) => {
        if (accumulator[key] === undefined) {
          accumulator[key] = value;
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };
  }
}

function keysSorter(input) {
  if (isArray(input)) {
    return input.sort();
  }
  if (isObject(input)) {
    return keysSorter(Object.keys(input))
      .sort((a, b) => {
        return Number(a) - Number(b);
      })
      .map(key => {
        return input[key];
      });
  }

  return input;
}

const extract = str => {
  return str.split('?')[1] || '';
};

const b64EncodeUnicode = str => {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode(`0x${p1}`);
    }),
  );
};

const b64DecodeUnicode = str => {
  return decodeURIComponent(
    atob(str)
      .split('')
      .map(c => {
        return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
      })
      .join(''),
  );
};

const parse = (str, options) => {
  const opts = { arrayFormat: 'none', ...options };

  const formatter = parserForArrayFormat(opts);

  // Create an object with no prototype
  // https://github.com/sindresorhus/query-string/issues/47
  const ret = {};
  if (!isString(str)) {
    return ret;
  }

  str = str.trim().replace(/^[?#&]/, '');
  if (!str) {
    return ret;
  }

  str.split('&').forEach(param => {
    const parts = param.replace(/\+/g, ' ').split('=');
    // Firefox (pre 40) decodes `%3D` to `=`
    // https://github.com/sindresorhus/query-string/pull/37
    const key = parts.shift();
    let val = parts.length > 0 ? parts.join('=') : undefined;

    // missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    val = val === undefined ? null : decodeComponent(val);

    formatter(decodeComponent(key), val, ret);
  });

  let objs = Object.keys(ret)
    .sort()
    .reduce((result, key) => {
      const val = ret[key];
      if (Boolean(val) && isObject(val) && !isArray(val)) {
        // Sort object keys, not values
        result[key] = keysSorter(val);
      } else {
        result[key] = val;
      }

      return result;
    }, {});

  if (objs.code64) {
    objs = {
      ...objs,
      ...(JSON.parse(b64DecodeUnicode(objs.code64)) || {}),
    };

    delete objs.code64;
  }

  return objs;
};

const stringify = (obj, options) => {
  const defaults = {
    encode: true,
    arrayFormat: 'none',
  };
  const opts = { ...defaults, ...options };
  const formatter = encoderForArrayFormat(opts);

  return obj
    ? Object.keys(obj)
      .sort()
      .map(key => {
        const val = obj[key];

        if (val === undefined) {
          return '';
        }

        if (val === null) {
          return encode(key, opts);
        }

        if (isArray(val)) {
          const result = [];
          val.slice().forEach(val2 => {
            if (val2 === undefined) {
              return;
            }
            result.push(formatter(key, val2, result.length));
          });
          return result.join('&');
        }
        return `${encode(key, opts)}=${encode(val, opts)}`;
      })
      .filter(x => {
        return x.length > 0;
      })
      .join('&')
    : '';
};

export { parse, stringify, extract, b64EncodeUnicode, b64DecodeUnicode };
