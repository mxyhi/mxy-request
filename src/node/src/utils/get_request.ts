import { isHttps } from '../../../utils/url';
/**
 * @description 根据协议获取request方法
 */
export const getRequest = async (url: URL) => {
  const https = await import('node:https');
  const http = await import('node:http');

  return isHttps(url) ? https.request : http.request;
};
