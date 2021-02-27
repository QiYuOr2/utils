type throttleOptions = {
  /**
   * 直接执行第一次
   */
  leading?: boolean;
  /**
   * 结束后再执行一次
   */
  trailing?: boolean;
};

/**
 * 节流
 * @param func 执行函数
 * @param wait 等待时间
 * @param options 配置
 */
export default function throttle(
  func: (...args: any[]) => void,
  wait: number,
  options?: throttleOptions
) {
  let timer: NodeJS.Timeout | null;
  let args: any[];
  let previous = 0;

  if (!options) {
    options = {};
  }

  const later = function () {
    previous = !!options?.leading === false ? 0 : Date.now();
    timer = null;
    func.apply(this, args);
  };

  const throttled = function () {
    const now = Date.now();

    if (!previous && !!options?.leading === false) {
      previous = now;
    }

    const remaining = wait - (now - previous);

    args = Array.from(arguments);

    if (remaining <= 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      previous = now;
      func.apply(this, args);
    } else if (!timer && !!options?.trailing !== false) {
      timer = setTimeout(later, remaining);
    }
  };

  /**
   * 取消节流
   */
  throttled.cancel = () => {
    clearTimeout(timer as NodeJS.Timeout);
    previous = 0;
    timer = null;
  };

  return throttled;
}
