import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { styled } from "styled-components/native";

export default function HomeButton() {
  const router = useRouter();

  return (
    <HomeBtn onPress={() => router.push('/')}>
      <Ionicons name="home" size={24} color="#333" />
    </HomeBtn>
  );
};

const HomeBtn = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
