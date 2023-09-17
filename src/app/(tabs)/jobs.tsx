import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";

//customs
import { COLORS } from "../../constants";
import JobListItems from "../../components/jobs/JobListItems";

export default function JobsScreen() {
  return (
    <View style={styles.container}>
      <JobListItems />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
