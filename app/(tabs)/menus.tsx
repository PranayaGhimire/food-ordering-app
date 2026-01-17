import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { useGetProfile } from "@/utils/apis/userApi";
import { useGetFoods } from "@/utils/apis/foodApi";
import { useCreateOrder } from "@/utils/apis/orderApi";
import MyButton from "../components/MyButton";
import { CircleCheckBig, X } from "lucide-react-native";

const Menus = () => {
  const isDarkMode = useColorScheme() === "dark";
  const { data: profile } = useGetProfile();
  const { data: foods } = useGetFoods();
  const { mutate: createOrder } = useCreateOrder();
  const onOrder = () => {
    const data = { user: profile?.data?._id, food: foods?.data?._id };
    createOrder(data, {
      onSuccess: (response) => {
        Toast.show({
          type: "success",
          text1: response.message,
        });
      },
      onError: () =>
        Toast.show({ type: "error", text1: "Oops! Something Went Wrong" }),
    });
  };
  return (
    <SafeAreaView
      className={`${isDarkMode && "bg-stone-800"} flex-1 p-5 gap-4`}
    >
      <Text className={`${isDarkMode && "text-white"} text-xl font-semibold`}>
        Menus
      </Text>
      <View>
        <FlatList
          data={foods?.data}
          keyExtractor={(item) => item._id}
          contentContainerClassName="gap-3"
          renderItem={({ item }) => (
            <View
              className={`${isDarkMode ? "bg-stone-600" : "bg-white"} p-5 gap-2 rounded-md`}
            >
              <View
                className={`${item.isAvailable ? "bg-green-500" : "bg-red-500"} w-44 p-2 rounded-md flex-row items-center justify-center gap-2`}
              >
                {" "}
                 {item.isAvailable ? <CircleCheckBig color={'white'} size={20}/> : <X color={'white'} size={20}/> }
                <Text className={`text-white text-xl text-center`}>
                 {item.isAvailable ? "Available" : "Not Available"}
                </Text>{" "}
              </View>
              <Text
                className={`${isDarkMode && "text-white"} text-xl font-medium`}
              >
                {item.name}
              </Text>
              <Text
                className={`${isDarkMode ? "text-stone-300" : "text-stone-500"} text-[18px]`}
              >
                Rs. {item.price}
              </Text>
              <Image
                source={{ uri: item.image }}
                className="w-30 h-40 rounded-md"
              />
              <MyButton title="Order" onPress={onOrder} />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Menus;

const styles = StyleSheet.create({});
