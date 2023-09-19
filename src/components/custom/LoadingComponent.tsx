import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

//customs
import { COLORS, images } from "../../constants";

export default function LoadingComponent() {
  return (
    <View style={styles.loadingComponentContainer}>
      <Image source={images.loading} style={styles.loadingImageItem} />
      <Text style={styles.loadingTextInfo}>Please wait...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingComponentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingImageItem: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
  loadingTextInfo: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
});
