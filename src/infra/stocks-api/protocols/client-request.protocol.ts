import { AxiosInstance } from 'axios';

export interface ClientRequestProtocol {
  request(): AxiosInstance;
}
