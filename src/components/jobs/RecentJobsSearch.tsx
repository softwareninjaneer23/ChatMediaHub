import React from "react";
import { StyleSheet, Text, View } from "react-native";

//custom
import { RecentJobSearch } from "../../types";
import { COLORS } from "../../constants";

type RecentJobsSearchItemProps = {
  recent: RecentJobSearch;
};

export default function RecentJobsSearch({
  recent,
}: RecentJobsSearchItemProps) {
  return (
    <View style={styles.recentJobSearchContainer}>
      <View style={styles.recentJobContent}>
        {/*job search title section*/}
        <View style={styles.recentJobTitleContainer}>
          <Text style={styles.recentJobTitleItem}>
            {recent.jobName} {recent.newJob ? "· " : null}
          </Text>
          {recent.newJob ? (
            <Text style={styles.recentJobTitleNewItem}>
              {recent.jobCount} new
            </Text>
          ) : null}
        </View>

        {/*job search location section*/}
        <View style={styles.recentJobLocationContainer}>
          <Text style={styles.recentJobLocationTextItem}>
            {recent.jobLocation}
          </Text>
        </View>

        <View style={styles.recentJobSeparator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  recentJobSearchContainer: {
    paddingVertical: 5,
    flexDirection: "column",
  },
  recentJobContent: {
    flexDirection: "column",
  },
  recentJobTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  recentJobTitleItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
  },
  recentJobTitleNewItem: {
    color: COLORS.greenActive,
    fontSize: 12,
    fontWeight: "600",
  },
  recentJobLocationContainer: {
    flexDirection: "row",
  },
  recentJobLocationTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },
  recentJobSeparator: {
    marginTop: 8,
    borderBottomColor: COLORS.darkGray,
    borderBottomWidth: StyleSheet.hairlineWidth * 0.5,
  },
});
