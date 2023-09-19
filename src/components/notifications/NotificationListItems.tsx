import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";

//dummy data
import notifications from "../../../assets/data/notifications.json";

//custom
import NotificationItem from "./NotificationItem";
import NoResultsComponent from "../custom/NoResultsComponent";
import { COLORS } from "../../constants";

export default function NotificationListItems() {
  //state handler
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showAllNotifications, setShowAllNotifications] = useState(false);

  const allFilters = () => {
    setSelectedFilter("all");
  };

  const myPostFilters = () => {
    setSelectedFilter("isMyPost");
  };

  const mentionFilters = () => {
    setSelectedFilter("mentioned");
  };

  //filter notification collection based on type
  const filteredNotifications = notifications.filter((notify) => {
    if (selectedFilter === "isMyPost") {
      return notify.isMyPost === true;
    } else if (selectedFilter === "mentioned") {
      return notify.mentioned === true;
    } else {
      return true;
    }
  });

  // calculate the number of items to show in the list
  const maxItemsToShow = selectedFilter === "mentioned" ? 6 : 6;

  // determine whether to display the "See more" button
  const shouldDisplaySeeMoreButton =
    filteredNotifications.length > maxItemsToShow;

  //toggle notification
  const toggleShowAllNotifications = () => {
    setShowAllNotifications(!showAllNotifications);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.notificationMainComponentContainer}
    >
      {/*manage notification section*/}
      <View style={styles.notifyTopContainer}>
        {/*notify text*/}
        <View style={styles.notifyTopTextHeaderContainer}>
          <Text style={styles.notifyTopTextHeaderItem}>
            Manage your Notifications
          </Text>
        </View>

        {/*notify option*/}
        <View style={styles.notifyTopTextOptionHeaderContainer}>
          <Text style={styles.notifyTopTextHeaderOptionItem}>
            View Settings
          </Text>
        </View>
      </View>

      {/*notification filter section*/}
      <View style={styles.notifyFilterContainer}>
        {/*all option*/}
        <TouchableOpacity
          onPress={allFilters}
          style={
            selectedFilter === "all"
              ? styles.notifyFilterActiveContentContainer
              : styles.notifyFilterContentContainer
          }
        >
          <Text
            style={
              selectedFilter === "all"
                ? styles.notifyFilterTextItemActive
                : styles.notifyFilterTextItem
            }
          >
            All
          </Text>
        </TouchableOpacity>

        {/*my posts option*/}
        <TouchableOpacity
          onPress={myPostFilters}
          style={
            selectedFilter === "isMyPost"
              ? styles.notifyFilterActiveContentContainer
              : styles.notifyFilterContentContainer
          }
        >
          <Text
            style={
              selectedFilter === "isMyPost"
                ? styles.notifyFilterTextItemActive
                : styles.notifyFilterTextItem
            }
          >
            My posts
          </Text>
        </TouchableOpacity>

        {/*mention option*/}
        <TouchableOpacity
          onPress={mentionFilters}
          style={
            selectedFilter === "mentioned"
              ? styles.notifyFilterActiveContentContainer
              : styles.notifyFilterContentContainer
          }
        >
          <Text
            style={
              selectedFilter === "mentioned"
                ? styles.notifyFilterTextItemActive
                : styles.notifyFilterTextItem
            }
          >
            Mentions
          </Text>
        </TouchableOpacity>
      </View>

      {/*notification list section*/}
      <View style={styles.notifyListContainer}>
        {filteredNotifications.length === 0 ? (
          <NoResultsComponent
            mainHeading={
              selectedFilter === "mentioned"
                ? "No new mentions"
                : "No new post activities"
            }
            message={
              selectedFilter === "mentioned"
                ? "When someone tags you in a post or comment, that notification will appear here."
                : "You can view your previous post activity on your profile"
            }
          />
        ) : (
          filteredNotifications
            .slice(
              0,
              showAllNotifications ? notifications.length : maxItemsToShow
            )
            .map((notify) => (
              <NotificationItem key={notify.id} notify={notify} />
            ))
        )}
      </View>

      {/*see more results section*/}
      {shouldDisplaySeeMoreButton && (
        <View style={styles.seeMoreNotificationsContainer}>
          <TouchableOpacity
            onPress={toggleShowAllNotifications}
            style={styles.seeMoreNotificationsContent}
          >
            <Text style={styles.seeMoreNotificationsTextItem}>
              {showAllNotifications ? "See less " : "See more "}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  notificationMainComponentContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },

  //notify top section
  notifyTopContainer: {
    width: "100%",
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.reechGray,
  },
  notifyTopTextHeaderContainer: {
    width: "70%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  notifyTopTextHeaderItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  notifyTopTextOptionHeaderContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  notifyTopTextHeaderOptionItem: {
    color: COLORS.lightBlue,
    fontSize: 12,
    fontWeight: "600",
    textDecorationLine: "underline",
  },

  //notify filter section
  notifyFilterContainer: {
    width: "100%",
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: COLORS.reechGray,
  },
  notifyFilterActiveContentContainer: {
    width: "22%",
    paddingVertical: 5,
    marginHorizontal: 3.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: COLORS.greenActive,
  },
  notifyFilterTextItemActive: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: "600",
  },
  notifyFilterContentContainer: {
    width: "22%",
    paddingVertical: 5,
    marginHorizontal: 3.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.darkGray,
  },
  notifyFilterTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
  },

  //notify list section
  notifyListContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: COLORS.reechGray,
  },

  //see all notification section
  seeMoreNotificationsContainer: {
    width: "100%",
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.reechGray,
  },
  seeMoreNotificationsContent: {
    width: "93%",
    paddingVertical: 2.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 0.6,
    borderColor: COLORS.white,
  },
  seeMoreNotificationsTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
  },
});
