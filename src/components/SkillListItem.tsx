import React from "react";
import { StyleSheet, Text, View } from "react-native";

//custom
import { Skills } from "../types";
import { COLORS } from "../constants";

type SkillListItemProps = {
  skill: Skills;
};

export default function SkillListItem({
  skill,
  isLastSkill,
}: SkillListItemProps) {
  return (
    <View style={styles.skillContent}>
      <Text style={styles.skillTextItem}>
        {skill.skill} {!isLastSkill && " ·"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  skillContent: {
    marginHorizontal: 4,
  },
  skillTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
  },
});
