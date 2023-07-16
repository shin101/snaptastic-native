import React, { useRef, useEffect } from "react";

import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import { useForm } from "react-hook-form";
import AuthButton from "../components/auth/AuthButton";
import { gql, useMutation } from "@apollo/client";
import { isLoggedInVar } from "../apollo";

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

export default function LogIn() {
  const { register, handleSubmit, setValue, watch } = useForm();
  const passwordRef = useRef();
  const onCompleted = (data) => {
    const {
      login: { ok, token },
    } = data;
    if (ok) {
      console.log("SUCCESSSSSS")
      alert('SUCCESS')
      isLoggedInVar(true);
    }
  };
  const [logInMutation, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });
  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };
  const onValid = (data) => {
    if (!loading) {
      logInMutation({ variables: { ...data } });
    }
  };
  useEffect(() => {
    register("username", { required: true });
    register("password", { required: true });
  }, [register]);

  return (
    <AuthLayout>
      <TextInput
        placeholder="Username"
        returnKeyType="next"
        autoCapitalize={false}
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue("username", text)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        onSubmitEditing={handleSubmit(onValid)}
        onChangeText={(text) => setValue("password", text)}
      />
      <AuthButton
        text="Log In"
        loading={loading}
        disabled={!watch("username") || !watch("password")}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
