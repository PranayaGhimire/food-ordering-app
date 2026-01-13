import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { axiosInterceptor } from "../interceptors/axiosInterceptor";

export const useRegister = () =>
    useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/auth/register`,data);
            return response.data;
        }
    });

export const useLogin = () =>
    useMutation({
        mutationFn: async (data) => {
            const response = await axiosInterceptor.post(`/auth/login`,data);
            return response.data;
        }
    })