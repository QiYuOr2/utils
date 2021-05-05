/**
 * 订阅-发布
 */
export default interface EventEmitter {
  cache: { [key: string]: Function[] };
}

export default class EventEmitter {
  constructor() {
    this.cache = {};
  }

  on(name: string, fn: Function) {
    if (this.cache[name]) {
      this.cache[name].push(fn);
    } else {
      this.cache[name] = [fn];
    }
  }

  off(name: string, fn: Function) {
    const tasks = this.cache[name];
    if (tasks) {
      const taskIndex = tasks.findIndex((f) => f === fn);
      if (taskIndex >= 0) {
        tasks.splice(taskIndex, 1);
      }
    }
  }

  emit(name: string, once = false, ...args: unknown[]) {
    if (this.cache[name]) {
      const tasks = this.cache[name].slice();
      for (const fn of tasks) {
        fn(...args);
      }
      if (once) {
        delete this.cache[name];
      }
    }
  }
}
