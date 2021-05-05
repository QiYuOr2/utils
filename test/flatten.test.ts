import { flatten } from '../src';

describe('flatten()', () => {
  it('flatten([1, [1, 2, [1]]]) equal [1,1,2,1]', () => {
    expect(flatten([1, [1, 2, [1]]])).toEqual([1, 1, 2, 1]);
  });

  it('flatten([1, [1, 2, [1]]], 1) equal [1, 1, 2, [1]]', () => {
    expect(flatten([1, [1, 2, [1]]], 1)).toEqual([1, 1, 2, [1]]);
  });

  it('flatten([1, [1, 2, [1]]], 2) equal [1, 1, 2, 1]', () => {
    expect(flatten([1, [1, 2, [1]]], 2)).toEqual([1, 1, 2, 1]);
  });
});
