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
import { Entypo, Ionicons } from "@expo/vector-icons";

//custom
import { PeopleYouMayKnowInYourLocationList } from "../../types";
import { COLORS, images } from "../../constants";

type PeopleYouMayKnowInYourLocationListProps = {
  peopleYouMayKnowInYourLocation: PeopleYouMayKnowInYourLocationList;
};

export default function PeopleYouMayKnowInYourLocationListItems({
  peopleYouMayKnowInYourLocation,
}: PeopleYouMayKnowInYourLocationListProps) {
  const [connectWithUser, setConnectWithUser] = useState(false);

  return (
    <View style={styles.peopleYouMayKnowContainer}>
      <View style={styles.peopleYouMayKnowContentContainer}>
        {/*back image with icon*/}
        <ImageBackground
          source={
            peopleYouMayKnowInYourLocation.backImage
              ? { uri: peopleYouMayKnowInYourLocation.backImage }
              : images.emptyImage
          }
          style={styles.peopleYouMayKnowBackContainer}
        >
          <TouchableOpacity
            onPress={() => console.log("close item")}
            style={styles.peopleYouMayKnowCloseContainer}
          >
            <Ionicons
              name="md-close-sharp"
              size={Platform.OS === "ios" ? 24 : 18}
              color={COLORS.white}
              style={styles.peopleYouMayKnowActionIcon}
            />
          </TouchableOpacity>
        </ImageBackground>

        {/*user image*/}
        <View style={styles.peopleYouMayKnowUserImageContainer}>
          {peopleYouMayKnowInYourLocation.openToWork ? (
            <ImageBackground
              source={{
                uri: "https://media.licdn.com/dms/image/D5612AQEGgFogiOMtTw/article-cover_image-shrink_720_1280/0/1687102860396?e=2147483647&v=beta&t=uWIcQ2E30bBn8xoI4zqEy7F0Ha6uuhuzMoErkI8JuBw",
              }}
              style={styles.peopleYouMayKnowImageContainerItem}
            >
              <Image
                source={{ uri: peopleYouMayKnowInYourLocation.userImage }}
                style={styles.peopleYouMayKnowImageItem}
              />
            </ImageBackground>
          ) : (
            <Image
              source={{ uri: peopleYouMayKnowInYourLocation.userImage }}
              style={styles.peopleYouMayKnowUserImageItem}
            />
          )}
        </View>

        {/*user name section*/}
        <View style={styles.peopleYouMayKnowUserNameContainer}>
          <Text
            numberOfLines={1}
            style={styles.peopleYouMayKnowUserNameTextItem}
          >
            {peopleYouMayKnowInYourLocation.userName}
          </Text>
        </View>

        {/*user info section*/}
        <View style={styles.peopleYouMayKnowUserInfoContainer}>
          <Text
            numberOfLines={2}
            style={styles.peopleYouMayKnowUserDetailsTextItem}
          >
            {peopleYouMayKnowInYourLocation.userPosition} at{" "}
            <Text style={styles.peopleYouMayKnowUserDetailsTextItem}>
              {peopleYouMayKnowInYourLocation.userCompany}
            </Text>
          </Text>
        </View>

        {/*user mutual section*/}
        <View style={styles.peopleYouMayKnowMutualContainer}>
          {peopleYouMayKnowInYourLocation.hasAJob ? (
            <>
              <Entypo name="slideshare" size={18} color={COLORS.white} />
              <Text style={styles.peopleYouMayKnowMutualTextItem}>
                {" "}
                {peopleYouMayKnowInYourLocation.userMutualConnections > 500
                  ? "500+"
                  : peopleYouMayKnowInYourLocation.userMutualConnections}{" "}
                mutual connections
              </Text>
            </>
          ) : (
            <>
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/4/42/University_of_south_africa_logo.jpg?20190105091427",
                }}
                style={styles.peopleYouMayKnowImagePlaceholderItem}
              />
              <Text style={styles.peopleYouMayKnowMutualTextItem}>
                {"  "}University of South Africa
              </Text>
            </>
          )}
        </View>

        {/*user connect section*/}
        <View style={styles.peopleYouMayKnowConnectContainer}>
          <TouchableOpacity
            onPress={() => setConnectWithUser(true)}
            style={
              connectWithUser
                ? styles.peopleYouMayKnowPendingContent
                : styles.peopleYouMayKnowConnectContent
            }
          >
            <Text
              style={
                connectWithUser
                  ? styles.peopleYouMayKnowPendingTextItem
                  : styles.peopleYouMayKnowConnectTextItem
              }
            >
              {connectWithUser ? "Pending" : "Connect"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  peopleYouMayKnowContainer: {
    width: "50%",
    padding: 5,
  },
  peopleYouMayKnowContentContainer: {
    width: "100%",
    height: 300,
    paddingBottom: 5,
    boxSizing: "border-box",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.darkGray,
  },
  peopleYouMayKnowBackContainer: {
    width: "100%",
    height: 70,
    resizeMode: "stretch",
    flexDirection: "row",
    borderTopLeftRadius: Platform.OS === "ios" ? 10 : 9,
    borderTopRightRadius: Platform.OS === "ios" ? 10 : 9,
    overflow: "hidden",
  },
  peopleYouMayKnowCloseContainer: {
    top: 6,
    width: Platform.OS === "ios" ? 30 : 20,
    height: Platform.OS === "ios" ? 30 : 20,
    left: Platform.OS === "ios" ? 150 : 125,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Platform.OS === "ios" ? 30 : 20,
    backgroundColor: COLORS.darkGray,
  },
  peopleYouMayKnowActionIcon: {
    left: 1,
  },
  peopleYouMayKnowUserImageContainer: {
    marginTop: -50,
    justifyContent: "center",
    alignItems: "center",
  },
  peopleYouMayKnowImageContainerItem: {
    width: 110,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 110,
    backgroundColor: COLORS.transparent,
  },
  peopleYouMayKnowImageItem: {
    width: 78,
    height: 78,
    resizeMode: "cover",
    borderRadius: 78,
  },
  peopleYouMayKnowUserImageItem: {
    width: 110,
    height: 110,
    borderRadius: 110,
    resizeMode: "cover",
  },
  peopleYouMayKnowUserNameContainer: {
    marginTop: 20,
    paddingHorizontal: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  peopleYouMayKnowUserNameTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  peopleYouMayKnowUserInfoContainer: {
    minHeight: 33,
    marginTop: 5,
    paddingHorizontal: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  peopleYouMayKnowUserDetailsTextItem: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.5,
  },
  peopleYouMayKnowMutualContainer: {
    height: 15,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  peopleYouMayKnowMutualTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  peopleYouMayKnowImagePlaceholderItem: {
    width: 20,
    height: 20,
    resizeMode: "cover",
    borderRadius: 0,
  },
  peopleYouMayKnowConnectContainer: {
    width: "100%",
    marginTop: 15,
    paddingHorizontal: 15,
  },
  peopleYouMayKnowConnectContent: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    borderRadius: 20,
    borderColor: COLORS.lightBlue,
    borderWidth: 1,
  },
  peopleYouMayKnowConnectTextItem: {
    color: COLORS.lightBlue,
    fontSize: 14,
    fontWeight: "600",
  },
  peopleYouMayKnowPendingContent: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    borderRadius: 20,
    borderColor: COLORS.darkGray,
    borderWidth: 1,
  },
  peopleYouMayKnowPendingTextItem: {
    color: COLORS.darkGray,
    fontSize: 14,
    fontWeight: "600",
  },
});
