import React from "react";
import { colors } from "../../colors";
import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
  background-color: ${colors.purple};
  padding: 15px 10px;
  margin-top: 20px;
  border-radius: 5px;
  width: 100%;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
`;

export default function AuthButton({ onPress, disabled, text }) {
  return (
    <Button disabled={disabled} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
