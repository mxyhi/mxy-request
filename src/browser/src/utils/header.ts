export const setHeaders = (
  xmlHttp: XMLHttpRequest,
  headers: Record<string, string>
) => Object.keys(headers).forEach(key => xmlHttp.setRequestHeader(key, headers[key]));
