/**
 * 数组扁平化
 * @param arr 输入数组
 * @param depth 扁平化几层
 * @returns 扁平化后的数组
 */
export default function flatten<T>(arr: T[], depth?: number) {
  let output: T[] = [];

  if (!depth && depth !== 0) {
    depth = Infinity;
  } else if (depth <= 0) {
    return output.concat(arr);
  }

  const length = arr.length;
  for (let i = 0; i < length; i++) {
    const subArr = arr[i];
    if (Array.isArray(subArr)) {
      if (depth > 0) {
        output = output.concat(flatten(subArr, depth - 1));
      } else {
        output.push(subArr);
      }
    } else {
      output.push(subArr);
    }
  }

  return output;
}
