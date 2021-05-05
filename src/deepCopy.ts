import { isNumber, isObject } from './typeOf';

export default function deepCopy<T extends unknown>(target: T): T {
  if (Array.isArray(target)) {
    return target.map((item) => deepCopy(item)) as T;
  }

  if (!isObject(target)) {
    return target;
  }

  const clone: T = {} as T;
  for (const key in target) {
    if (isObject(target[key])) {
      clone[key] = deepCopy(target[key]);
    } else {
      clone[key] = target[key];
    }
  }
  return clone;
}
