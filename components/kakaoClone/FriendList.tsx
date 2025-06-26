import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Margin from "./Margin";
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
        <View key={idx}>
          <Profile
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
          />
          <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  )
};
