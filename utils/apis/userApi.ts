import { useQuery } from "@tanstack/react-query";
import { axiosInterceptor } from "../interceptors/axiosInterceptor";

export const useGetProfile = () =>
    useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const response = await axiosInterceptor.get(`/users/me`);
            return response.data;
        }
    })