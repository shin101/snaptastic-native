import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { StyleSheet, Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preload = async () => {
      try {
        
        await Font.loadAsync({ Ionicons: Ionicons.font });
        const imageToLoad = Asset.fromModule(require("./assets/logo-black.png"));
        await imageToLoad.downloadAsync();

        await SplashScreen.hideAsync();
        setLoading(false);
      } catch (error) {
        console.warn(error);
      }
    };
    preload();
  }, []);

  if (loading) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text>Hihihihi Bacon</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
