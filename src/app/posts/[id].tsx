import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

//custom
import posts from "../../../assets/data/posts.json";
import PostListItem from "../../components/PostListItem";
import LoadingComponent from "../../components/LoadingComponent";

export default function PostDetailsScreen() {
  const { id } = useLocalSearchParams();

  const post = posts.find((post) => post.id === id);

  //if post not found
  if (!post) {
    return <LoadingComponent />;
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.postDetailsContainer}
    >
      <PostListItem post={post} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  postDetailsContainer: {
    flex: 1,
  },
});
