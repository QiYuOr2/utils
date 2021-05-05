import { parseURL } from '../src';

describe('parseURL()', () => {
  it('parse `https://www.xxx.com:80/#/team/user?a=1&b=2`', () => {
    const url = parseURL('https://www.xxx.com:80/#/team/user?a=1&b=2');
    expect(url).toEqual({
      protocol: 'https',
      hostname: 'www.xxx.com',
      port: ':80',
      routes: '/#/team/user',
      query: '?a=1&b=2',
    });
  });

  it('parse `https://www.xxx.com:80/team/user?a=1&b=2`', () => {
    const url = parseURL('https://www.xxx.com:80/team/user?a=1&b=2');
    expect(url).toEqual({
      protocol: 'https',
      hostname: 'www.xxx.com',
      port: ':80',
      routes: '/team/user',
      query: '?a=1&b=2',
    });
  });
});
