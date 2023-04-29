import { encodeUrlStr } from './encode_url';

describe('encodeQueryStr', () => {
  it('encodeQueryStr', () => {
    expect(
      encodeUrlStr(new URL('http://www.baidu.com/'), { age: 18, uname: '书' })
    ).toEqual(new URL('http://www.baidu.com/?age=18&uname=%E4%B9%A6'));
  });
});
