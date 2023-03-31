import axios, { AxiosError, AxiosRequestConfig } from 'axios';

interface AxiosCustomRequest extends AxiosRequestConfig {
  retryCount: number;
}

const MAX_RETRY_COUNT = 2;
const baseApi = axios.create({
  baseURL: `https://${process.env.REACT_APP_API_SERVER_URL}/api`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
  timeout: 7000,
});

baseApi.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('extremeToken');
  if (config.headers)
    config.headers.extremeToken = accessToken
      ? (accessToken as string)
      : (false as boolean);
  return config;
});

baseApi.interceptors.response.use(
  (config) => {
    return config;
  },
  (err: AxiosError) => {
    const config = err.config as AxiosCustomRequest;
    config.retryCount = config.retryCount ?? 0;

    const shouldRetry = config.retryCount < MAX_RETRY_COUNT;
    if (shouldRetry) {
      config.retryCount += 1;
      return axios(config);
    }
    return Promise.reject(err);
  }
);

export const usersApi = {};
export const todosApi = {};
export const timerApi = {};
export const settingsApi = {};
