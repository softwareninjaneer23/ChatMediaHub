import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

//custom
import { PremiumJob } from "../../types";
import { COLORS } from "../../constants";

type PremiumJobProps = {
  premium: PremiumJob;
};

export default function PremiumJobSearchItem({ premium }: PremiumJobProps) {
  return (
    <>
      <View style={styles.premiumJobContainer}>
        {/*user info section*/}
        <View style={styles.premiumUserInfoContainer}>
          {/*info top section*/}
          <View style={styles.infoTopContainer}>
            <Text style={styles.infoTopTextItem}>
              See who's viewed your profile and directly message recruiters with
              inMail.
            </Text>
          </View>

          {/*info middle section*/}
          <View style={styles.premiumContentContainer}>
            {premium.premiumPeople.map((premiumUser, i) => (
              <View key={i} style={styles.premiumContainer}>
                <View style={styles.premiumImageContainer}>
                  <Image
                    source={{ uri: premiumUser.personImage }}
                    style={styles.premiumUserImageItem}
                  />
                </View>
              </View>
            ))}

            <View style={styles.premiumTextContainer}>
              <Text style={styles.premiumTextItem}>
                Remember and millions of other members use Premium
              </Text>
            </View>
          </View>

          {/*info button section*/}
          <View style={styles.retryPremiumButtonContainer}>
            <Text style={styles.retryPremiumButtonTextItem}>
              retry premium free
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  premiumJobContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  //premium user info section
  premiumUserInfoContainer: {
    width: "100%",
  },
  infoTopContainer: {
    width: "100%",
  },
  infoTopTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.5,
  },
  premiumContentContainer: {
    paddingHorizontal: 5,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  premiumContainer: {
    position: "relative",
    marginLeft: -5,
  },
  premiumImageContainer: {
    width: 25,
    flexDirection: "row",
  },
  premiumUserImageItem: {
    position: "relative",
    zIndex: 1,
    width: 28,
    height: 28,
    resizeMode: "cover",
    borderRadius: 28,
  },
  premiumTextContainer: {
    marginLeft: 8,
  },
  premiumTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  retryPremiumButtonContainer: {
    width: "50%",
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: COLORS.amber,
  },
  retryPremiumButtonTextItem: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: "600",
    textTransform: "capitalize",
  },
});
