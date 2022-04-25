import axios from "axios";
import {
  ACCESS_TOKEN,
  BASE_URL,
  TOKEN_CYBERSOFT,
} from "../utils/constants/config";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
    TokenCybersoft: TOKEN_CYBERSOFT,
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    
    if (accessToken) {
      config.headers.Authorization = "Bearer " + accessToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
