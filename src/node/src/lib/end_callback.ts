import { IncomingMessage } from 'node:http';
import { RequestReject, RequestResolve } from '../types/promise';
import { formatJsonErrorIsStr } from '../../../utils/response';
import { getResponse } from '../utils/get_response';

export const onEndCallback =
  (
    resolve: RequestResolve,
    reject: RequestReject,
    res: IncomingMessage,
    data: { chunk: string }
  ) =>
  () => {
    if (res.statusCode === 200) {
      resolve(getResponse(res, formatJsonErrorIsStr(data.chunk), 200, 'OK'));
    } else {
      reject(getResponse(res, null));
    }
  };
