import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { axiosInterceptor } from "../interceptors/axiosInterceptor";

export const useGetFoods = () =>
  useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/foods`
      );
      return response.data;
    },
  });

export const useAddFood = (data) =>
  useMutation({
    mutationFn: async () => {
      const response = await axiosInterceptor.post(`/foods`, data);
      return response.data;
    },
  });

export const useUpdateFood = () =>
  useMutation({
    mutationFn: async (data) => {
      const response = await axiosInterceptor.put(`/foods/${data.id}`, data);
      return response.data;
    },
  });

export const useDeleteFood = () =>
  useMutation({
    mutationFn: async (id: string) => {
      const response = await axiosInterceptor.delete(`/foods/${id}`);
      return response.data;
    },
  });
