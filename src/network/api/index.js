import {handleCatchError} from './errorHandler';
import {handleResponse} from './responseHandler';
import {DELETE, GET, PATCH, POST, PUT} from './apiConstant';
import {checkInternetConnectivity} from '../internetConnection';
import {createAxiosInstance} from './instance';
import {NO_INTERNET} from './errorMessageConst';

export const callApi = async (
  url: string,
  type = GET,
  data = {},
  header = {},
  customBaseUrl = '',
) => {
  return checkInternetConnectivity().then(isInternetConnected => {
    if (isInternetConnected) {
      const reqHeader = Object.assign(header, {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      });
      const axiosInstance =
        customBaseUrl !== ''
          ? createAxiosInstance(reqHeader, customBaseUrl)
          : createAxiosInstance(reqHeader);
      if (__DEV__) {
        console.log('API URL - ', url);
      }
      switch (type) {
        case GET:
          return axiosInstance
            .get(url)
            .then(response => {
              return handleResponse(url, response, GET);
            })
            .catch(err => {
              return handleCatchError(url, err);
            });

        case POST:
          return axiosInstance
            .post(url, data)
            .then(response => {
              return handleResponse(url, response, POST);
            })
            .catch(err => {
              return handleCatchError(url, err);
            });

        case PUT:
          return axiosInstance
            .put(url, data)
            .then(response => {
              return handleResponse(url, response, PUT);
            })
            .catch(err => {
              return handleCatchError(url, err);
            });

        case DELETE:
          return axiosInstance
            .delete(url)
            .then(response => {
              return handleResponse(url, response, DELETE);
            })
            .catch(err => {
              return handleCatchError(url, err);
            });

        case PATCH:
          return axiosInstance
            .patch(url, data)
            .then(response => {
              return handleResponse(url, response, PATCH);
            })
            .catch(err => {
              return handleCatchError(url, err);
            });
      }
    } else {
      return Promise.reject(NO_INTERNET);
    }
  });
};
