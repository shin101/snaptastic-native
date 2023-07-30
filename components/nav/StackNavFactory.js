import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Profile from "../../screens/Profile";
import Photo from "../../screens/Photo";
import Feed from "../../screens/Feed";
import Notifications from "../../screens/Notifications";
import Search from "../../screens/Search";
import Me from "../../screens/Me";

const Stack = createStackNavigator();

export default function StackNavFactory({ screenName }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: "black",
          shadowColor: "rgba(255,255,255,0.5)",
        },
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      {screenName === "Feed" ? (
        <Stack.Screen name={"Feed"} component={Feed} />
      ) : null}
      {screenName === "Search" ? (
        <Stack.Screen name={"Search"} component={Search} />
      ) : null}
      {screenName === "Notifications" ? (
        <Stack.Screen name={"Notifications"} component={Notifications} />
      ) : null}
      {screenName === "Me" ? <Stack.Screen name={"Me"} component={Me} /> : null}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
    </Stack.Navigator>
  );
}
