import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";

const Column = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 15px;
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  margin-right: 10px;
`;
const Username = styled.Text`
  font-weight: 600;
  color: white;
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const FollowBtn = styled.TouchableOpacity`
  background-color: ${colors.purple};
  justify-content: center;
`;
const FollowBtnText = styled.Text``;

export default function UserRow({ avatar, username, isFollowing, isMe }) {
  return (
    <Wrapper>
      <Column>
        <Avatar source={{ uri: avatar }} />
        <Username>{username}</Username>
      </Column>
      {!isMe ? (
        <FollowBtn>
          <FollowBtnText>{isFollowing ? "Unfollow" : "Follow"}</FollowBtnText>
        </FollowBtn>
      ) : null}
    </Wrapper>
  );
}
