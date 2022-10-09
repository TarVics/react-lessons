import axios from "axios";
import {createBrowserHistory} from 'history';

import {owu} from "../configs";
import {authService} from "./auth.service";

const history = createBrowserHistory();

const axiosService = axios.create(owu.config);
let isRefreshing = false;

/*
// Request interceptors for API calls
axios.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Response interceptor for API calls
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if(error.response.status == 403){
            refreshToken()
        }
    }
);
*/


// axiosService.interceptors.request.use((config) => {
//     const access = authService.getAccessToken();
//
//     if (access) {
//         config.headers.Authorization = `Bearer ${access}`
//     }
//
//     return config
// })

/*
const axios = require('axios');
const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async config => {
    const value = await redisClient.get(rediskey)
    const keys = JSON.parse(value)
    config.headers = {
      'Authorization': `Bearer ${keys.access_token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return config;
  },
  error => {
    Promise.reject(error)
});

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;
    const access_token = await refreshAccessToken();
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    return axiosApiInstance(originalRequest);
  }
  return Promise.reject(error);
});
*/

/*
// @/src/common/axiosPrivate.js
import axios from "axios";

import { memoizedRefreshToken } from "./refreshToken";

axios.defaults.baseURL = "http://localhost:3333/api";

axios.interceptors.request.use(
  async (config) => {
    const session = JSON.parse(localStorage.getItem("session"));

    if (session?.accessToken) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${session?.accessToken}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      const result = await memoizedRefreshToken();

      if (result?.accessToken) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${result?.accessToken}`,
        };
      }

      return axios(config);
    }
    return Promise.reject(error);
  }
);

export const axiosPrivate = axios;

*/

axiosService.interceptors.request.use(
    async config => {
        const access = authService.getAccessToken();

        if (access) {
            config.headers.Authorization = `Bearer ${access}`
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosService.interceptors.response.use((config) => {
        return config
    },
    async (error) => {
        const config = error?.config;
        const refresh = authService.getRefreshToken();

        if (error?.response?.status === 401 && refresh && !isRefreshing){
            isRefreshing = true

            try{
                const {data} = await authService.refresh(refresh);
                authService.setTokens(data);

                if (data?.access) {
                    config.headers = {
                        ...config.headers,
                        authorization: `Bearer ${data?.access}`,
                    }
                }
            }catch (e){
                authService.deleteToken()
                history.replace('/login?expSession=true')
            }

            isRefreshing = false;
            return axiosService(config)
        }

        return Promise.reject(error)
    }
)

export {
    axiosService,
    history
}
