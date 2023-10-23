import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import cookies from 'js-cookie';

export interface ConsoleError {
  status: number;
  data: unknown;
}

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const user = cookies.get('user');
  const token = (user && JSON.parse(user)?.access_token) || '';
  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`);
  }
  return config;
};

export const successInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

export const errorInterceptor = async (error: AxiosError): Promise<void> => {
  if (error.response?.status === 401) {
    await Promise.reject(error);
  } else {
    if (error.response) {
      // TODO: Refresh token
      const errorMessage: ConsoleError = {
        status: error.response.status,
        data: error.response.data,
      };
      console.error(errorMessage);
    } else if (error.request) {
      console.error(error.request);
    } else {
      console.error('Error', error.message);
    }
    await Promise.reject(error);
  }
};
