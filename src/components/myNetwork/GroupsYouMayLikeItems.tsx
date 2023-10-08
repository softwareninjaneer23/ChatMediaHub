import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

//custom
import { GroupsYouMayLikeList } from "../../types";
import { COLORS, images } from "../../constants";

type GroupsYouMayLikeListProps = {
  groupsYouMayLike: GroupsYouMayLikeList;
};

export default function GroupsYouMayLikeItems({
  groupsYouMayLike,
}: GroupsYouMayLikeListProps) {
  //state handlers
  const [followGroup, setFollowGroup] = useState(false);

  // Format the number with commas
  const formattedMembers = groupsYouMayLike.groupMembers.toLocaleString();

  return (
    <View style={styles.groupsYouMayKnowContainer}>
      <View style={styles.groupsYouMayKnowContentContainer}>
        {/*back image with icon*/}
        <ImageBackground
          source={
            groupsYouMayLike.backImage
              ? { uri: groupsYouMayLike.backImage }
              : images.emptyImage
          }
          style={styles.groupsYouMayKnowBackContainer}
        >
          <TouchableOpacity
            onPress={() => console.log("close item")}
            style={styles.groupsYouMayKnowCloseContainer}
          >
            <Ionicons
              name="md-close-sharp"
              size={Platform.OS === "ios" ? 24 : 18}
              color={COLORS.white}
              style={styles.groupsYouMayKnowActionIcon}
            />
          </TouchableOpacity>
        </ImageBackground>

        {/*group image*/}
        <View style={styles.groupsYouMayKnowImageContainer}>
          <Image
            source={{ uri: groupsYouMayLike.groupImage }}
            style={styles.groupsYouMayKnowImageItem}
          />
        </View>

        {/*group name section*/}
        <View style={styles.groupsYouMayKnowNameContainer}>
          <Text numberOfLines={1} style={styles.groupsYouMayKnowNameTextItem}>
            {groupsYouMayLike.groupName}
          </Text>
        </View>

        {/*group info section*/}
        <View style={styles.groupsYouMayKnowInfoContainer}>
          <Text
            numberOfLines={1}
            style={styles.groupsYouMayKnowDetailsTextItem}
          >
            {formattedMembers} members
          </Text>
        </View>

        {/*group connect section*/}
        <View style={styles.groupsYouMayKnowConnectContainer}>
          <TouchableOpacity
            onPress={() => setFollowGroup(true)}
            style={
              followGroup
                ? styles.groupsYouMayKnowPendingContent
                : styles.groupsYouMayKnowConnectContent
            }
          >
            <Text
              style={
                followGroup
                  ? styles.groupsYouMayKnowPendingTextItem
                  : styles.groupsYouMayKnowConnectTextItem
              }
            >
              {followGroup ? "Following" : "Follow"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  groupsYouMayKnowContainer: {
    width: "50%",
    padding: 5,
  },
  groupsYouMayKnowContentContainer: {
    width: "100%",
    height: 280,
    paddingBottom: 5,
    boxSizing: "border-box",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.darkGray,
  },
  groupsYouMayKnowBackContainer: {
    width: "100%",
    height: 70,
    resizeMode: "stretch",
    flexDirection: "row",
    borderTopLeftRadius: Platform.OS === "ios" ? 10 : 9,
    borderTopRightRadius: Platform.OS === "ios" ? 10 : 9,
    overflow: "hidden",
  },
  groupsYouMayKnowCloseContainer: {
    top: 6,
    width: Platform.OS === "ios" ? 30 : 20,
    height: Platform.OS === "ios" ? 30 : 20,
    left: Platform.OS === "ios" ? 150 : 125,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Platform.OS === "ios" ? 30 : 20,
    backgroundColor: COLORS.darkGray,
  },
  groupsYouMayKnowActionIcon: {
    left: 1,
  },
  groupsYouMayKnowImageContainer: {
    marginTop: -40,
    justifyContent: "center",
    alignItems: "center",
  },
  groupsYouMayKnowImageItem: {
    width: 110,
    height: 110,
    resizeMode: "cover",
  },
  groupsYouMayKnowNameContainer: {
    marginTop: 20,
    paddingHorizontal: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  groupsYouMayKnowNameTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  groupsYouMayKnowInfoContainer: {
    minHeight: 33,
    marginTop: 5,
    paddingHorizontal: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  groupsYouMayKnowDetailsTextItem: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.5,
  },
  groupsYouMayKnowConnectContainer: {
    width: "100%",
    marginTop: 15,
    paddingHorizontal: 15,
  },
  groupsYouMayKnowConnectContent: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    borderRadius: 20,
    borderColor: COLORS.lightBlue,
    borderWidth: 1,
  },
  groupsYouMayKnowConnectTextItem: {
    color: COLORS.lightBlue,
    fontSize: 14,
    fontWeight: "600",
  },
  groupsYouMayKnowPendingContent: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    borderRadius: 20,
    borderColor: COLORS.darkGray,
    borderWidth: 1,
  },
  groupsYouMayKnowPendingTextItem: {
    color: COLORS.darkGray,
    fontSize: 14,
    fontWeight: "600",
  },
});
