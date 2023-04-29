import { RequestParamsOptions } from "../types/request";
import { handleUrl } from "./handle_url";
import { isURL } from "./url";

export const handleOptions= (options:RequestParamsOptions | string | URL) => {
    const isOptions = typeof options !== 'string' && !isURL(options);
      const {
        url: path,
        method = 'GET',
        params: queryParams = {},
        data = {},
        headers = {},
      } = isOptions ? options : ({} as any);
      let url;
      if (isOptions) {
        url = handleUrl(path);
      } else {
        url = handleUrl(options as string | URL);
      }
      return {
        url,
        method,
        queryParams,
        data,
        headers
      }
  }