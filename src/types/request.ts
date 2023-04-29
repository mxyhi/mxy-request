import { type } from 'os';

export interface RequestParamsOptions {
  url: string | URL;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH';
  params?: Record<string, string | number>;
  data?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export interface RequestResponseType<T=any> {
  httpStatusCode: number;
  httpStatusTxt: string;
  data: T;
}