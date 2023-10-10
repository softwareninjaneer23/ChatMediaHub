import React from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";

//customs
import { COLORS } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

interface EmptyCommentComponentProps {
  message: string;
}

export default function EmptyCommentComponent({
  message,
}: EmptyCommentComponentProps) {
  return (
    <View style={styles.noResultsFoundContainer}>
      {/*image section*/}
      <View style={styles.noResultImageContainer}>
        <Image
          source={{
            uri: "https://clipart-library.com/new_gallery/130-1306202_person-talking-png-business-people-talking-vector.png",
          }}
          style={styles.noResultImageItem}
        />
      </View>

      {/*message section*/}
      <View style={styles.noResultsTextContainer}>
        <Text style={styles.noResultsTextItem}>{message}</Text>
      </View>

      <TouchableOpacity
        onPress={() => console.log("comment button")}
        style={styles.commentButtonContainer}
      >
        <Text style={styles.commentButtonTextItem}>Comment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  noResultsFoundContainer: {
    width: "100%",
    paddingVertical: Platform.OS === "ios" ? 0 : 48,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  noResultImageContainer: {
    width: "80%",
    height: 280,
    marginBottom: -20,
    justifyContent: "center",
    alignItems: "center",
  },
  noResultImageItem: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  noResultsTextContainer: {
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  noResultsTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  commentButtonContainer: {
    width: 100,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.lightBlue,
    borderRadius: 20,
    marginBottom: 20,
  },
  commentButtonTextItem: {
    color: COLORS.lightBlue,
    fontSize: 12,
    fontWeight: "400",
  },
});
