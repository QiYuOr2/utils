export default function forEach<T>(
  source: Array<T>,
  callback: (currentValue: T, index: number, source: Array<T>) => void
) {
  if (!Array.isArray(source)) {
    throw new TypeError('不是个数组');
  }

  let len = source.length;
  let i = 0;
  while (i < len) {
    if (i in source) {
      callback(source[i], i, source);
    }
    ++i;
  }
}
