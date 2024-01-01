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
      text: "Hey I saw your last mes im not sure whatever thsisis is going and stuff",
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
          maxWidth={"100%"}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "flex-start",
            width: "100%",
          }}
          padding={5}
        >
          <YStack>
            {msgList?.map((m, i) => {
              return (
                <XStack // needs on click handler
                  key={i}
                  height={60}
                  backgroundColor={"$purple5Dark"}
                  flex={1}
                  justifyContent="flex-start"
                  alignItems="center"
                  marginBottom={5}
                  padding={5}
                >
                  <Avatar circular size="$3">
                    <Avatar.Image src={m.icon} />
                    <Avatar.Fallback bc="red" />
                  </Avatar>
                  <YStack marginLeft={5} marginRight={15}>
                    <Text>{m.userName}</Text>
                    <Text wordWrap="break-word">{m.text}</Text>
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
