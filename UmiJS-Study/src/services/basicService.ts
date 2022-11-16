import request from 'umi-request';

export async function getBasicData() {
  const response = await request('/api/index/basic');
  return Promise.resolve({
    ...response,
  });
}
