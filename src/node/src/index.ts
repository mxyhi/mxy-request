import encodeUrlStr from '../../utils/encode_url';
import { RequestResponseType, RequestParamsOptions } from '../../types/request';
import { isURL } from '../../utils/url';
import { isBrowser } from '../../utils/isBrowser';
import { getRequest } from './utils/get_request';
import { requestCallback } from './lib/request_callback';
import { clientErrorCallback } from './lib/error_callback';
import { handleOptions } from '../../utils/handle_options';

/**
 * @default GET
 */
export function nodeRequest<T = any>(
  url: string | URL
): Promise<RequestResponseType<T>>;

export function nodeRequest<T = any>(
  options: RequestParamsOptions
): Promise<RequestResponseType<T>>;

export function nodeRequest<T = any>(
  options: RequestParamsOptions | string | URL
): Promise<RequestResponseType<T>> {
  return new Promise((resolve, reject) => {
    const { url, method, queryParams, data, headers } = handleOptions(options);
    if (!isURL(url)) return reject(url);
    getRequest(url as URL).then(request => {
      const client = request(
        encodeUrlStr(url as URL, queryParams),
        { method, headers },
        requestCallback(resolve, reject)
      );
      client.on('error', clientErrorCallback(reject));
      client.write(JSON.stringify(data));
      client.end();
    });
  });
}

const request = isBrowser ? null : nodeRequest;

export { request };

export default request;
