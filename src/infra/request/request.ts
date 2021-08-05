import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { RequestProtocol, Response } from './protocols/request.protocol';

export class RequestService implements RequestProtocol {
  constructor(private client: AxiosInstance) {}

  async get(
    endpoint: string,
    config?: AxiosRequestConfig | undefined,
  ): Promise<Response> {
    const response: AxiosResponse = await this.client.get(endpoint, config);
    const result: Response = {
      data: response.data,
      status: response.status,
    };

    return result;
  }
}
