import React from "react";
import { View, Text, StyleSheet } from "react-native";

//customs
import { Post } from "../types";
import { COLORS } from "../constants";

//specify the prop type
type PostListItemProps = {
  post: Post;
};

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <View style={styles.postListContainer}>
      <Text style={{ color: COLORS.white }}>PostListItem</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postListContainer: {
    marginTop: 10,
    flexDirection: "column",
  },
});
