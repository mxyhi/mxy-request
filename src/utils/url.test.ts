import { isURL, isURLStr, isHttps } from './url';

describe('url', () => {
  it('is URL string', () => {
    expect(isURLStr('http://www.baidu.com')).toBe(true);
  });

  it('is URL', () => {
    expect(isURL('http://www.baidu.com')).toBe(false);
  });

  it('is https', () => {
    expect(isHttps(new URL('https://www.baidu.com'))).toBe(true);
  });
});
