# request example

## 支持 node & browser

### example

- js

```js
import request from 'mxy-request';

// 默认get
request('https://target.com').then();

request({
  url: 'https://arget.com/api',
  method: 'GET',
  params: {
    unescape: 81,
    version: 'v1.91',
    appid: '433615261176',
    app_secret: 'I42og6Lm111',
  },
}).then();

request({
  url: 'https://target.com/api',
  method: 'POST',
  data: {
    uname: 'uname',
    key: 'key',
  },
});
```

- ts

```ts
request<{ name: string; url: string }>('https://target.com').then(response => {
  // response.data type is { name: string; url: string }
});

request('https://target.com').then(response => {
  // response.data type is any
});
```
