import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";

//components
import posts from "../../../assets/data/posts.json";
import PostListItem from "../../components/PostListItem";

const firstPost = posts[0];

export default function HomeScreen() {
  return (
    <View style={styles.homeScreenContainer}>
      <PostListItem post={firstPost} />
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
  },
});
