/**
 * @description: 判断是否是浏览器环境
 */
const isBrowser = (() => {
  try {
    return window && true;
  } catch (error) {
    return false;
  }
})();

export { isBrowser };
