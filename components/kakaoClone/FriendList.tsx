import { ScrollView, View } from "react-native";
import Margin from "./Margin";
import Profile from "./Profile";

interface FriendListProps {
  data: {
    uri: string;
    name: string;
    introduction: string;
  }[];
  isOpen?: boolean;
}
export default function FriendList(props:FriendListProps) {
  return props.isOpen && (
    <ScrollView showsVerticalScrollIndicator={false}>
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
