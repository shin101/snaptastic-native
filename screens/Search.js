import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import styled from "styled-components/native";
import DismissKeyboard from "../components/DismissKeyboard";
import { useForm } from "react-hook-form";
import { gql, useLazyQuery } from "@apollo/client";
DismissKeyboard;

const SEARCH_PHOTOS = gql`
  query searchPhotos($keyword: String!) {
    searchPhotos(keyword: $keyword) {
      id
      file
    }
  }
`;

const MessageContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const MessageText = styled.Text`
  margin-top: 15px;
  color: white;
  font-weight: 600;
`;

const Input = styled.TextInput`
  background-color: rgba(255, 255, 255, 1);
  width: ${(props) => props.width / 1.5}px;
  color: black;
  padding: 5px 10px;
  border-radius: 10px;
`;

export default function Search({ navigation }) {
  const numColumns = 4;
  const { width } = useWindowDimensions();
  const { setValue, register, handleSubmit } = useForm();
  const [startQueryFn, { loading, data, called }] = useLazyQuery(SEARCH_PHOTOS);
  const onValid = ({ keyword }) => {
    startQueryFn({ variables: { keyword } });
  };
  const SearchBox = () => (
    <Input
      width={width}
      placeholderTextColor="rgba(0,0,0,0.8)"
      placeholder="Search photos"
      autoCapitalize="none"
      returnKeyLabel="Search"
      returnKeyType="Search"
      autoCorrect={false}
      onChangeText={(text) => setValue("keyword", text)}
      onSubmitEditing={handleSubmit(onValid)}
    />
  );

  useEffect(() => {
    navigation.setOptions({ headerTitle: SearchBox });
    register("keyword", { required: true, minLength: 3 });
  }, []);

  const renderItem = ({ item: photo }) => (
    <TouchableOpacity>
      <Image
        source={{ uri: photo.file }}
        style={{ width: width / numColumns, height: 100 }}
      />
    </TouchableOpacity>
  );

  return (
    <DismissKeyboard>
      <View style={{ flex: 1, backgroundColor: "black" }}>
        {loading ? (
          <MessageContainer>
            <ActivityIndicator size="large" />
            <MessageText>Searching...</MessageText>
          </MessageContainer>
        ) : null}
        {!called ? (
          <MessageContainer>
            <MessageText>Search by keyword</MessageText>
          </MessageContainer>
        ) : null}
        {data?.searchPhotos !== undefined ? (
          data?.searchPhotos?.length === 0 ? (
            <MessageContainer>
              <MessageText>could not find anything</MessageText>
            </MessageContainer>
          ) : (
            <FlatList
              numColumns={numColumns}
              data={data?.searchPhotos}
              keyExtractor={(photo) => "" + photo.id}
              renderItem={renderItem}
            />
          )
        ) : null}
      </View>
    </DismissKeyboard>
  );
}
