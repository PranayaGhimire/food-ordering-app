import { StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { BookOpen, Contact, Home } from "lucide-react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false  }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{ title: "About Us", tabBarIcon: ({color}) => <BookOpen color={color} /> }}
      />
      <Tabs.Screen
        name="contact"
        options={{ title: "Contact Us", tabBarIcon: ({color}) => <Contact color={color} /> }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
