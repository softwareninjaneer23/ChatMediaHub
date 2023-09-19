import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";

//custom
import { NotificationList } from "../../types";
import { COLORS } from "../../constants";
import { AntDesign, MaterialIcons, Octicons } from "@expo/vector-icons";

type NotifyItemProps = {
  notify: NotificationList;
};

export default function NotificationItem({ notify }: NotifyItemProps) {
  return (
    <View style={styles.notifyItemsContainer}>
      {notify.isBusiness ? (
        <View style={styles.notifyItemContent}>
          {/*image section*/}
          <View style={styles.notifyImageContainer}>
            <Image
              source={{ uri: notify.userImage }}
              style={styles.notifyImageBusinessItem}
            />
          </View>

          {/*text section*/}
          <View style={styles.notifyTextItemContainer}>
            <Text style={styles.notifyTextItem}>{notify.userName}</Text>
            <Text numberOfLines={3} style={styles.notifyTextNormalItem}>
              {notify.notificationDescription}
            </Text>
          </View>

          {/*timestamp section*/}
          <View style={styles.notifyTextIconContainer}>
            <Text style={styles.notifyTextIconItem}>{notify.notifyTime}</Text>
            <AntDesign name="ellipsis1" size={14} color={COLORS.darkGray} />
          </View>
        </View>
      ) : !notify.isBusiness ? (
        <View style={styles.notifyItemContent}>
          {/*image section*/}
          <View style={styles.notifyImageContainer}>
            <Image
              source={{ uri: notify.userImage }}
              style={
                notify.isLive
                  ? styles.notifyImageUserItemLive
                  : styles.notifyImageUserItem
              }
            />

            {notify.isOnline ? (
              <Octicons
                name="dot-fill"
                size={20}
                color={COLORS.greenActive}
                style={styles.notifyActiveIcon}
              />
            ) : (
              <Octicons
                name="dot"
                size={20}
                color={COLORS.greenActive}
                style={styles.notifyActiveIcon}
              />
            )}
          </View>

          {/*text section*/}
          <View style={styles.notifyTextItemContainer}>
            {!notify.isCongrats ? (
              <Text style={styles.notifyTextItem}>
                {!notify.isFollow ? notify.userName : null}{" "}
                {notify.isVerified ? (
                  <MaterialIcons
                    name="verified"
                    size={10}
                    color={COLORS.lightBlue}
                  />
                ) : null}
                {notify.isCurrentlyLive ? (
                  <Text style={styles.notifyTextNormalItem}>
                    live video event.
                  </Text>
                ) : notify.liveEnded ? (
                  <Text style={styles.notifyTextNormalItem}>was live</Text>
                ) : notify.isMyPost && notify.isRepost ? (
                  <Text style={styles.notifyTextNormalItem}>reposted:</Text>
                ) : (
                  ""
                )}
              </Text>
            ) : null}

            {/*is live thumbnail*/}
            {notify.isLive ? (
              <View style={styles.notifyLiveContainer}>
                {/*live image item*/}
                <View style={styles.notifyLiveThumbnailContainer}>
                  <Image
                    source={{ uri: notify.liveThumbnail }}
                    style={styles.notifyLiveThumbnailItem}
                  />
                </View>

                {/*live text info*/}
                <View style={styles.notifyLiveTextInfoContainer}>
                  <View style={styles.notifyLiveTextCover}>
                    <Text style={styles.notifyLiveTextItem}>live</Text>
                  </View>

                  <Text style={styles.notifyLiveTextInfoItem}>
                    Join {notify.userName}
                  </Text>

                  <Text numberOfLines={2} style={styles.notifyLiveTextInfoItem}>
                    {notify.notificationDescription}
                  </Text>
                </View>
              </View>
            ) : null}

            {/*notify description section*/}
            <Text
              numberOfLines={notify.isLive ? 1 : 3}
              style={styles.notifyTextNormalItem}
            >
              {notify.isNewJob
                ? "Congratulate " +
                  `${notify.userName}` +
                  " on starting a new position as " +
                  `${notify.position}` +
                  ". " +
                  `${notify.notificationDescription}`
                : notify.isFollow
                ? `${notify.userName}` + " followed you."
                : notify.notificationDescription}
            </Text>

            {/*button section*/}
            {notify.isCongrats ? (
              <TouchableOpacity
                onPress={() => console.log("notify button pressed")}
                style={styles.notifyButtonContainer}
              >
                <Text style={styles.notifyButtonTextItem}>Say congrats</Text>
              </TouchableOpacity>
            ) : null}
          </View>

          {/*timestamp section*/}
          <View style={styles.notifyTextIconContainer}>
            <Text style={styles.notifyTextIconItem}>{notify.notifyTime}</Text>
            <AntDesign name="ellipsis1" size={14} color={COLORS.darkGray} />
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  notifyItemsContainer: {
    flexDirection: "column",
  },

  //notify item
  notifyItemContent: {
    width: "100%",
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  notifyImageContainer: {
    width: Platform.OS === "ios" ? "15%" : "18%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  notifyImageBusinessItem: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  notifyImageUserItem: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50,
  },
  notifyActiveIcon: {
    top: 34,
    right: 13,
  },
  notifyImageUserItemLive: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50,
    borderColor: COLORS.lightBlue,
    borderWidth: 1,
  },
  notifyTextItemContainer: {
    width: Platform.OS === "ios" ? "72%" : "68%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  notifyTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "bold",
  },
  notifyTextNormalItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
  },
  notifyButtonContainer: {
    width: "40%",
    padding: 6,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.lightBlue,
    borderWidth: 1,
    borderRadius: 30,
  },
  notifyButtonTextItem: {
    color: COLORS.lightBlue,
    fontSize: 14,
    fontWeight: "600",
  },
  notifyLiveContainer: {
    width: "100%",
    flexDirection: "row",
  },
  notifyLiveThumbnailContainer: {
    marginVertical: 5,
    width: "55%",
    height: 70,
  },
  notifyLiveThumbnailItem: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  notifyLiveTextInfoContainer: {
    width: "45%",
    height: 70,
    marginVertical: 5,
    paddingHorizontal: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: COLORS.darkGray,
  },
  notifyLiveTextCover: {
    padding: 1.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.red,
    marginBottom: 3,
  },
  notifyLiveTextItem: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: "400",
    textTransform: "uppercase",
  },
  notifyLiveTextInfoItem: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: "600",
    marginBottom: 2,
  },
  notifyTextIconContainer: {
    width: Platform.OS === "ios" ? "15%" : "18%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: Platform.OS === "ios" ? "center" : "center",
  },
  notifyTextIconItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
});
