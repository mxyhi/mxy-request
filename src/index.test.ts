import request from './index';

describe('index', () => {
  it('get url', () => {
    request('https://v0.yiketianqi.com/api').then(res => {
      expect((res.data as any).errCode).toBe(100);
    });
  });
  it('get ok', () => {
    // 测试GET成功请求
    // 测试链接：https://v0.yiketianqi.com/api?unescape=1&version=v91&appid=43656176&appsecret=I42og6Lm
    request({
      url: 'https://v0.yiketianqi.com/api',
      method: 'GET',
      params: {
        unescape: 1,
        version: 'v91',
        appid: '43656176',
        appsecret: 'I42og6Lm',
      },
    }).then(({ httpStatusCode, httpStatusTxt, data }) => {
      expect((data as any).errCode).toBe(100);
      // expect(data).toEqual({ errcode: 100, errmsg: '调用次数过高[144546]' });
      //断言： data?.city==="郑州" && data?.data?.length > 0
    });
  });

  it('get error', () => {
    // 测试失败请求
    request({
      url: '随便写一个错误的URL',
      method: 'GET',
    }).catch(({ httpStatusCode, httpStatusTxt }) => {
      //断言 httpStatusCode === 404
      expect(httpStatusCode).toBe(404);
    });
  });

  it('post ok', () => {
    request({
      url: 'https://tenapi.cn/v2/qzone',
      method: 'POST',
      params: {
        qq: 2528988582,
      },
    }).then(({ data }) => {
      const dataIsObject = typeof data === 'object' && data !== null;
      if (dataIsObject) {
        expect(data?.code).toBe(200);
        expect((data.data as any).name).toBe('coding');
      }
    });
    //测试链接：https://tenapi.cn/v2/phone
    //测试 application/x-www-form-urlencoded格式的请求
    // request({
    //   url: 'https://tenapi.cn/v2/phone',
    //   method: 'POST',
    //   headers: { 'content-type': 'application/x-www-form-urlencoded' },
    //   data: {
    //     tel: '自己的手机号码',
    //   },
    // }).then(({ httpStatusCode, httpStatusTxt, data }) => {
    //   //断言 data?.code === 200 && data?.data?.local = "某个省市"
    // });

    //暂时没找到公开的POST、入参json的案例，可以使用智慧云测试链接
    //测试链接：http://http://scpcs.banu.cn:6625/api/tag
    // 请先开起 test/request_test/test-server.js 本地服务，再运行测试用例
    request({
      url: 'http://localhost:8021',
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: {
        name: '我是一个标签',
        type: 1,
      },
    }).then(({ httpStatusCode, httpStatusTxt, data }) => {
      //断言 data?.success === true && data?.data?.tag_id 存在
      expect(data).toEqual({
        name: '我是一个标签',
        type: 1,
      });
    });
  });
});
