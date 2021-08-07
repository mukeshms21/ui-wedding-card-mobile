import {UNKNOWN_ERROR} from './errorMessageConst';

export const handleCatchError = (url: string, err: any) => {
  if (__DEV__) {
    console.log('api call error --- ', url, err);
  }
  return Promise.reject(err?.response?.data ?? UNKNOWN_ERROR);
};
