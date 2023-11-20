import { XStack, YStack, Text, View } from "tamagui";
import { StyleSheet } from "react-native";

export default () => (
  // <XStack space>

  //   <YStack />
  //   <Text> test 1</Text>
  //   <YStack />
  //   <Text> test 2</Text>
  //   <YStack />
  // </XStack>
  <View>
    <Text style={styles.title}>Tab three</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
