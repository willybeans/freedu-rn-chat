import { Theme, YStack, XStack, ScrollView, Text, Avatar } from "tamagui";
import { StyleSheet } from "react-native";
import { Link, HrefObject } from "expo-router";

import FontAwesome from "@expo/vector-icons/FontAwesome";

type Url = {
  pathname: string;
  params?: { id: string };
};

export default () => (
  <Theme name="dark">
    <Theme name="purple">
      <ScrollView
        backgroundColor={"$purple1Dark"}
        flex={1}
        // alignItems="flex-start"
        minWidth={"100vw"}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <YStack>
          <Link
            href={
              {
                pathname: `/explore/read`,
              } as HrefObject<Url>
            }
          >
            <FontAwesome
              size={38}
              style={{ marginBottom: -3 }}
              name={"book"}
              color="grey"
            />
            Read
          </Link>
        </YStack>
      </ScrollView>
    </Theme>
    {/* <View style={styles.container}>
    <Text style={styles.title}>Tab Two</Text>
    <View style={styles.separator} /> */}

    {/* <EditScreenInfo path="app/(tabs)/two.tsx" />
  </View> */}
  </Theme>
);
