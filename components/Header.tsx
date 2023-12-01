import { Avatar, Button, YStack } from "tamagui";
import { Text, TextProps } from "./Themed";
import TabBarIcon from "./TabBarIcon";

export function Header(props: TextProps, color: string) {
  console.log("text: ", props);
  return (
    <YStack alignItems="center">
      <Avatar circular size="$3">
        <Avatar.Image src="http://placekitten.com/200/300" />
        <Avatar.Fallback bc="red" />
      </Avatar>
      <Text>usersname</Text>
      {/* <Text {...props} style={[props.style, { fontFamily: "SpaceMono" }]} /> */}
    </YStack>
  );
}
