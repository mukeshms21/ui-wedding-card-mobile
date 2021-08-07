import {NO_DATA_FOUND} from './errorMessageConst';

export const handleResponse = (url: string, response: any, method: string) => {
  if (response?.data) {
    if (__DEV__) {
      console.log(
        'method--',
        method,
        ', Url--',
        url,
        ', response--',
        response.data,
      );
    }
    return Promise.resolve(response);
  } else {
    return Promise.reject(NO_DATA_FOUND);
  }
};
