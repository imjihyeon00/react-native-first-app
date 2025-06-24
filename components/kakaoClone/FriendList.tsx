import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Profile from "./Profile";

interface FriendListProps {
  data: {
    uri: string;
    name: string;
    introduction: string;
  }[];
}
export default function FriendList(props:FriendListProps) {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: insets.bottom }}>
      {props.data.map((item, idx) => (
        <Profile
          key={idx}
          uri={item.uri}
          name={item.name}
          introduction={item.introduction}
        />
      ))}
    </ScrollView>
  )
};
