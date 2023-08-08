import React from "react";
import { TouchableWithoutFeedback, Platform, Keyboard } from "react-native";

export default function DismissKeyboard({ children }) {
  const DismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={DismissKeyboard}
      disabled={Platform.OS === "web"}
    >
      {children}
    </TouchableWithoutFeedback>
  );
}
