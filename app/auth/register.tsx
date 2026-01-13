import { Text, TextInput, useColorScheme, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "../components/MyButton";
import { Link } from "expo-router";
import {Picker} from '@react-native-picker/picker';

const Register = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedRole,setSelectedRole] = useState();
  const onRegister = () => {

  }
  return (
    <SafeAreaView className={`${isDarkMode && 'bg-stone-900'} flex-1 justify-center`}>
      <View className="p-10 gap-5">
        <Text className={`${isDarkMode && 'text-white'} text-2xl font-semibold`}>Create Your Account</Text>
        <Text className={`${isDarkMode && 'text-white'} text-xl font-medium`}>Enter your credentials below to create your account</Text>
        <View className="gap-3">
          <Text className={` ${isDarkMode && 'text-white'} text-xl font-medium`}>Full Name</Text>
          <TextInput
            placeholder="Enter Your Full Name"
            className="bg-cyan-200 px-3 rounded-md"
          />
        </View>
        <View className="gap-2">
          <Text className={`${isDarkMode && 'text-white'} text-xl font-medium`}>User Name</Text>
          <TextInput
            placeholder="Enter Your User Name"
            className="bg-cyan-200 px-3 rounded-md"
          />
        </View>
        <View className="gap-2">
          <Text className={`${isDarkMode && 'text-white'} text-xl font-medium`}>Email</Text>
          <TextInput
            placeholder="Enter Your Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            className="bg-cyan-200 px-3 rounded-md"
          />
        </View>
        <View className="gap-2">
          <Text className={`${isDarkMode && 'text-white'} text-xl font-medium`}>Password</Text>
          <TextInput
            placeholder="Enter Your Password"
            secureTextEntry={true}
            className="bg-cyan-200 px-3 rounded-md"
          />
        </View>
        <View className="gap-2">
          <Text className={`${isDarkMode && 'text-white'} text-xl font-medium`}>Role</Text>
          <Picker selectedValue={selectedRole} onValueChange={(value) => setSelectedRole(value)} dropdownIconRippleColor={'cyan'} dropdownIconColor={'cyan'}  className="bg-cyan-200">
              <Picker.Item label="User" value={'USER'}/>
              <Picker.Item label="Admin" value={'ADMIN'}/>
          </Picker>
        </View>
        <MyButton title="Register" onPress={onRegister}/>
        <Text className={`${isDarkMode && 'text-white'} text-[18px]`}>Already a user ? <Link href={`/auth/login`} className="font-semibold">Login</Link> Here</Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;
