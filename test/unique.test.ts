import { unique } from '../src';

describe('unique()', () => {
  it('unique([1,2,3,2,3]) equal [1,2,3]', () => {
    expect(unique([1, 2, 3, 2, 3])).toEqual([1, 2, 3]);
  });
});
