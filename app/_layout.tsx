import "../global.css";
import { Stack } from "expo-router";
import QueryProvider from "./providers/QueryProvider";
import { useColorScheme } from "react-native";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";

export default function RootLayout() {
  const isDarKMode = useColorScheme() === "dark";
  return (
    <ThemeProvider value={isDarKMode ? DarkTheme : DefaultTheme}>
      <QueryProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </QueryProvider>
    </ThemeProvider>
  );
}
