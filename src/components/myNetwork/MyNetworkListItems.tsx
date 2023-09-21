import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Link } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";

//dummy data
import premiumData from "../../../assets/data/premiumData.json";
import JobTitleData from "../../../assets/data/jobTitleData.json";

//custom
import PremiumJobSearchItem from "./PremiumJobSearchItem";
import { COLORS } from "../../constants";

export default function MyNetworkListItems() {
  //state handlers
  const [personInvite, setPersonInvite] = useState(true);
  const [newsletterInvite, setNewsletterInvite] = useState(true);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.networkMainComponentContainer}
    >
      {/*manage my network section*/}
      <View style={styles.manageMyNetworkContainer}>
        <View style={styles.manageMyNetworkTextContainer}>
          <Text style={styles.manageMyNetworkTextItem}>Manage my network</Text>
        </View>

        <View style={styles.manageMyNetworkIconContainer}>
          <Link href={"/myNetwork/ManageMyNetwork"}>
            <AntDesign name="arrowright" size={16} color={COLORS.white} />
          </Link>
        </View>
      </View>

      {/*invitations section*/}
      <View style={styles.invitationContainer}>
        {/*invitation header*/}
        <View style={styles.invitationHeaderContainer}>
          <View style={styles.manageMyNetworkTextContainer}>
            <Text style={styles.manageMyNetworkTextItem}>Invitations (1)</Text>
          </View>

          <View style={styles.manageMyNetworkIconContainer}>
            <AntDesign name="arrowright" size={16} color={COLORS.white} />
          </View>
        </View>

        {/*user invite alert*/}
        {personInvite ? (
          <View style={styles.personInviteContainer}>
            {/*user image section*/}
            <View style={styles.personImageContainer}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1622080573123-971c6f6d6800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                }}
                style={styles.personImageItem}
              />
            </View>

            {/*text section*/}
            <View style={styles.personTextContainer}>
              <Text style={styles.personTextItem}>
                Lauren accepted your invitation to connect
              </Text>
              <Text style={styles.personTextMessageItem}>Message</Text>
            </View>

            {/*icon section*/}
            <TouchableOpacity
              onPress={() => setPersonInvite(false)}
              style={styles.personActionContainer}
            >
              <Ionicons name="close-sharp" size={18} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        ) : null}

        {/*newsletter invite alert*/}
        {newsletterInvite ? (
          <View style={styles.newsletterContainer}>
            {/*image section*/}
            <View style={styles.newsletterImageContainer}>
              {/*newsletter image*/}
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1555597906-44a7f7e3e0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                }}
                style={styles.newsletterImageItem}
              />

              {/*newsletter icon*/}
              <View style={styles.newsletterIconContainer}>
                <View style={styles.newsletterIconContent}>
                  <Ionicons
                    name="calendar-outline"
                    size={18}
                    color={COLORS.white}
                  />
                </View>
              </View>
            </View>

            {/*text section*/}
            <View style={styles.newsletterTextContainer}>
              {/*heading section*/}
              <View style={styles.newsletterHeadingContainer}>
                <Text style={styles.newsletterHeadingTextItem}>
                  Newsletter · Monthly
                </Text>
              </View>

              {/*description section*/}
              <View style={styles.newsletterDescriptionContainer}>
                <Text style={styles.newsletterDescriptionBold}>
                  Ferrari Solutions{" "}
                  <Text style={styles.newsletterDescriptionNormal}>
                    invited you to subscribe to{" "}
                  </Text>
                  <Text style={styles.newsletterDescriptionBold}>
                    The Ferrari Smart Way{" "}
                  </Text>
                </Text>
              </View>

              {/*date sent section*/}
              <View style={styles.newsletterTimeContainer}>
                <Text style={styles.newsletterDescriptionNormal}>
                  Yesterday
                </Text>
              </View>
            </View>

            {/*action section*/}
            <View style={styles.newsletterActionContainer}>
              {/*remove action*/}
              <View style={styles.newsletterActionContent}>
                <TouchableOpacity
                  onPress={() => setNewsletterInvite(false)}
                  style={styles.newsletterActionRemoveItem}
                >
                  <AntDesign name="close" size={14} color={COLORS.darkGray} />
                </TouchableOpacity>
              </View>

              {/*accept action*/}
              <View style={styles.newsletterActionContent}>
                <TouchableOpacity
                  onPress={() => setNewsletterInvite(false)}
                  style={styles.newsletterActionAcceptItem}
                >
                  <Ionicons
                    name="checkmark-sharp"
                    size={14}
                    color={COLORS.greenActive}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}
      </View>

      {/*celebrations section*/}
      <View style={styles.celebrationsContainer}>
        <View style={styles.celebrationsTextContainer}>
          <Text style={styles.celebrationsTextItem}>Celebrations</Text>
          <Text style={styles.celebrationsTextNormalItem}>
            Job changes, Birthdays, Work Anniversaries
          </Text>
        </View>

        <View style={styles.celebrationsIconContainer}>
          <AntDesign name="arrowright" size={16} color={COLORS.white} />
        </View>
      </View>

      {/*job search smarter ad section*/}
      <View style={styles.jobSearchContainer}>
        {/*job search heading*/}
        <View style={styles.jobSearchHeaderContainer}>
          <View style={styles.jobSearchHeaderTextContainer}>
            <Text style={styles.jobSearchHeaderTextItem}>
              Job search smarter
            </Text>
          </View>

          <View style={styles.jobSearchHeaderIconContainer}>
            <AntDesign name="close" size={24} color={COLORS.white} />
          </View>
        </View>

        {/*job search info*/}
        <View style={styles.jobSearchInfoTextContainer}>
          {premiumData.map((premium) => (
            <PremiumJobSearchItem key={premium.id} premium={premium} />
          ))}
        </View>
      </View>

      {/*similar job title suggestion section*/}
      <View style={styles.similarJobTitleContainer}>
        {/*header section*/}
        <View style={styles.similarJobTitleHeaderContainer}>
          <Text style={styles.similarJobTitleHeaderTextItem}>
            Software Engineers you may know
          </Text>
        </View>

        {/*list section*/}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  networkMainComponentContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },

  //my network section
  manageMyNetworkContainer: {
    width: "100%",
    height: 50,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: COLORS.reechGray,
  },
  manageMyNetworkTextContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  manageMyNetworkTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  manageMyNetworkIconContainer: {
    width: "15%",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  //invitation section
  invitationContainer: {
    width: "100%",
    flexDirection: "column",
  },
  invitationHeaderContainer: {
    width: "100%",
    height: 50,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.reechGray,
  },
  personInviteContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.darkBlue,
  },
  personImageContainer: {
    width: "15%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  personImageItem: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50,
  },
  personTextContainer: {
    width: "70%",
    flexDirection: "column",
  },
  personTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.5,
  },
  personTextMessageItem: {
    marginTop: 2,
    color: COLORS.lightBlue,
    fontSize: 14,
    fontWeight: "600",
  },
  personActionContainer: {
    width: "10%",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  //newsletter section
  newsletterContainer: {
    width: "100%",
    paddingTop: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.reechGray,
  },
  newsletterImageContainer: {
    width: "16%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: 5,
  },
  newsletterImageItem: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 60,
  },
  newsletterIconContainer: {
    left: 33,
    bottom: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    zIndex: 1,
  },
  newsletterIconContent: {
    padding: 4,
    borderRadius: 20,
    backgroundColor: COLORS.greenActive,
  },
  newsletterTextContainer: {
    width: Platform.OS === "ios" ? "58%" : "56%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  newsletterHeadingContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  newsletterHeadingTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "400",
  },
  newsletterDescriptionContainer: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  newsletterDescriptionBold: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "bold",
  },
  newsletterDescriptionNormal: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },
  newsletterTimeContainer: {
    width: "100%",
    marginTop: 5,
  },
  newsletterActionContainer: {
    width: Platform.OS === "ios" ? "20%" : "22%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  newsletterActionContent: {
    width: "48%",
  },
  newsletterActionRemoveItem: {
    width: 35,
    height: 35,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.darkGray,
    borderWidth: 1,
    borderRadius: 30,
  },
  newsletterActionAcceptItem: {
    width: 35,
    height: 35,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.greenActive,
    borderWidth: 1,
    borderRadius: 30,
  },

  //celebrations section
  celebrationsContainer: {
    width: "100%",
    height: 70,
    marginVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.reechGray,
  },
  celebrationsTextContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  celebrationsTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  celebrationsTextNormalItem: {
    marginTop: 5,
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  celebrationsIconContainer: {
    width: "15%",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  //job search section
  jobSearchContainer: {
    width: "100%",
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: COLORS.reechGray,
  },
  jobSearchHeaderContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jobSearchHeaderTextContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  jobSearchHeaderTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  jobSearchHeaderIconContainer: {
    width: "20%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  jobSearchInfoTextContainer: {
    width: "100%",
    marginTop: 10,
    marginBottom: 0,
  },

  //similar job title section
  similarJobTitleContainer: {
    width: "100%",
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: "column",
    backgroundColor: COLORS.reechGray,
  },
  similarJobTitleHeaderContainer: {
    width: "100%",
  },
  similarJobTitleHeaderTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "400",
  },
});
