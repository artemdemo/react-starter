export type ResponseMockOptions = {
  data?: any;
};

export class ResponseMock {
  data: any;

  constructor(private readonly options: ResponseMockOptions) {
    this.data = options.data;
  }
}
