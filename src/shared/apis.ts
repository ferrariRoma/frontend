import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { IRanking, ITotalFocusTime } from './interfaces';
import LoginEvent from './LoginEvent';

interface AxiosCustomRequest extends AxiosRequestConfig {
  retryCount: number;
}

const LOGINEVENT = LoginEvent.getInstance();

const MAX_RETRY_COUNT = 2;

const baseApi = axios.create({
  // TODO : 배포 시 수정할 것
  // baseURL: process.env.REACT_APP_API_SERVER_URL,
  baseURL: `https://${process.env.REACT_APP_API_SERVER_URL_ORIGINAL}/api`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
  timeout: 7000,
});

baseApi.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('extremeToken');
  const email = localStorage.getItem('extremeEmail');

  if (config.headers) {
    config.headers['extremeToken'] = accessToken
      ? (accessToken as string)
      : (false as boolean);
    config.headers['extremeEmail'] = email
      ? (email as string)
      : (false as boolean);
  }
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
  },
);

export const usersApi = {
  async login() {
    const data = window.open(
      `http://${process.env.REACT_APP_API_SERVER_URL_TEST}/api/users/callback/google/start`,
      '_self',
    );
    return data;
  },
  getRanking: async () => {
    return {
      group: [
        {
          '0~600': 0,
          '600~1200': 0,
          '1200~1800': 0,
          '1800~2400': 0,
          '2400~3000': 0,
          '3000~3600': 1,
          '3600~4200': 0,
          '4200~4800': 0,
          '4800~5400': 0,
          '5400~6000': 0,
        },
      ],
      user: {
        id: 123,
        time: 54321,
      },
    } as IRanking;
  },
  getRecords: async () => {
    return { daily: 207, weekly: 3098, monthly: -20325 } as ITotalFocusTime;
    // return baseApi.get('timer/progress');
  },
  logout(): void {
    localStorage.removeItem('extremeEmail');
    window.dispatchEvent(LOGINEVENT.getEvent());
    return localStorage.removeItem('extremeToken');
  },
};
export const todosApi = {};
export const timerApi = {};
export const settingsApi = {};
