import { Stack } from "expo-router";
import { purple, grayDark } from "@tamagui/colors";

export default function ChatsLayout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        headerTintColor: grayDark.gray11,
        headerStyle: {
          backgroundColor: "black",
        },
        headerTitleAlign: "center",
        tabBarActiveTintColor: purple.purple8,
        tabBarInactiveTintColor: grayDark.gray11,
        tabBarStyle: { backgroundColor: "black" },
      })}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Your Chats" }} />
      <Stack.Screen name="[id]" options={{ headerTitle: "InsertName" }} />
    </Stack>
  );
}
