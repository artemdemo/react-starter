export type ResponseMockOptions = {
  data?: any;
};

export class ResponseMock {
  data: any;

  constructor(options: ResponseMockOptions) {
    this.data = options.data;
  }
}
