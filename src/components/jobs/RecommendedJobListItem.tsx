import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Link } from "expo-router";

//custom
import { RecommendedJobList } from "../../types";
import { COLORS } from "../../constants";

type RecommendedJobListProps = {
  recommend: RecommendedJobList;
};

export default function RecommendedJobListItem({
  recommend,
}: RecommendedJobListProps) {
  return (
    <View style={styles.recommendedJobsContainer}>
      <View style={styles.recommendedJobsContent}>
        {/*company image section*/}
        <View style={styles.companyJobImageContainer}>
          <Image
            source={{ uri: recommend.companyImage }}
            style={styles.companyJobImageItem}
          />
        </View>

        {/*company job details section*/}
        <View style={styles.recommendedJobDetailsContainer}>
          {/*job title section*/}
          <View style={styles.jobTitleContainer}>
            <View style={styles.jobTitleNameContainer}>
              <Text style={styles.jobTitleNameText}>
                <Link href={`/jobs/${recommend.id}`}>{recommend.jobTitle}</Link>
              </Text>
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
              {recommend.companyName}
            </Text>
          </View>

          {/*company location section*/}
          <View style={styles.companyLocationContainer}>
            <Text style={styles.companyLocationTextItem}>
              {recommend.companyLocation} ({recommend.jobType})
            </Text>
          </View>

          {/*actively recruiting section*/}
          <View style={styles.activelyRecruitingContainer}>
            {/*show if actively recruiting item*/}
            {recommend.activelyRecruiting ? (
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

            {recommend.connectionWhoWorkHere &&
            !recommend.activelyRecruiting ? (
              <View style={styles.connectionContentContainer}>
                {recommend.connectionWhoWorkHere.map((connection, i) => (
                  <View key={i} style={styles.connectionContainer}>
                    <View style={styles.connectionImageContainer}>
                      <Image
                        source={{ uri: connection.connectionImage }}
                        style={styles.connectionImageItem}
                      />
                    </View>
                  </View>
                ))}

                <View style={styles.connectionCountTextContainer}>
                  <Text style={styles.connectionCountTextItem}>
                    {recommend.connectionWhoWorkHere.length} connection works
                    here
                  </Text>
                </View>
              </View>
            ) : null}
          </View>

          {/*date, promoted, apply section*/}
          <View style={styles.promotedContainer}>
            {/*promoted item*/}
            <Text style={styles.activelyRecruitingTextItem}>
              {recommend.promoted
                ? "Promoted · "
                : recommend.postedDate
                ? recommend.postedDate + " · "
                : ""}
            </Text>

            {/*applicants item*/}
            {recommend.numberOfApplicants ? (
              <Text style={styles.numberOfApplicantTextItem}>
                {recommend.numberOfApplicants} applicants{" "}
                {!recommend.isEasyApply ? (
                  ""
                ) : (
                  <Text style={styles.activelyRecruitingTextItem}>·</Text>
                )}{" "}
              </Text>
            ) : null}

            {/*apply item*/}
            {recommend.isEasyApply ? (
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
      <View style={styles.recommendedJobSeparator} />
    </View>
  );
}

const styles = StyleSheet.create({
  recommendedJobsContainer: {
    flexDirection: "column",
  },
  recommendedJobsContent: {
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
  recommendedJobDetailsContainer: {
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
  recommendedJobSeparator: {
    width: "94%",
    alignSelf: "center",
    borderBottomColor: COLORS.darkGray,
    borderBottomWidth: StyleSheet.hairlineWidth * 1.5,
    marginVertical: 15,
  },
});
