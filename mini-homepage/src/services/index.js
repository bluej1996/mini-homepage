import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
const TIMEOUT = 10 * 1000;

/** axios 응답 타입 제어를 위해서 기존 axios client를 커스텀함.
 * @see https://stack94.tistory.com/entry/TypeScript-Axios-TypeScript-%EC%A0%81%EC%9A%A9%ED%95%98%EC%97%AC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90
 *  msw서버를 사용할 것인지, 실제 서버 호출할 것인지 선택가능할 듯
 */
class service {
  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      timeout: TIMEOUT,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
    });
  }

  get(path, config) {
    return this.client.get(path, config);
  }

  post(path, body, config) {
    return this.client.post(path, body, config);
  }

  postFormData(path, formData) {
    return this.client.postForm(path, formData);
  }

  put(path, body, config) {
    return this.client.put(path, body, config);
  }

  patch(path, body, config) {
    return this.client.patch(path, body, config);
  }

  delete(path, config) {
    return this.client.delete(path, config);
  }
}
export default service;
