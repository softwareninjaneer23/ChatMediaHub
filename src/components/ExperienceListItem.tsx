import React from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";

//custom
import { Experience } from "../types";
import SkillListItem from "./SkillListItem";
import { COLORS, images } from "../constants";

type ExperienceListItemProps = {
  experience: Experience;
};

export default function ExperienceListItem({
  experience,
}: ExperienceListItemProps) {
  return (
    <View style={styles.experienceItemsContainer}>
      <View style={styles.experienceItemsContent}>
        {/*company image section*/}
        <View style={styles.experienceCompanyImageContainer}>
          {experience.companyImage === "" || null ? (
            <Image
              source={images.logoColor}
              style={styles.experienceCompanyImageItem}
            />
          ) : (
            <Image
              source={{ uri: experience.companyImage }}
              style={styles.experienceCompanyImageItem}
            />
          )}
        </View>

        {/*company exp details section*/}
        <View style={styles.experienceCompanyNameContainer}>
          {/*company name*/}
          <Text style={styles.experienceCompanyNameItem}>
            {experience.title}
          </Text>

          {/*position employment type name*/}
          <View style={styles.experienceDurationContainer}>
            <Text style={styles.experienceTextItem}>
              {experience.companyName} ·{" "}
            </Text>
            <Text style={styles.experienceTextItem}>
              {experience.occupationType}
            </Text>
          </View>

          {/*duration name*/}
          <View style={styles.experienceDateContainer}>
            <Text style={styles.experienceDateTextItem}>
              {experience.fromDate} - {experience.toDate} ·{" "}
              {experience.duration}
            </Text>
          </View>

          {/*location name*/}
          <View style={styles.experienceDateContainer}>
            <Text style={styles.experienceDateTextItem}>
              {experience.location}
            </Text>
          </View>

          {/*skills name*/}
          <View style={styles.skillContainer}>
            <Text style={styles.skillHeadingTextItem}>Skills: </Text>
            <View style={styles.skillsContainer}>
              {experience.skills?.map((skill, index) => (
                <SkillListItem
                  key={skill.id}
                  skill={skill}
                  isLastSkill={index === experience.skills.length - 1}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.experienceSeparator} />
    </View>
  );
}

const styles = StyleSheet.create({
  experienceItemsContainer: {
    flexDirection: "column",
  },
  experienceItemsContent: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
  },
  experienceCompanyImageContainer: {
    width: Platform.OS === "ios" ? "16%" : "20%",
  },
  experienceCompanyImageItem: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  experienceCompanyNameContainer: {
    width: Platform.OS === "ios" ? "84%" : "80%",
    flexDirection: "column",
  },
  experienceCompanyNameItem: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "600",
  },
  experienceDurationContainer: {
    flexDirection: "row",
  },
  experienceTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },
  experienceDateContainer: {
    flexDirection: "row",
  },
  experienceDateTextItem: {
    color: COLORS.darkGray,
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 2,
  },
  skillContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  skillHeadingTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
  },
  skillsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  experienceSeparator: {
    marginVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.darkGray,
  },
});
