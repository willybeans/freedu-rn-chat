import { XStack, YStack, Stack, Text, View, Theme, Button } from "tamagui";

export default () => (
  <Theme name="dark">
    <Theme name="purple">
      <Stack
        backgroundColor={"$purple1Dark"}
        flex={1}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        <Text>Hello</Text>
        <Text>four</Text>
        <Button>Hello Profile!</Button>
      </Stack>
    </Theme>
  </Theme>
);
