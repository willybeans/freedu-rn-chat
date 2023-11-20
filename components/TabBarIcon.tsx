import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Entypo } from "@expo/vector-icons";
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
export default function TabBarIcon(props: {
  // route: string;
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  // switch (props.route) {
  //   case "chat":
  //     return <Entypo name="chat" size={24} color="black" />;
  //     break;
  //   default:
  // console.log('test: ', {...props})
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
  // break;
}
// }
