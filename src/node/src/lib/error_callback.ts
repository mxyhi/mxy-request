import { IncomingMessage } from 'node:http';
import { RequestReject } from '../types/promise';
import { getResponse } from '../utils/get_response';

export const clientErrorCallback = (reject: RequestReject) => (error: Error) =>
  reject({
    httpStatusCode: 404,
    httpStatusTxt: error.message,
    data: null,
  });

export const onErrorCallback =
  (reject: RequestReject, res: IncomingMessage) => (error: Error) =>
    reject(getResponse(res, null, res.statusCode, error.message));
