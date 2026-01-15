import { Image, Text, useColorScheme, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "./components/MyButton";
import { router } from "expo-router";

const Home = () => {
  const isDarkMode = useColorScheme() === "dark";
  const onContinue = () => {
    router.push("/auth/register");
  };
  return (
    <SafeAreaView
      className={`${isDarkMode && "bg-stone-800"} flex-1 items-center justify-around p-5 gap-6`}
    >
      <View className=" items-center gap-7">
        <Text
          className={`${isDarkMode && "text-white"} text-2xl font-semibold`}
        >
          The Momo House
        </Text>
        <Image
          source={require("@/assets/images/MomoHouse.png")}
          className="w-24 h-24 rounded-full"
        />
        <MyButton title="Continue" onPress={onContinue} />
      </View>
      <View>
          <Text className={`${isDarkMode && 'text-white'}`}>Developed By Pranaya Ghimire</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
