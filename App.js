import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import LoggedOutNav from "./navigators/LoggedOutNav";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import client, { isLoggedInVar } from "./apollo";
import LoggedInNav from "./navigators/LoggedInNav";

// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  // const colorScheme = Appearance.getColorScheme();
  const [loading, setLoading] = useState(true);
  const onFinish = () => {
    setLoading(false);
  };
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const preload = async () => {
    try {
      await Font.loadAsync(Ionicons.font);

      const imagesToLoad = [require("./assets/logo-white.png")];
      const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));

      await Promise.all(imagePromises);
    } catch (error) {
      console.warn(error);
    } finally {
      onFinish();
    }
  };

  useEffect(() => {
    preload();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
      </NavigationContainer>
    </ApolloProvider>
  );
}
