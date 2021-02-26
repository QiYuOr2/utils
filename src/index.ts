export const sum = (...args: number[]) => {
  return args.reduce((prev, cur) => cur + prev, 0);
};

export { default as debounce } from './debounce';
export { animateDebounce } from './debounce';
