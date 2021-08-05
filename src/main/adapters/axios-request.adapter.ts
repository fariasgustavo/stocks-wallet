import axios, { AxiosInstance } from 'axios';

export const adaptRequest = (): AxiosInstance => {
  const request = axios.create({
    baseURL: 'https://www.styvio.com',
  });

  return request;
};
