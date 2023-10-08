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
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

//custom
import { OnlineEventsList } from "../../types";
import { COLORS } from "../../constants";

type OnlineEventsListProp = {
  onlineEventsList: OnlineEventsList;
};

export default function OnlineEventsRecommendedListItems({
  onlineEventsList,
}: OnlineEventsListProp) {
  const [followGroupUser, setFollowGroupUser] = useState(false);
  const [removeItem, setRemoveItem] = useState(false);

  return (
    <View style={styles.onlineEventContainer}>
      {/*card content*/}
      <View style={styles.onlineEventContent}>
        {/*top event image section*/}
        <ImageBackground
          source={{ uri: onlineEventsList.eventImage }}
          style={styles.onlineEventTopImageContent}
        >
          <View style={styles.onlineEventCloseIconContainer}>
            <TouchableOpacity
              onPress={() => setRemoveItem(true)}
              style={styles.onlineEventCloseIconContent}
            >
              <AntDesign name="close" size={18} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/*top image with button section*/}
        <View style={styles.onlineEventImageContainer}>
          {/*event text section*/}
          <View style={styles.onlineEventTextContent}>
            {/*event name item*/}
            <View style={styles.onlineEventTextContentContainer}>
              <Text style={styles.onlineEventTextNameItem}>
                {onlineEventsList.eventName}
              </Text>
            </View>

            {/*event date item*/}
            <View style={styles.onlineEventTextDateContentContainer}>
              <Text style={styles.onlineEventTextDateItem}>
                {onlineEventsList.eventStartDate}
              </Text>
              <Text style={styles.onlineEventTextDateItem}>
                {" "}
                - {onlineEventsList.eventEndDate}
              </Text>
            </View>

            {/*event attendees item*/}
            <View style={styles.onlineEventAttendeesContainer}>
              {onlineEventsList.eventConnectionAttendees.length === 0 ? (
                <View style={styles.onlineEventAttendeesContent}>
                  <FontAwesome5 name="users" size={14} color={COLORS.white} />
                  <Text style={styles.onlineEventAttendeesTextItem}>
                    {"  "}
                    {onlineEventsList.eventAttendees} attendees
                  </Text>
                </View>
              ) : (
                <View style={styles.onlineEventSectionContainer}>
                  {/*user connection images section*/}
                  <View style={styles.onlineEventImageSectionContainer}>
                    {onlineEventsList.eventConnectionAttendees.map(
                      (connections, i) => (
                        <View
                          key={i}
                          style={styles.onlineEventImageSectionContent}
                        >
                          {i < 3 && (
                            <View style={styles.onlineEventImageItemContent}>
                              <Image
                                source={{ uri: connections.userPicture }}
                                style={styles.onlineEventImageItem}
                              />
                            </View>
                          )}
                        </View>
                      )
                    )}
                  </View>

                  {/*user connection text section*/}
                  <View style={styles.onlineEventTextSectionContainer}>
                    <Text
                      numberOfLines={2}
                      style={styles.onlineEventTextContentItem}
                    >
                      {onlineEventsList.eventConnectionAttendees.map(
                        (connections, i) => (
                          <Text
                            key={i}
                            style={styles.onlineEventTextContentItem}
                          >
                            {i < 2 && (
                              <Text style={styles.onlineEventTextContentItem}>
                                {i > 0 && ", "}
                                {connections.userName}
                              </Text>
                            )}
                          </Text>
                        )
                      )}{" "}
                      and {onlineEventsList.eventConnectionAttendees.length - 2}{" "}
                      other connection
                      {onlineEventsList.eventConnectionAttendees.length - 2 <= 1
                        ? ""
                        : "s"}{" "}
                      attended this event
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </View>

          {/*event view button section*/}
          <View style={styles.onlineEventButtonContent}>
            <TouchableOpacity
              onPress={() => setFollowGroupUser(!followGroupUser)}
              style={styles.onlineEventButtonTextContent}
            >
              <Text style={styles.onlineEventButtonTextItem}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  onlineEventContainer: {
    width: "100%",
    flexDirection: "column",
  },
  onlineEventContent: {
    marginTop: 10,
    flexDirection: "column",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: COLORS.darkGray,
  },

  //top online event content
  onlineEventTopImageContent: {
    height: Platform.OS === "ios" ? 190 : 200,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  onlineEventCloseIconContainer: {
    top: 5,
    right: 5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  onlineEventCloseIconContent: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: COLORS.darkGray,
  },

  //user image section
  onlineEventImageContainer: {
    width: "100%",
    marginVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    zIndex: 1,
  },
  onlineEventTextContent: {
    width: "65%",
    paddingHorizontal: 15,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  onlineEventTextContentContainer: {
    width: "120%",
    marginBottom: 4,
  },
  onlineEventTextNameItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  onlineEventTextDateContentContainer: {
    width: "100%",
    marginBottom: 5,
    flexDirection: "row",
  },
  onlineEventTextDateItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.5,
  },
  onlineEventAttendeesContainer: {
    width: "120%",
    flexDirection: "row",
  },
  onlineEventAttendeesContent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  onlineEventAttendeesTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },

  //online event connection section
  onlineEventSectionContainer: {
    width: "100%",
    marginTop: 5,
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  onlineEventImageSectionContainer: {
    width: "15%",
    right: 10,
    marginRight: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  onlineEventImageSectionContent: {
    position: "relative",
  },
  onlineEventImageItemContent: {
    width: 13,
    flexDirection: "row",
  },
  onlineEventImageItem: {
    position: "relative",
    zIndex: 1,
    width: 25,
    height: 25,
    resizeMode: "cover",
    borderRadius: 25,
  },
  onlineEventTextSectionContainer: {
    width: "85%",
    left: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  onlineEventTextContentItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.7,
  },

  //view button section
  onlineEventButtonContent: {
    width: "35%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingHorizontal: 10,
  },
  onlineEventButtonTextContent: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.lightBlue,
  },
  onlineEventButtonTextItem: {
    color: COLORS.lightBlue,
    fontSize: 16,
    fontWeight: "400",
  },
});
