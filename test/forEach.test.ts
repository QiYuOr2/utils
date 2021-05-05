import { forEach } from '../src';

describe('forEach()', () => {
  it('forEach([1,2,3]) 遍历', () => {
    forEach([1, 2, 3], (item, i) => {
      switch (i) {
        case 0:
          expect(item).toEqual(1);
          break;
        case 1:
          expect(item).toEqual(2);
          break;
        case 2:
          expect(item).toEqual(3);
          break;
      }
    });
  });
});
