import { IncomingMessage } from 'node:http';
import { RequestReject, RequestResolve } from '../types/promise';
import { onErrorCallback } from './error_callback';
import { onDataCallback } from './data_callback';
import { onEndCallback } from './end_callback';

export const requestCallback =
<T=any>(resolve: RequestResolve<T>, reject: RequestReject) =>
  (res: IncomingMessage) => {
    const data = { chunk: '' };
    res.on('data', onDataCallback(data));
    res.on('error', onErrorCallback(reject, res));
    res.on('end', onEndCallback(resolve, reject, res, data));
  };
