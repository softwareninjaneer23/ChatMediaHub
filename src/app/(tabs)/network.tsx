import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";

//custom
import { COLORS } from "../../constants";
import MyNetworkListItems from "../../components/myNetwork/MyNetworkListItems";

export default function NetworkScreen() {
  return (
    <View style={styles.networkMainContainer}>
      <MyNetworkListItems />
    </View>
  );
}

const styles = StyleSheet.create({
  networkMainContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
