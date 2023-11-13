import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import {
  useFonts,
  ShortStack_400Regular,
} from "@expo-google-fonts/short-stack";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import Svg, { Path } from "react-native-svg";

export default function Home() {
  let [fontsLoaded, fontError] = useFonts({
    ShortStack_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onLayout={onLayoutRootView}
    >
      <Stack.Screen
        options={{
          headerTitleStyle: {
            fontFamily: "ShortStack_400Regular",
          },
          title: "Sketchat",
        }}
      />

      <Link href="create">
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Svg width={120} height={62} fill="none">
            <Path
              fill="#1e1e1e"
              stroke="#3C3C3C"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth={2.2}
              d="M16.506 2.083c5.944-.115 11.898-.057 17.828.097 5.34.104 13.607.933 20.425.664 4.565.518 9.176-.332 13.772.307 6.574-.077 13.13-1.07 19.729-.708 6.197.356 10.723.499 18.686.353 7.896-.55 11.503.108 10.948 7.78-.323 6.534-.179 12.12-.187 17.111.037 9.225 1.452 26.665-.604 29.455-3.149 4.043-10.618 1.148-15.26 1.237-4.253-.153-10.242 1.177-14.424.045-5.206-.717-8.761.704-13.989.326-5.295 0-10.439-.9-15.54.333-6.277.828-14.276.687-20.48-.545-6.231-.963-10.629-.068-16.896-.136-5.097-.052-16.039 1.875-17.712-.037-1.865-1.973-.41-12.567-.467-16.688-.4-9.842-.572-16.643.138-26.478.091-1.72-1.21-8.983.015-10.891C5.064.499 12.363 2.615 16.506 2.083Z"
            />
          </Svg>
          <Text
            style={{
              position: "absolute",
              color: "#fff",
              fontFamily: "ShortStack_400Regular",
            }}
          >
            Tambah
          </Text>
        </View>
      </Link>
    </View>
  );
}
