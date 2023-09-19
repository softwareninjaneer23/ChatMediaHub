import React from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";

//customs
import { COLORS } from "../../constants";

interface LoadingComponentProps {
  mainHeading: string;
  message: string;
}

export default function LoadingComponent({
  mainHeading,
  message,
}: LoadingComponentProps) {
  return (
    <View style={styles.noResultsFoundContainer}>
      {/*image section*/}
      <View style={styles.noResultImageContainer}>
        <Image
          source={{
            uri: "https://cdni.iconscout.com/illustration/premium/thumb/search-not-found-8290999-6632130.png?f=webp",
          }}
          style={styles.noResultImageItem}
        />
      </View>

      {/*main text section*/}
      <View style={styles.noResultsMainTextContainer}>
        <Text style={styles.noResultsMainTextItem}>{mainHeading}</Text>
      </View>

      {/*message section*/}
      <View style={styles.noResultsTextContainer}>
        <Text style={styles.noResultsTextItem}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  noResultsFoundContainer: {
    width: "100%",
    paddingVertical: Platform.OS === "ios" ? 115 : 48,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  noResultImageContainer: {
    width: "80%",
    height: 280,
  },
  noResultImageItem: {
    width: "100%",
    height: 300,
    resizeMode: "stretch",
  },
  noResultsMainTextContainer: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  noResultsMainTextItem: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  noResultsTextContainer: {
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
});
