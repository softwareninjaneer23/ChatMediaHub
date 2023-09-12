import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  SimpleLineIcons,
} from "@expo/vector-icons";

//customs
import { Post } from "../types";
import { COLORS } from "../constants";
import { Link } from "expo-router";

//specify the prop type
type PostListItemProps = {
  post: Post;
};

export default function PostListItem({ post }: PostListItemProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={styles.postListContainer}>
      {/*user image top section*/}
      <View style={styles.topImageSection}>
        {/*user image item*/}
        <View style={styles.topUserImageContainer}>
          <Image
            source={{ uri: post.author.image }}
            style={styles.topUserImageItem}
          />
        </View>

        {/*user bio item*/}
        <View style={styles.userNameContainer}>
          <Text style={styles.userNameTextItem}>
            <Link href={`/users/${post.author.id}`}>{post.author.name}</Link> ·{" "}
            <Text style={styles.userSubscribeTextItem}>
              {post.author.subscribed}
            </Text>
          </Text>
          <Text style={styles.userPositionTextItem}>
            {post.author.position}
          </Text>
        </View>

        {/*more info section*/}
        <View style={styles.moreOptionContainer}>
          <Entypo name="dots-three-vertical" size={14} color={COLORS.white} />
        </View>
      </View>

      {/*user post content section*/}
      <View style={styles.postTextContentContainer}>
        <Text
          numberOfLines={showMore ? 100 : 3}
          style={styles.postTextContentTextItem}
        >
          <Link href={`/posts/${post.id}`}>{post.content}</Link>
        </Text>
      </View>

      {/*see more*/}
      <TouchableOpacity
        onPress={() => setShowMore(!showMore)}
        style={styles.seeMoreTextContainer}
      >
        <Text style={styles.seeMoreTextItem}>
          {showMore ? "...less" : "...see more"}
        </Text>
      </TouchableOpacity>

      {/*user post image section*/}
      <View style={styles.postImageContainer}>
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.postImageItem} />
        )}
      </View>

      {/*user commenting action section*/}
      <View style={styles.userActionContainer}>
        {/*like action*/}
        <TouchableOpacity
          onPress={() => console.log("like pressed")}
          style={styles.actionContentContainer}
        >
          <SimpleLineIcons name="like" size={16} color={COLORS.lightBlue} />
        </TouchableOpacity>

        {/*comment action*/}
        <TouchableOpacity
          onPress={() => console.log("comment pressed")}
          style={styles.actionContentContainer}
        >
          <FontAwesome5 name="comment" size={16} color={COLORS.lightBlue} />
        </TouchableOpacity>

        {/*share action*/}
        <TouchableOpacity
          onPress={() => console.log("share pressed")}
          style={styles.actionContentContainer}
        >
          <FontAwesome
            name="share-square-o"
            size={16}
            color={COLORS.lightBlue}
          />
        </TouchableOpacity>

        {/*send action*/}
        <TouchableOpacity
          onPress={() => console.log("send pressed")}
          style={styles.actionContentContainer}
        >
          <FontAwesome name="send-o" size={16} color={COLORS.lightBlue} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postListContainer: {
    width: "100%",
    maxWidth: 500,
    paddingTop: 10,
    flexDirection: "column",
    alignSelf: "center",
    backgroundColor: COLORS.reechGray,
  },

  //top image section
  topImageSection: {
    width: "100%",
    flexDirection: "row",
  },
  topUserImageContainer: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  topUserImageItem: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    borderRadius: 60,
    borderColor: COLORS.lightBlue,
    borderWidth: 1.5,
  },
  userNameContainer: {
    width: "65%",
    flexDirection: "column",
    justifyContent: "center",
  },
  userNameTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  userPositionTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  userSubscribeTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  moreOptionContainer: {
    width: "10%",
    marginTop: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  postTextContentContainer: {
    marginVertical: 10,
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  postTextContentTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },
  seeMoreTextContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  seeMoreTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  postImageContainer: {
    width: "100%",
  },
  postImageItem: {
    width: "100%",
    aspectRatio: 1.5,
    resizeMode: "contain",
  },

  //bottom image section
  userActionContainer: {
    width: "100%",
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: COLORS.gray,
    borderTopWidth: 0.5,
  },
  actionContentContainer: {
    width: "22%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
