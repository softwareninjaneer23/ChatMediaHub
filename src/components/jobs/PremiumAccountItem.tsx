import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

//custom
import { PremiumJob } from "../../types";
import { COLORS } from "../../constants";

type PremiumJobProps = {
  premium: PremiumJob;
};

export default function PremiumAccountItem({ premium }: PremiumJobProps) {
  return (
    <>
      <View style={styles.premiumJobContainer}>
        {/*user image section*/}
        <View style={styles.premiumUserContainer}>
          <Image
            source={{ uri: premium.userImage }}
            style={styles.premiumUserItem}
          />
        </View>

        {/*user info section*/}
        <View style={styles.premiumUserInfoContainer}>
          {/*info top section*/}
          <View style={styles.infoTopContainer}>
            <Text style={styles.infoTopTextItem}>
              See the full list of jobs where you'd be a top applicant
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

      {/*separator section*/}
      <View style={styles.premiumSeparator} />
    </>
  );
}

const styles = StyleSheet.create({
  premiumJobContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  premiumUserContainer: {
    width: "18%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  premiumUserItem: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50,
  },

  //premium user info section
  premiumUserInfoContainer: {
    width: "82%",
  },
  infoTopContainer: {
    width: "100%",
  },
  infoTopTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  premiumContentContainer: {
    paddingHorizontal: 10,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  premiumContainer: {
    position: "relative",
    marginLeft: -10,
  },
  premiumImageContainer: {
    width: 25,
    flexDirection: "row",
  },
  premiumUserImageItem: {
    position: "relative",
    zIndex: 1,
    width: 25,
    height: 25,
    resizeMode: "cover",
    borderRadius: 25,
  },
  premiumTextContainer: {
    marginLeft: 5,
  },
  premiumTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  retryPremiumButtonContainer: {
    width: "50%",
    marginTop: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: COLORS.amber,
  },
  retryPremiumButtonTextItem: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  premiumSeparator: {
    marginVertical: 10,
    width: "100%",
    borderBottomColor: COLORS.darkGray,
    borderBottomWidth: StyleSheet.hairlineWidth * 1,
  },
});
