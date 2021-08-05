import axios, { AxiosInstance } from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

export const adaptRequest = (): AxiosInstance => {
  const request = axios.create({
    baseURL: process.env.STOCKS_API_HOST,
  });

  return request;
};
