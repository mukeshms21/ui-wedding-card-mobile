import axios from 'axios';
import {API_TIMEOUT, BASE_URL} from './apiConstant';

export const createAxiosInstance = (reqHeader: any, baseUrl = BASE_URL) => {
  return axios.create({
    baseURL: baseUrl,
    headers: reqHeader,
    timeout: API_TIMEOUT,
  });
};
