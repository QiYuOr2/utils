import { typeOf } from '../src';
import EventEmitter from '../src/eventEmitter';

describe('EventEmitter', () => {
  const events = new EventEmitter();
  function handler(callback: (arg0: number) => void) {
    callback(1);
  }

  it('listen event', () => {
    events.on('name', handler);
    expect(events.cache['name']).not.toEqual(undefined);
  });

  it('call event handler', () => {
    let a = 0;
    events.emit('name', false, (arg: number) => {
      a = arg;
    });
    expect(a).toEqual(1);
  });

  it('remove event handler', () => {
    events.off('name', handler);
    expect(events.cache['name'].length).toEqual(0);
  });
});
