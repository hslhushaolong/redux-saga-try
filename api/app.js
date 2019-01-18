import request from './index';

export async function fetchAppurltry(params) {
    console.log(JSON.stringify(params));
  return request('/123',
    {
      method: 'POST',
      body: JSON.stringify(params),
    }).then(data => data);
}