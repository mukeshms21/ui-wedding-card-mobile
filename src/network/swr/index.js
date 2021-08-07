import useSWR from 'swr';
import {createAxiosInstance} from '../api/instance';

export function swrGetApi(url: any, reqHeader: any) {
  const axiosInstance = createAxiosInstance(reqHeader);
  const {data, error} = useSWR(url, axiosInstance);
  return {
    data: data,
    loading: !error && !data,
    error: error,
  };
}
