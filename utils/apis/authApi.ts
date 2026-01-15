import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { axiosInterceptor } from "../interceptors/axiosInterceptor";
import { ILogin, IRegister } from "../interfaces/authInterface";

export const useRegister = () =>
    useMutation({
        mutationFn: async (data:IRegister) => {
            const response = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/auth/register`,data);
            return response.data;
        }
    });

export const useLogin = () =>
    useMutation({
        mutationFn: async (data:ILogin) => {
            const response = await axiosInterceptor.post(`/auth/login`,data);
            return response.data;
        }
    })