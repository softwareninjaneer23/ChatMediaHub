import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

//custom
import { COLORS } from "../../constants";

export default function ManageMyNetwork() {
  return (
    <View style={styles.manageMyNetworkContainer}>
      <View style={styles.networkListItemsContainer}>
        {/*connections item*/}
        <View style={styles.networkItemContentContainer}>
          {/*icon item*/}
          <View style={styles.networkIconItemContainer}>
            <Entypo name="users" size={18} color={COLORS.white} />
          </View>

          {/*text item*/}
          <View style={styles.networkTextItemContainer}>
            <Text style={styles.networkTextItem}>Connections</Text>
          </View>

          {/*count item*/}
          <View style={styles.networkCountItemContainer}>
            <Text style={styles.networkCountItem}>5449</Text>
          </View>
        </View>

        {/*people I follow item*/}
        <View style={styles.networkItemContentContainer}>
          {/*icon item*/}
          <View style={styles.networkIconItemContainer}>
            <FontAwesome name="user-circle-o" size={18} color={COLORS.white} />
          </View>

          {/*text item*/}
          <View style={styles.networkTextItemContainer}>
            <Text style={styles.networkTextItem}>People I follow</Text>
          </View>

          {/*count item*/}
          <View style={styles.networkCountItemContainer}>
            <Text style={styles.networkCountItem}>118</Text>
          </View>
        </View>

        {/*groups item*/}
        <View style={styles.networkItemContentContainer}>
          {/*icon item*/}
          <View style={styles.networkIconItemContainer}>
            <Ionicons name="ios-people-sharp" size={18} color={COLORS.white} />
          </View>

          {/*text item*/}
          <View style={styles.networkTextItemContainer}>
            <Text style={styles.networkTextItem}>Groups</Text>
          </View>

          {/*count item*/}
          <View style={styles.networkCountItemContainer}>
            <Text style={styles.networkCountItem}>6</Text>
          </View>
        </View>

        {/*pages item*/}
        <View style={styles.networkItemContentContainer}>
          {/*icon item*/}
          <View style={styles.networkIconItemContainer}>
            <FontAwesome name="building-o" size={18} color={COLORS.white} />
          </View>

          {/*text item*/}
          <View style={styles.networkTextItemContainer}>
            <Text style={styles.networkTextItem}>Pages</Text>
          </View>

          {/*count item*/}
          <View style={styles.networkCountItemContainer}>
            <Text style={styles.networkCountItem}>1090</Text>
          </View>
        </View>

        {/*events item*/}
        <View style={styles.networkItemContentContainer}>
          {/*icon item*/}
          <View style={styles.networkIconItemContainer}>
            <AntDesign name="calendar" size={18} color={COLORS.white} />
          </View>

          {/*text item*/}
          <View style={styles.networkTextItemContainer}>
            <Text style={styles.networkTextItem}>Events</Text>
          </View>

          {/*count item*/}
          <View style={styles.networkCountItemContainer}>
            <Text style={styles.networkCountItem}>3</Text>
          </View>
        </View>

        {/*newsletter item*/}
        <View style={styles.networkItemContentContainer}>
          {/*icon item*/}
          <View style={styles.networkIconItemContainer}>
            <FontAwesome name="newspaper-o" size={18} color={COLORS.white} />
          </View>

          {/*text item*/}
          <View style={styles.networkTextItemContainer}>
            <Text style={styles.networkTextItem}>Newsletter</Text>
          </View>

          {/*count item*/}
          <View style={styles.networkCountItemContainer}>
            <Text style={styles.networkCountItem}>25</Text>
          </View>
        </View>

        {/*hashtag item*/}
        <View style={styles.networkItemContentContainer}>
          {/*icon item*/}
          <View style={styles.networkIconItemContainer}>
            <FontAwesome5 name="hashtag" size={18} color={COLORS.white} />
          </View>

          {/*text item*/}
          <View style={styles.networkTextItemContainer}>
            <Text style={styles.networkTextItem}>Hashtags</Text>
          </View>

          {/*count item*/}
          <View style={styles.networkCountItemContainer}>
            <Text style={styles.networkCountItem}>6</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  manageMyNetworkContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },

  //network list section
  networkListItemsContainer: {
    width: "100%",
    marginTop: 2,
    flexDirection: "column",
  },
  networkItemContentContainer: {
    width: "100%",
    height: 55,
    marginVertical: 2,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.reechGray,
  },
  networkIconItemContainer: {
    width: "10%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  networkTextItemContainer: {
    width: "75%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  networkTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "400",
  },
  networkCountItemContainer: {
    width: "15%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  networkCountItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "400",
  },
});
