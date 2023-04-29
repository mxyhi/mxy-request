import { IncomingMessage } from 'node:http';

export const getResponse = (
  res: IncomingMessage,
  data: string | Record<string | number, unknown> | null,
  httpStatusCode: number = res.statusCode || 404,
  httpStatusTxt: string = res.statusMessage || 'Not Found'
) => ({
  httpStatusCode,
  httpStatusTxt,
  data,
});
