/**
 * @description url处理，增加query参数
 */
export const encodeUrlStr = (url: URL, params: Record<string, any> = {}) => {
  Object.keys(params).forEach(key => {
    url.searchParams.set(key, params[key]);
  });
  return url;
};

export default encodeUrlStr;
