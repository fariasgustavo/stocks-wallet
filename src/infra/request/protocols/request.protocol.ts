import { AxiosRequestConfig } from 'axios';

export type Response<T = any> = {
  status: number;
  data: T;
};

export interface RequestProtocol {
  get(
    endpoint: string,
    config?: AxiosRequestConfig | undefined,
  ): Promise<Response>;
}
