import { ResponseMock } from './ResponseMock';

export enum RequestMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type RequestMockOptions = {
  url: string;
  method: RequestMethod;
  response: ResponseMock;
};

export class RequestMock {
  constructor(private readonly options: RequestMockOptions) {}

  getMethod(): RequestMethod {
    return this.options.method;
  }

  getUrl(): string {
    return this.options.url;
  }

  getResponse(): ResponseMock {
    return this.options.response;
  }
}
