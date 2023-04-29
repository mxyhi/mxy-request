/**
 * @description 尝试格式化到JSON，如果失败则返回原字符串
 */
export const formatJsonErrorIsStr = (data: any) => {
  const dataStr = data.toString();
  try {
    return JSON.parse(dataStr) as Record<string, any>;
  } catch (_error) {
    return dataStr as string;
  }
};
