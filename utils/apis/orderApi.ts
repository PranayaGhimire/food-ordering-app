import { useMutation } from "@tanstack/react-query";
import { axiosInterceptor } from "../interceptors/axiosInterceptor";
import { ICreateOrder } from "../interfaces/orderInterface";

export const useCreateOrder = () =>
    useMutation({
        mutationFn: async (data:ICreateOrder) => {
            const response = await axiosInterceptor.post(`/orders`,data);
            return response.data;
        }
    })