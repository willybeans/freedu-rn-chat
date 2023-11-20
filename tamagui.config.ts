// the v2 config imports the css driver on web and react-native on native

// for reanimated: @tamagui/config/v2-reanimated

// for react-native only: @tamagui/config/v2-native
import {
  color,
  radius,
  size,
  space,
  themes,
  zIndex,
  tokens,
} from "@tamagui/themes";
import { shorthands } from "@tamagui/shorthands";
import { createTamagui, createTokens } from "tamagui";

import { config } from "@tamagui/config/v2";

// const tokens = createTokens({
//   size,
//   space,
//   zIndex,
//   color,
//   radius,
// });

const config1 = createTamagui({
  ...config,
  shorthands,
  themes,
  tokens,
  // ... see Configuration
});
const tamaguiConfig = createTamagui(config1);
// this makes typescript properly type everything based on the config
// export type Conf = typeof config
export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
export default tamaguiConfig;
// depending on if you chose tamagui, @tamagui/core, or @tamagui/web

// be sure the import and declare module lines both use that same name
