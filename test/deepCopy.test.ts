import { deepCopy } from '../src';

describe('deepCopy()', () => {
  it("deepCopy(['a', [1, 2, [时间]]]) equal [1, [1, 2, [时间]]]", () => {
    const time = new Date();
    expect(deepCopy(['a', [1, 2, [time]]])).toEqual(['a', [1, 2, [time]]]);
  });

  it("deepCopy({ a: 'a', b: 2, c: { time: 时间 } }) equal { a: 'a', b: 2,  c: { time: 时间 } }", () => {
    const time = new Date();
    const raw = {
      a: 'a',
      b: 2,
      c: { time },
    };
    const clone = deepCopy(raw);
    expect(clone).toEqual(raw);
    clone.a = 'b';
    const newTime = new Date(Date.now() + 100000);
    clone.c.time = newTime;
    expect(clone).toEqual({ a: 'b', b: 2, c: { time: newTime } });
    expect(raw).toEqual(raw);
  });
});
