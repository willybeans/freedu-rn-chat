import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { Theme, YStack, XStack, ScrollView, Text, Avatar } from "tamagui";
import EditScreenInfo from "../../components/EditScreenInfo";
// import { Text, View } from "../../components/Themed";

interface UserData {
  chats: Chat[];
}

type Chat = {
  userId: string;
  userName: string;
  lastMessageClip: string;
};

const userData: UserData = {
  chats: [
    {
      userId: "12345",
      userName: "Matthew",
      lastMessageClip: "Hey I saw your last mes...",
      //last message should come in full and be reduced in render
      // chat id should be included for linking to websocket/db
    },
    {
      userId: "34567",
      userName: "Cindy",
      lastMessageClip: "Whenever i go out i try....",
    },
    {
      userId: "23456",
      userName: "Brian",
      lastMessageClip: "The last time i went dow...",
    },
  ],
};

export default function TabTwoScreen() {
  const [chatList, setChatList] = useState<Chat[] | undefined>();
  useEffect(() => {
    setChatList([...userData.chats]);
  }, []);
  return (
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
            {chatList?.map((c, i) => {
              return (
                <XStack // needs on click handler
                  key={i}
                  // maxWidth={"50%"}
                  height={"60px"}
                  backgroundColor={"$purple5Dark"}
                  flex={1}
                  justifyContent="flex-start"
                  alignItems="center"
                  borderBottomWidth="2px"
                  // borderStyle="solid"
                  borderBottomColor={"black"}
                >
                  <Avatar circular size="$3">
                    <Avatar.Image src="http://placekitten.com/200/300" />
                    <Avatar.Fallback bc="red" />
                  </Avatar>
                  <YStack>
                    <Text>{c.userName}</Text>
                    <Text>{c.lastMessageClip}</Text>
                  </YStack>
                </XStack>
              );
            })}
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
}

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
