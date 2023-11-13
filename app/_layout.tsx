import { Stack } from "expo-router/stack";
import {
  useFonts,
  ShortStack_400Regular,
} from "@expo-google-fonts/short-stack";

export default function Layout() {
  let [fontsLoaded] = useFonts({
    ShortStack_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily: "ShortStack_400Regular",
        },
      }}
    />
  );
}
