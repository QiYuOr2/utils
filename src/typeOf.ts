export default function typeOf<T>(obj: T) {
  return Object.prototype.toString.call(obj);
}

export function isObject<T>(obj: T) {
  return typeOf(obj) === '[object Object]';
}

export function isRegExp<T>(obj: T) {
  return typeOf(obj) === '[object RegExp]';
}

export function isDate<T>(obj: T) {
  return typeOf(obj) === '[object Date]';
}

export function isArray<T>(obj: T) {
  return typeOf(obj) === '[object Array]';
}

export function isNull<T>(obj: T) {
  return typeOf(obj) === '[object Null]';
}

export function isNumber<T>(obj: T) {
  return typeOf(obj) === '[object Number]';
}
