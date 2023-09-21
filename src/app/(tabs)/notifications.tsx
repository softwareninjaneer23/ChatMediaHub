import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";

//custom
import { COLORS } from "../../constants";
import NotificationListItems from "../../components/notifications/NotificationListItems";

export default function NotificationsScreen() {
  return (
    <View style={styles.notificationMainContainer}>
      <NotificationListItems />
    </View>
  );
}

const styles = StyleSheet.create({
  notificationMainContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
