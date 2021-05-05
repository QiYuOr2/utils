import { typeOf } from '../src';

describe('typeOf()', () => {
  it('abc is [object String]', () => {
    expect(typeOf('abc')).toBe('[object String]');
  });

  it('1 is [object Number]', () => {
    expect(typeOf(1)).toBe('[object Number]');
  });

  it('[1, 2] is [object Array]', () => {
    expect(typeOf([1, 2])).toBe('[object Array]');
  });

  it('new Date() is [object Date]', () => {
    expect(typeOf(new Date())).toBe('[object Date]');
  });

  it('{} is [object Object]', () => {
    expect(typeOf({})).toBe('[object Object]');
  });

  it('() => {} is [object Function]', () => {
    expect(typeOf(() => {})).toBe('[object Function]');
  });

  it('async () => {} is [object AsyncFunction]', () => {
    expect(typeOf(async () => {})).toBe('[object AsyncFunction]');
  });

  it('/123/ is [object RegExp]', () => {
    expect(typeOf(/123/)).toBe('[object RegExp]');
  });

  it('null is [object Null]', () => {
    expect(typeOf(null)).toBe('[object Null]');
  });
});
