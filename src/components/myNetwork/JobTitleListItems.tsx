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
import { JobTitleList } from "../../types";
import { COLORS, images } from "../../constants";

type JobTitleListProps = {
  jobTitle: JobTitleList;
};

export default function JobTitleListItems({ jobTitle }: JobTitleListProps) {
  const [connectWithUser, setConnectWithUser] = useState(false);

  return (
    <View style={styles.jobTitleContainer}>
      <View style={styles.jobTitleContentContainer}>
        {/*back image with icon*/}
        <ImageBackground
          source={
            jobTitle.backImage ? { uri: jobTitle.backImage } : images.emptyImage
          }
          style={styles.jobTitleBackContainer}
        >
          <TouchableOpacity
            onPress={() => console.log("close item")}
            style={styles.jobTitleCloseContainer}
          >
            <Ionicons
              name="md-close-sharp"
              size={Platform.OS === "ios" ? 24 : 18}
              color={COLORS.white}
              style={styles.jobTitleActionIcon}
            />
          </TouchableOpacity>
        </ImageBackground>

        {/*user image*/}
        <View style={styles.jobTitleUserImageContainer}>
          {jobTitle.openToWork ? (
            <ImageBackground
              source={{
                uri: "https://media.licdn.com/dms/image/D5612AQEGgFogiOMtTw/article-cover_image-shrink_720_1280/0/1687102860396?e=2147483647&v=beta&t=uWIcQ2E30bBn8xoI4zqEy7F0Ha6uuhuzMoErkI8JuBw",
              }}
              style={styles.jobTitleImageContainerItem}
            >
              <Image
                source={{ uri: jobTitle.userImage }}
                style={styles.jobTitleImageItem}
              />
            </ImageBackground>
          ) : (
            <Image
              source={{ uri: jobTitle.userImage }}
              style={styles.jobTitleUserImageItem}
            />
          )}
        </View>

        {/*user name section*/}
        <View style={styles.jobTitleUserNameContainer}>
          <Text numberOfLines={1} style={styles.jobTitleUserNameTextItem}>
            {jobTitle.userName}
          </Text>
        </View>

        {/*user info section*/}
        <View style={styles.jobTitleUserInfoContainer}>
          <Text numberOfLines={2} style={styles.jobTitleUserDetailsTextItem}>
            {jobTitle.userPosition} at{" "}
            <Text style={styles.jobTitleUserDetailsTextItem}>
              {jobTitle.userCompany}
            </Text>
          </Text>
        </View>

        {/*user mutual section*/}
        <View style={styles.jobTitleMutualContainer}>
          <Entypo name="slideshare" size={18} color={COLORS.white} />
          <Text style={styles.jobTitleMutualTextItem}>
            {" "}
            {jobTitle.userMutualConnections > 500
              ? "500+"
              : jobTitle.userMutualConnections}{" "}
            mutual connections
          </Text>
        </View>

        {/*user connect section*/}
        <View style={styles.jobTitleConnectContainer}>
          <TouchableOpacity
            onPress={() => setConnectWithUser(true)}
            style={
              connectWithUser
                ? styles.jobTitlePendingContent
                : styles.jobTitleConnectContent
            }
          >
            <Text
              style={
                connectWithUser
                  ? styles.jobTitlePendingTextItem
                  : styles.jobTitleConnectTextItem
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
  jobTitleContainer: {
    width: "50%",
    padding: 5,
  },
  jobTitleContentContainer: {
    width: "100%",
    height: 300,
    paddingBottom: 5,
    boxSizing: "border-box",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.darkGray,
  },
  jobTitleBackContainer: {
    width: "100%",
    height: 70,
    resizeMode: "stretch",
    flexDirection: "row",
    borderTopLeftRadius: Platform.OS === "ios" ? 10 : 9,
    borderTopRightRadius: Platform.OS === "ios" ? 10 : 9,
    overflow: "hidden",
  },
  jobTitleCloseContainer: {
    top: 6,
    width: Platform.OS === "ios" ? 30 : 20,
    height: Platform.OS === "ios" ? 30 : 20,
    left: Platform.OS === "ios" ? 150 : 125,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Platform.OS === "ios" ? 30 : 20,
    backgroundColor: COLORS.darkGray,
  },
  jobTitleActionIcon: {
    left: 1,
  },
  jobTitleUserImageContainer: {
    marginTop: -50,
    justifyContent: "center",
    alignItems: "center",
  },
  jobTitleImageContainerItem: {
    width: 110,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 110,
    backgroundColor: COLORS.transparent,
  },
  jobTitleImageItem: {
    width: 78,
    height: 78,
    resizeMode: "cover",
    borderRadius: 78,
  },
  jobTitleUserImageItem: {
    width: 110,
    height: 110,
    borderRadius: 110,
    resizeMode: "cover",
  },
  jobTitleUserNameContainer: {
    marginTop: 20,
    paddingHorizontal: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  jobTitleUserNameTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  jobTitleUserInfoContainer: {
    minHeight: 33,
    marginTop: 5,
    paddingHorizontal: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  jobTitleUserDetailsTextItem: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.5,
  },
  jobTitleMutualContainer: {
    height: 15,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  jobTitleMutualTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  jobTitleConnectContainer: {
    width: "100%",
    marginTop: 15,
    paddingHorizontal: 15,
  },
  jobTitleConnectContent: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    borderRadius: 20,
    borderColor: COLORS.lightBlue,
    borderWidth: 1,
  },
  jobTitleConnectTextItem: {
    color: COLORS.lightBlue,
    fontSize: 14,
    fontWeight: "600",
  },
  jobTitlePendingContent: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    borderRadius: 20,
    borderColor: COLORS.darkGray,
    borderWidth: 1,
  },
  jobTitlePendingTextItem: {
    color: COLORS.darkGray,
    fontSize: 14,
    fontWeight: "600",
  },
});
