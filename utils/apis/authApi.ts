import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { axiosInterceptor } from "../interceptors/axiosInterceptor";
import { ILogin, IRegister } from "../interfaces/authInterface";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

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

export const useLogout = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async () => {
            const response = await axiosInterceptor.post(`/auth/logout`);
            return response.data;
        },
        onSuccess: (response) => {
            router.push("/auth/login");
            queryClient.cancelQueries({queryKey:['profile']});
            Toast.show({type:'success',text1:response.message});
        },
        onError: () => Toast.show({type:'error',text1:"Oops! Something Went Wrong"})
    })
}