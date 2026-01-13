import "../global.css";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import QueryProvider from "./providers/QueryProvider";

export default function RootLayout() {
  const color = useColorScheme();

  return (
  <QueryProvider>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="(tabs)" />
      {/* <Stack.Screen name="add"/> */}
    </Stack>
  </QueryProvider>);
}
