import { RequestResponseType } from '../../../types/request';

export type RequestResolve<T=any> = (
  value: RequestResponseType<T> | PromiseLike<RequestResponseType<T>>
) => void;

export type RequestReject = (reason?: any) => void;
