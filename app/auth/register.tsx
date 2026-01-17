import { Text, TextInput, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "../components/MyButton";
import { Link, router } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import { Controller, useForm } from "react-hook-form";
import { IRegister } from "@/utils/interfaces/authInterface";
import { useRegister } from "@/utils/apis/authApi";
import Toast from "react-native-toast-message";

const Register = () => {
  const { mutate: register } = useRegister();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    defaultValues: {
      fullName: "",
      username: "",
      phoneNumber: "",
      email: "",
      password: "",
      role: "USER",
    },
  });
  const isDarkMode = useColorScheme() === "dark";
  const onRegister = (data: IRegister) => {
    register(data, {
      onSuccess: (response) => {
        Toast.show({
          type: "success",
          text1: response.message,
        });
        router.push("/auth/login");
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
          Sign Up
        </Text>
        <Text className={`${isDarkMode && "text-white"} text-xl font-medium`}>
          Enter your credentials below to create your account
        </Text>
        <View className="gap-3">
          <Text
            className={` ${isDarkMode && "text-white"} text-xl font-medium`}
          >
            Full Name
          </Text>
          <Controller
            control={control}
            name="fullName"
            rules={{ required: "Full Name is required" }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Enter Your Full Name"
                onChangeText={onChange}
                value={value}
                className="bg-white px-3 rounded-md"
              />
            )}
          />
          {errors.fullName && (
            <Text className="text-red-500">{errors.fullName.message}</Text>
          )}
        </View>
        <View className="gap-2">
          <Text className={`${isDarkMode && "text-white"} text-xl font-medium`}>
            User Name
          </Text>
          <Controller
            control={control}
            name="username"
            rules={{ required: "Username is required" }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                placeholder="Enter Your User Name"
                className="bg-white px-3 rounded-md"
              />
            )}
          />
          {errors.username && (
            <Text className="text-red-500">{errors.username.message}</Text>
          )}
        </View>
        <View className="gap-2">
          <Text className={`${isDarkMode && "text-white"} text-xl font-medium`}>
            Phone Number
          </Text>
          <Controller
            control={control}
            name="phoneNumber"
            rules={{ required: "Phone number is required" }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={onChange}
                value={value}
                placeholder="Enter Your Phone Number"
                className="bg-white px-3 rounded-md"
              />
            )}
          />
          {errors.phoneNumber && (
            <Text className="text-red-500">{errors.phoneNumber.message}</Text>
          )}
        </View>
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
        <View className="gap-2">
          <Text className={`${isDarkMode && "text-white"} text-xl font-medium`}>
            Role
          </Text>
          <Controller
            control={control}
            name="role"
            render={({ field: { onChange, value } }) => (
              <View className="bg-white rounded-md p-0">
                <Text>{" "}</Text>
                <Picker
                  selectedValue={value}
                  onValueChange={onChange}
                  dropdownIconRippleColor={"white"}
                  dropdownIconColor={"white"}
                  className="bg-white"
                >
                  <Picker.Item label="User" value={"USER"} />
                  <Picker.Item label="Admin" value={"ADMIN"} />
                </Picker>
              </View>
            )}
          />
          {errors.role && (
            <Text className="text-red-500">{errors.role.message}</Text>
          )}
        </View>
        <MyButton title="Register" onPress={handleSubmit(onRegister)} />
        <Text className={`${isDarkMode && "text-white"} text-[18px]`}>
          Already a user ?<Text>{" "}</Text> 
          <Link href={`/auth/login`} className="font-semibold">
            Sign In
          </Link><Text>{" "}</Text>
          Here
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;
