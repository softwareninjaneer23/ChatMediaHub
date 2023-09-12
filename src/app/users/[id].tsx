import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

//custom
import userJson from "../../../assets/data/user.json";
import { User } from "../../types";
import ExperienceListItem from "../../components/ExperienceListItem";
import { COLORS } from "../../../src/constants";

export default function UserProfileScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  //state handlers
  const [user, setUser] = useState<User>(userJson);
  const [showMore, setShowMore] = useState(false);

  //change the screen title to display user name
  useLayoutEffect(() => {
    navigation.setOptions({ title: user.name });
  }, [user?.name]);

  //connect function
  const makeConnection = () => {
    console.log("make connection");
  };

  //follow function
  const addFollowing = () => {
    console.log("establish a follow");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.userDetailsContainer}
    >
      {/*header section*/}
      <View style={styles.userTopInfoSection}>
        {/*background image section*/}
        <View style={styles.userBackgroundImageContainer}>
          <Image
            source={{ uri: user.backImage }}
            style={styles.userBackgroundImageItem}
          />
        </View>

        {/*profile image section*/}
        <View style={styles.userProfileImageContainer}>
          {/*user image*/}
          <View style={styles.userProfileImageContent}>
            <Image
              source={{ uri: user.image }}
              style={styles.userProfileImageItem}
            />
          </View>

          {/*notify bell*/}
          <View style={styles.userNotifyContainer}>
            <FontAwesome name="bell-o" size={16} color={COLORS.white} />
          </View>
        </View>

        {/*user name section*/}
        <View style={styles.userNameContainer}>
          <Text style={styles.userNameItem}>{user.name} · </Text>
          <Text style={styles.userSubscribedItem}>{user.subscribed}</Text>
        </View>

        {/*user position*/}
        <View style={styles.userPositionContainer}>
          <Text style={styles.userPositionItem}>{user.position}</Text>
        </View>

        {/*user location*/}
        <View style={styles.userLocationContainer}>
          <Text style={styles.userLocationItem}>{user.location}</Text>
        </View>

        {/*user connection count*/}
        <View style={styles.userConnectionsContainer}>
          <Text style={styles.userConnectionsItem}>
            {user.connections} connections
          </Text>
        </View>

        {/*connect button section*/}
        <View style={styles.connectionButtonContainer}>
          {/*connect button*/}
          <TouchableOpacity
            onPress={makeConnection}
            style={styles.connectButtonContainer}
          >
            <FontAwesome name="user-plus" size={14} color={COLORS.black} />
            <Text style={styles.connectButtonTextItem}> connect</Text>
          </TouchableOpacity>

          {/*follow button*/}
          <TouchableOpacity
            onPress={addFollowing}
            style={styles.followButtonContainer}
          >
            <FontAwesome name="plus" size={14} color={COLORS.lightBlue} />
            <Text style={styles.followButtonTextItem}> follow</Text>
          </TouchableOpacity>

          {/*more option button*/}
          <View style={styles.optionButtonContainer}>
            <Ionicons
              name="ellipsis-horizontal-sharp"
              size={14}
              color={COLORS.darkGray}
            />
          </View>
        </View>
      </View>

      {/*about section*/}
      <View style={styles.aboutUserContainer}>
        <Text style={styles.aboutUserTextHeadingItem}>About</Text>
        <Text
          onPress={() => setShowMore(!showMore)}
          numberOfLines={showMore ? 100 : 4}
          style={styles.aboutUserTextItem}
        >
          {user.about}
        </Text>
      </View>

      {/*experience section*/}
      <View style={styles.experienceSubContainer}>
        <Text style={styles.experienceTextHeadingItem}>Experiences</Text>
        {user.experience?.map((experience) => (
          <ExperienceListItem key={experience.id} experience={experience} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  userDetailsContainer: {
    flex: 1,
  },

  //header section
  userTopInfoSection: {
    flexDirection: "column",
    marginBottom: 10,
    paddingBottom: 15,
    backgroundColor: COLORS.reechGray,
  },
  userBackgroundImageContainer: {
    marginBottom: -50,
  },
  userBackgroundImageItem: {
    width: "100%",
    aspectRatio: 3,
    resizeMode: "cover",
  },
  userProfileImageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userProfileImageContent: {
    width: "80%",
    paddingHorizontal: 10,
  },
  userProfileImageItem: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.black,
  },
  userNotifyContainer: {
    marginTop: 60,
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  //user name section
  userNameContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  userNameItem: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "600",
  },
  userSubscribedItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },
  userPositionContainer: {
    paddingHorizontal: 20,
  },
  userPositionItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "400",
  },
  userLocationContainer: {
    marginVertical: 6,
    paddingHorizontal: 20,
  },
  userLocationItem: {
    color: COLORS.darkGray,
    fontSize: 12,
    fontWeight: "500",
  },
  userConnectionsContainer: {
    paddingHorizontal: 20,
  },
  userConnectionsItem: {
    color: COLORS.lightBlue,
    fontSize: 12,
    fontWeight: "500",
  },

  //button section
  connectionButtonContainer: {
    marginTop: 15,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  connectButtonContainer: {
    width: "30%",
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: COLORS.lightBlue,
  },
  connectButtonTextItem: {
    color: COLORS.black,
    fontSize: 12,
    fontWeight: "500",
  },
  followButtonContainer: {
    width: "30%",
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.lightBlue,
    backgroundColor: COLORS.transparent,
    marginHorizontal: 5,
  },
  followButtonTextItem: {
    color: COLORS.lightBlue,
    fontSize: 12,
    fontWeight: "500",
  },
  optionButtonContainer: {
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.darkGray,
    backgroundColor: COLORS.transparent,
  },

  //about section
  aboutUserContainer: {
    flexDirection: "column",
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.reechGray,
  },
  aboutUserTextHeadingItem: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  aboutUserTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },

  // experience section
  experienceSubContainer: {
    flexDirection: "column",
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.reechGray,
  },
  experienceTextHeadingItem: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
});
