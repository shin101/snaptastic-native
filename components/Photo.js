import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { useWindowDimensions } from "react-native";

const Container = styled.View``;
const Header = styled.View``;
const UserAvatar = styled.Image``;
const Username = styled.Text`
  color: white;
`;
const File = styled.Image``;
const Actions = styled.View``;
const Action = styled.TouchableOpacity``;
const Caption = styled.View``;
const CaptionText = styled.Text`
  color: white;
`;
const Likes = styled.Text`
  color: white;
`;

export default function Photo({ id, user, file, isLiked, likes, caption }) {
  const { width, height } = useWindowDimensions();
  return (
    <Container>
      <Header>
        <UserAvatar />
        <Username>{user.username}</Username>
      </Header>
      <File style={{ width, height: height-100 }} source={{ uri: file }} />
      <Actions>
        <Action />
        <Action />
        <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
      </Actions>
      <Caption>
        <Username>{user.username}</Username>
        <CaptionText>{caption}</CaptionText>
      </Caption>
    </Container>
  );
}

Photo.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
  }),
  caption: PropTypes.string,
  file: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
};
