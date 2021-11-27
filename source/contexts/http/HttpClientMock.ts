import { RequestMethod, RequestMock } from './RequestMock';

export class HttpClientMock {
  private requestMocks: Set<RequestMock> = new Set();

  constructor() {}

  setRequestMock(requestMock: RequestMock) {
    this.requestMocks.add(requestMock);
  }

  setRequestMocks(requestMocks: RequestMock[]) {
    requestMocks.forEach((requestMock) => this.setRequestMock(requestMock));
  }

  private request(method: RequestMethod, url: string) {
    for (const requestMock of this.requestMocks) {
      const isMethod = requestMock.getMethod() === method;
      if (isMethod && requestMock.getUrl() === url) {
        return Promise.resolve(requestMock.getResponse());
      }
    }
    throw new Error(`[${method}] Mock for "${url}" is not provided`);
  }

  post(url: string) {
    return this.request(RequestMethod.POST, url);
  }

  get(url: string) {
    return this.request(RequestMethod.GET, url);
  }

  put(url: string) {
    return this.request(RequestMethod.PUT, url);
  }

  delete(url: string) {
    return this.request(RequestMethod.DELETE, url);
  }
}
