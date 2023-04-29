/**
 * @description 判断是否是URL字符串
 */
export const isURLStr = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (_error) {
    return false;
  }
};

/**
 * @description 判断是否是URL对象
 */
export const isURL = (url: any) => url instanceof URL;

/**
 * @description 判断是否为https协议
 */
export const isHttps = (url: URL) => url.protocol === 'https:';
