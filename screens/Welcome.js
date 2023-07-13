import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 0px 40px;
`;

const Logo = styled.Image`
  max-width: 70%;
  height: 100px;
`;

const CreateAccount = styled.TouchableOpacity`
  background-color: ${colors.purple};
  padding: 13px 10px;
  margin-top: 20px;
  border-radius: 5px;
  width: 100%;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
const CreateAccountText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
`;

const LoginLink = styled.Text`
  color: ${colors.purple};
  font-weight: 600;
  margin-top: 20px;
`;

export default function Welcome({ navigation }) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogIn = () => navigation.navigate("LogIn");
  return (
    <Container>
      <Logo resizeMode="contain" source={require("../assets/logo-white.png")} />
      <CreateAccount disabled={false} onPress={goToCreateAccount}>
        <CreateAccountText>Create Account</CreateAccountText>
      </CreateAccount>

      <TouchableOpacity onPress={goToLogIn}>
        <LoginLink>Log In</LoginLink>
      </TouchableOpacity>
    </Container>
  );
}
