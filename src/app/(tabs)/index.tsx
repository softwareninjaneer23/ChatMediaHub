import { StyleSheet, FlatList } from "react-native";
import { View } from "../../components/Themed";

//components
import posts from "../../../assets/data/posts.json";
import PostListItem from "../../components/PostListItem";

export default function HomeScreen() {
  return (
    <View style={styles.homeScreenContainer}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
  },
});
