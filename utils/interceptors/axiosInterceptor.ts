import axios from "axios";
export const axiosInterceptor = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  withCredentials: true,
});

axiosInterceptor.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosInterceptor.interceptors.response.use((response) => response, async (error) => {
    const originalRequest = error.config;
    if(error?.response?.status === 401 && !originalRequest._retry){
        originalRequest._retry = true;
        await axiosInterceptor.post("/auth/refresh");
        return axios(originalRequest);
    }
    return Promise.reject(error);
});
