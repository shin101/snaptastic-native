import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { PHOTO_FRAGMENT, COMMENT_FRAGMENT } from "../fragments";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { logUserOut } from "../apollo";
import ScreenLayout from "../components/ScreenLayout";
import Photo from "../components/Photo";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        username
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

export default function Feed() {
  const { data, loading } = useQuery(FEED_QUERY);
  const renderPhoto = ({ item: photo }) => {
    return <Photo {...photo} />;
  };

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        sytle={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        data={data?.seeFeed}
        keyExtractor={(photo) => "" + photo.id}
        renderItem={renderPhoto}
      />
    </ScreenLayout>
  );
}
