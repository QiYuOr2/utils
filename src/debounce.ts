/**
 * 防抖
 * @param func 执行函数
 * @param wait 等待时间
 * @param immediate 是否立即执行
 */
export default function debounce(
  func: (...args: any[]) => void,
  wait: number,
  immediate: boolean = false
) {
  let timer: NodeJS.Timeout | null = null;
  let result: any;

  const debounced = function () {
    const args = Array.from(arguments);

    if (timer) {
      clearTimeout(timer);
    }
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) {
        result = func.apply(this, args);
      }
    } else {
      timer = setTimeout(() => func.apply(this, args), wait);
    }

    return result;
  };

  /**
   * 取消防抖
   */
  debounced.cancel = () => {
    clearTimeout(timer as NodeJS.Timeout);
    timer = null;
  };

  return debounced;
}

/**
 * 动画防抖
 * @param func 执行函数
 */
export function animateDebounce(func: (...args: any[]) => void) {
  let t: number;
  return function () {
    cancelAnimationFrame(t);
    t = requestAnimationFrame(func);
  };
}
