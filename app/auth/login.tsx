import { Text, TextInput, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "../components/MyButton";
import { Link, router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { ILogin } from "@/utils/interfaces/authInterface";
import { useLogin } from "@/utils/apis/authApi";
import Toast from "react-native-toast-message";

const Login = () => {
  const { mutate: login } = useLogin();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const isDarkMode = useColorScheme() === "dark";
  const onSignIn = (data: ILogin) => {
    login(data, {
      onSuccess: (response) => {
        Toast.show({
          type: "success",
          text1: response.message,
        });
        router.push("/(tabs)");
      },
      onError: () => {
        Toast.show({
          type: "error",
          text1: "Oops! Something Went Wrong",
        });
      },
    });
  };
  return (
    <SafeAreaView
      className={`${isDarkMode && "bg-stone-800"} flex-1 justify-center`}
    >
      <View className="p-10 gap-5">
        <Text
          className={`${isDarkMode && "text-white"} text-2xl font-semibold`}
        >
          Sign In
        </Text>
        <Text className={`${isDarkMode && "text-white"} text-xl font-medium`}>
          Enter your credentials below to log in to your account
        </Text>
       
        <View className="gap-2">
          <Text className={`${isDarkMode && "text-white"} text-xl font-medium`}>
            Email
          </Text>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Enter Your Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                value={value}
                onChangeText={onChange}
                className="bg-white px-3 rounded-md"
              />
            )}
          />
          {errors.email && (
            <Text className="text-red-500">{errors.email.message}</Text>
          )}
        </View>
        <View className="gap-2">
          <Text className={`${isDarkMode && "text-white"} text-xl font-medium`}>
            Password
          </Text>
          <Controller
            control={control}
            name="password"
            rules={{ required: "Password is required", minLength: 6 }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Enter Your Password"
                secureTextEntry={true}
                onChangeText={onChange}
                value={value}
                className="bg-white px-3 rounded-md"
              />
            )}
          />
          {errors.password && (
            <Text className="text-red-500">{errors.password.message}</Text>
          )}
        </View>
        <MyButton title="Sign In" onPress={handleSubmit(onSignIn)} />
        <Text className={`${isDarkMode && "text-white"} text-[18px]`}>
          Not a user ?{" "}
          <Link href={`/auth/register`} className="font-semibold">
            Sign Up
          </Link>{" "}
          Here
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
