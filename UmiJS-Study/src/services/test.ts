
import request from 'umi-request';

export async function getName(params: any) {
  const response = await request('http://silk.sev7n.cn/index/basic');

  return Promise.resolve({
    title: 'dva service test',
    basicData: {
      ...response.data,
    }
  });
}
