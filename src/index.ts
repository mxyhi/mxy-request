import browserRequest from './browser';
import nodeRequest from './node';
import { isBrowser } from './utils/isBrowser';

const request = isBrowser ? browserRequest! : nodeRequest!;
export default request;
