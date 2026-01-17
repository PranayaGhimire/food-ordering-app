import { StyleSheet, useColorScheme } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { BookOpen, Contact, House, Menu, User, Utensils } from "lucide-react-native";
const TabsLayout = () => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: { backgroundColor: isDarkMode ? "#292524" :"white" },
        tabBarActiveTintColor:isDarkMode ? "white" :'black',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <House size={28}  color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About Us",
          tabBarIcon: ({ color }) => <BookOpen color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact Us",
          tabBarIcon: ({ color }) => <Contact color={color} />,
        }}
      />
      <Tabs.Screen
        name="menus"
        options={{
          title:"Menus",
          tabBarIcon: ({color}) => <Utensils color={color}/>
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
