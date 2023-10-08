import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

//custom
import { PeopleCountryList } from "../../types";
import { COLORS } from "../../constants";

type PeopleCountryListProp = {
  peopleCountryList: PeopleCountryList;
};

export default function PeopleWhoInYourCountryListItems({
  peopleCountryList,
}: PeopleCountryListProp) {
  const [followGroupUser, setFollowGroupUser] = useState(false);
  const [removeItem, setRemoveItem] = useState(false);

  return (
    <View style={styles.peopleInYourCountryDataContainer}>
      {/*card content*/}
      <View style={styles.peopleInYourCountryDataContent}>
        {/*top image section*/}
        <ImageBackground
          source={{ uri: peopleCountryList.userCoverImage }}
          style={styles.countryTopContent}
        >
          <View style={styles.countryCloseIconContainer}>
            <TouchableOpacity
              onPress={() => setRemoveItem(true)}
              style={styles.countryCloseIconContent}
            >
              <AntDesign name="close" size={18} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/*top image with button section*/}
        <View style={styles.userPostImageContainer}>
          {/*user image section*/}
          <View style={styles.userPostImageContent}>
            <Image
              source={{ uri: peopleCountryList.userProfilePicture }}
              style={styles.userPostImageItemId}
            />
          </View>

          {/*follow user button section*/}
          <View style={styles.userPostFollowButtonContent}>
            <TouchableOpacity
              onPress={() => setFollowGroupUser(!followGroupUser)}
              style={[
                styles.userPostFollowButtonTextContent,
                {
                  borderColor: followGroupUser
                    ? COLORS.darkGray
                    : COLORS.lightBlue,
                },
              ]}
            >
              <Text
                style={[
                  styles.userPostFollowButtonTextItem,
                  {
                    color: followGroupUser ? COLORS.darkGray : COLORS.lightBlue,
                  },
                ]}
              >
                {followGroupUser ? "Following" : "Follow"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*user name section*/}
        <View style={styles.countryUserNameSectionContainer}>
          {/*user name item*/}
          <View style={styles.countryUserNameSectionContent}>
            <Text style={styles.countryUserNameTextItem}>
              {peopleCountryList.userName}
            </Text>
          </View>

          {/*user bio item*/}
          <View style={styles.countryUserNameSectionContent}>
            <Text numberOfLines={2} style={styles.countryUserNameTextLightItem}>
              {peopleCountryList.userBio}
            </Text>
          </View>

          {/*user description item*/}
          <View style={styles.countryUserNameSectionContent}>
            <Text numberOfLines={2} style={styles.countryUserNameTextSmallItem}>
              {peopleCountryList.userDescription}
            </Text>
          </View>
        </View>

        {/*user followers section*/}
        <View style={styles.followerSectionContainer}>
          {/*user follower images section*/}
          <View style={styles.followerImageSectionContainer}>
            {peopleCountryList.followers.map((followers, i) => (
              <View key={i} style={styles.followerImageSectionContent}>
                {i < 2 && (
                  <View style={styles.followerImageItemContent}>
                    <Image
                      source={{ uri: followers.userPicture }}
                      style={styles.followerImageItem}
                    />
                  </View>
                )}
              </View>
            ))}
          </View>

          {/*user follower text section*/}
          <View style={styles.followerTextSectionContainer}>
            <Text style={styles.followerTextContentItem}>
              Followed by{" "}
              {peopleCountryList.followers.map((followers, i) => (
                <Text key={i} style={styles.followerTextContentItem}>
                  {i < 2 && (
                    <Text style={styles.followerTextContentItem}>
                      {i > 0 && ", "}
                      {followers.userName}
                    </Text>
                  )}
                </Text>
              ))}{" "}
              and {peopleCountryList.followers.length - 2} other
              {peopleCountryList.followers.length - 2 <= 1 ? "" : "s"} you know
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  peopleInYourCountryDataContainer: {
    width: "100%",
    flexDirection: "column",
  },
  peopleInYourCountryDataContent: {
    marginTop: 10,
    flexDirection: "column",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: COLORS.darkGray,
  },

  //top country content
  countryTopContent: {
    height: 100,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  countryCloseIconContainer: {
    top: 5,
    right: 5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  countryCloseIconContent: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: COLORS.darkGray,
  },

  //user image section
  userPostImageContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    zIndex: 1,
  },
  userPostImageContent: {
    width: "45%",
    marginTop: -50,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  userPostImageItemId: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: "cover",
  },
  userPostFollowButtonContent: {
    top: -5,
    width: "45%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 10,
  },
  userPostFollowButtonTextContent: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
  },
  userPostFollowButtonTextItem: {
    fontSize: 16,
    fontWeight: "400",
  },

  //user name section
  countryUserNameSectionContainer: {
    marginTop: 20,
    flexDirection: "column",
    paddingHorizontal: 15,
  },
  countryUserNameSectionContent: {
    marginBottom: 5,
  },
  countryUserNameTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  countryUserNameTextLightItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.7,
  },
  countryUserNameTextSmallItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.7,
  },

  //follower section
  followerSectionContainer: {
    width: "100%",
    marginTop: 5,
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  followerImageSectionContainer: {
    width: "15%",
    right: 5,
    marginRight: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  followerImageSectionContent: {
    position: "relative",
  },
  followerImageItemContent: {
    width: 20,
    flexDirection: "row",
  },
  followerImageItem: {
    position: "relative",
    zIndex: 1,
    width: 25,
    height: 25,
    resizeMode: "cover",
    borderRadius: 25,
  },
  followerTextSectionContainer: {
    width: "85%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  followerTextContentItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.7,
  },
});
