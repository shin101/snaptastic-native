import React from "react";
import { Text, View } from "react-native";

export default function Notifications() {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>Notifications</Text>
    </View>
  );
}


// Notifications is similar to photo component. See #16.6
// https://docs.expo.io/versions/latest/sdk/notifications/
