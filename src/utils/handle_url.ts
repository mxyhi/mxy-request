import { isURL, isURLStr } from './url';

export const handleUrl = (url: string | URL) => {
  if (!isURL(url)) {
    if (isURLStr(url as string)) {
      return new URL(url);
    } else {
      return { httpStatusCode: 404, httpStatusTxt: 'Not Found', data: null };
    }
  }
  return url as URL;
};
