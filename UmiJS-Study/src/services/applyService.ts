import request from 'umi-request';

export async function applyRequest(payload: any) {
  const { company, detail, email, username, phone } = payload;

  const response = await request('/api/index/apply', {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    data: `company_name=${company}&content=${detail}&email=${email}&name=${username}&phone=${phone}`,
  });

  return Promise.resolve({
    applyData: {
      ...response,
    },
  });
}
