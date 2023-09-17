import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

//custom
import { PremiumJobList } from "../../types";
import { COLORS } from "../../constants";

type PremiumJobListProps = {
  premiumJob: PremiumJobList;
};

export default function PremiumJobListItem({
  premiumJob,
}: PremiumJobListProps) {
  return (
    <View style={styles.premiumJobsContainer}>
      <View style={styles.premiumJobsContent}>
        {/*company image section*/}
        <View style={styles.companyJobImageContainer}>
          <Image
            source={{ uri: premiumJob.companyImage }}
            style={styles.companyJobImageItem}
          />
        </View>

        {/*company job details section*/}
        <View style={styles.premiumJobDetailsContainer}>
          {/*job title section*/}
          <View style={styles.jobTitleContainer}>
            <View style={styles.jobTitleNameContainer}>
              <Text style={styles.jobTitleNameText}>{premiumJob.jobTitle}</Text>
            </View>

            <TouchableOpacity
              onPress={() => console.log("select one item to saves")}
              style={styles.jobTitleIconContainer}
            >
              <Ionicons
                name="bookmark-outline"
                size={18}
                color={COLORS.white}
              />
            </TouchableOpacity>
          </View>

          {/*company name section*/}
          <View style={styles.companyNameContainer}>
            <Text style={styles.companyNameTextItem}>
              {premiumJob.companyName}
            </Text>
          </View>

          {/*company location section*/}
          <View style={styles.companyLocationContainer}>
            <Text style={styles.companyLocationTextItem}>
              {premiumJob.companyLocation} ({premiumJob.jobType})
            </Text>
          </View>

          {/*actively recruiting section*/}
          <View style={styles.activelyRecruitingContainer}>
            {/*show if actively recruiting item*/}
            {premiumJob.activelyRecruiting ? (
              <View style={styles.activelyRecruitingContent}>
                <MaterialCommunityIcons
                  name="checkbox-multiple-marked-circle-outline"
                  size={18}
                  color={COLORS.greenActive}
                />
                <Text style={styles.activelyRecruitingTextItem}>
                  {" "}
                  Actively recruiting
                </Text>
              </View>
            ) : null}

            {/*show if connection work here item*/}

            {premiumJob.matchesProfile ? (
              <View style={styles.connectionContentContainer}>
                <View style={styles.connectionContainer}>
                  <View style={styles.connectionImageContainer}>
                    <Image
                      source={{ uri: premiumJob.userProfile }}
                      style={styles.connectionImageItem}
                    />
                  </View>
                </View>

                <View style={styles.connectionCountTextContainer}>
                  <Text style={styles.connectionCountTextItem}>
                    Your profile matches this job
                  </Text>
                </View>
              </View>
            ) : null}
          </View>

          {/*date, promoted, apply section*/}
          <View style={styles.promotedContainer}>
            {/*promoted item*/}
            <Text style={styles.activelyRecruitingTextItem}>
              {premiumJob.promoted
                ? "Promoted · "
                : premiumJob.postedDate
                ? premiumJob.postedDate + " · "
                : ""}
            </Text>

            {/*applicants item*/}
            {premiumJob.numberOfApplicants ? (
              <Text style={styles.numberOfApplicantTextItem}>
                {premiumJob.numberOfApplicants} applicants{" "}
                {!premiumJob.isEasyApply ? (
                  ""
                ) : (
                  <Text style={styles.activelyRecruitingTextItem}>·</Text>
                )}{" "}
              </Text>
            ) : null}

            {/*apply item*/}
            {premiumJob.isEasyApply ? (
              <>
                <AntDesign
                  name="linkedin-square"
                  size={12}
                  color={COLORS.white}
                />
                <Text style={styles.activelyRecruitingTextItem}>
                  {" "}
                  Easy Apply
                </Text>
              </>
            ) : null}
          </View>
        </View>
      </View>

      {/*separator section*/}
      <View style={styles.premiumJobSeparator} />
    </View>
  );
}

const styles = StyleSheet.create({
  premiumJobsContainer: {
    flexDirection: "column",
  },
  premiumJobsContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  //company image section
  companyJobImageContainer: {
    width: "20%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  companyJobImageItem: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },

  //company job details section
  premiumJobDetailsContainer: {
    width: "80%",
    flexDirection: "column",
  },
  jobTitleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  jobTitleNameContainer: {
    width: "90%",
  },
  jobTitleNameText: {
    color: COLORS.lightBlue,
    fontSize: 14,
    fontWeight: "600",
  },
  jobTitleIconContainer: {
    width: "8%",
  },
  companyNameContainer: {
    width: "100%",
    marginVertical: 1,
  },
  companyNameTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
  },
  companyLocationContainer: {
    width: "80%",
    marginVertical: 1,
  },
  companyLocationTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
    opacity: 0.5,
  },
  activelyRecruitingContainer: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 5,
  },
  activelyRecruitingContent: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  activelyRecruitingTextItem: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: "400",
    opacity: 0.5,
  },
  numberOfApplicantTextItem: {
    color: COLORS.greenActive,
    fontSize: 10,
    fontWeight: "400",
  },
  connectionContentContainer: {
    paddingHorizontal: 10,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  connectionContainer: {
    position: "relative",
    marginLeft: -10,
  },
  connectionImageContainer: {
    width: 25,
    flexDirection: "row",
  },
  connectionImageItem: {
    position: "relative",
    zIndex: 1,
    width: 25,
    height: 25,
    resizeMode: "cover",
    borderRadius: 25,
  },
  connectionCountTextContainer: {
    marginLeft: 5,
  },
  connectionCountTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  promotedContainer: {
    width: "100%",
    marginTop: 2.5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  //separator item
  premiumJobSeparator: {
    width: "94%",
    alignSelf: "center",
    borderBottomColor: COLORS.darkGray,
    borderBottomWidth: StyleSheet.hairlineWidth * 1.5,
    marginVertical: 15,
  },
});
