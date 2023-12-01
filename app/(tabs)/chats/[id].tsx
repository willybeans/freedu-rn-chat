import { useState, useEffect } from "react";
import { Stack } from "expo-router";
import { Theme, YStack, XStack, ScrollView, Text, Avatar } from "tamagui";

interface MsgData {
  msgs: Msg[];
}

type Msg = {
  userId: string;
  userName: string;
  icon: string;
  text: string;
};

const msgData: MsgData = {
  msgs: [
    {
      userId: "12345",
      userName: "brian1",
      icon: "http://placekitten.com/100/400",
      text: "Hey I saw your last mes im not sure whatever thsisis is going",
    },
    {
      userId: "34567",
      userName: "cindy1",
      icon: "http://placekitten.com/200/300",
      text: "Whenever i go out i try to go dancing i always eat cabbage before",
    },
    {
      userId: "12345",
      userName: "brian1",
      icon: "http://placekitten.com/100/400",
      text: "Hey I saw your last messsage and i thought about it",
    },
    {
      userId: "34567",
      userName: "cindy1",
      icon: "http://placekitten.com/200/300",
      text: "Whenever i eat cheese it tastes like cheese",
    },
  ],
};

export default () => {
  const [msgList, setMsgList] = useState<Msg[] | undefined>();
  //need to usecontext for present userId
  const userId = "12345";
  useEffect(() => {
    setMsgList([...msgData.msgs]);
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
            {msgList?.map((m, i) => {
              return (
                <XStack // needs on click handler
                  key={i}
                  height={"60px"}
                  backgroundColor={"$purple5Dark"}
                  flex={1}
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Avatar circular size="$3">
                    <Avatar.Image src={m.icon} />
                    <Avatar.Fallback bc="red" />
                  </Avatar>
                  <YStack>
                    <Text>{m.userName}</Text>
                    <Text>{m.text}</Text>
                  </YStack>
                </XStack>
              );
            })}
          </YStack>
        </ScrollView>
      </Theme>
    </Theme>
  );
};
