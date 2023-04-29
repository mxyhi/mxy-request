import { formatJsonErrorIsStr } from './response';

describe('utils response', () => {
  it('formatJsonErrorIsStr', () => {
    expect(formatJsonErrorIsStr('{"name":"书"}')).toEqual({ name: '书' });
    expect(formatJsonErrorIsStr('"name":"书"}')).toBe('"name":"书"}');
  });
});
