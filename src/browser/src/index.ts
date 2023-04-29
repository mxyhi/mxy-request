import { RequestParamsOptions, RequestResponseType } from '../../types/request';
import encodeUrlStr from '../../utils/encode_url';
import { handleOptions } from '../../utils/handle_options';
import { isBrowser } from '../../utils/isBrowser';
import { formatJsonErrorIsStr } from '../../utils/response';
import { isURL } from '../../utils/url';
import { setHeaders } from './utils/header';

/**
 * @default GET
 */
export function browserRequest<T = any>(
  url: string | URL
): Promise<RequestResponseType<T>>;

export function browserRequest<T = any>(
  options: RequestParamsOptions
): Promise<RequestResponseType<T>>;

export function browserRequest<T = any>(
  options: RequestParamsOptions | string | URL
): Promise<RequestResponseType<T>> {
  return new Promise((resolve, reject) => {
    const { url, method, queryParams, data, headers } = handleOptions(options);
    if (!isURL(url)) return reject(url);
    const xmlHttp = new XMLHttpRequest();
    setHeaders(xmlHttp, headers);
    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        resolve({
          httpStatusCode: xmlHttp.status,
          httpStatusTxt: xmlHttp.statusText,
          data: formatJsonErrorIsStr(xmlHttp.response) as any,
        });
      }
    };
    xmlHttp.addEventListener('error', () => {
      reject({
        httpStatusCode: xmlHttp.status,
        httpStatusTxt: xmlHttp.statusText,
        data: null,
      });
    });
    xmlHttp.open(method, encodeUrlStr(url as URL, queryParams));
    xmlHttp.send(JSON.stringify(data));
    return xmlHttp;
  });
}

export const request = isBrowser ? browserRequest : null;

export default request;
