import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, TouchableOpacity, View } from "react-native";

interface FriendSectionProps {
  friendProfileLen: number;
  onPress: () => void;
  isOpen?: boolean;
}
export default function FriendSection(props:FriendSectionProps) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{color:'grey'}}>친구 {props.friendProfileLen}</Text>
      <TouchableOpacity onPress={props.onPress}>
        <MaterialIcons name={props.isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color='lightgrey' />
      </TouchableOpacity>
    </View>
  )
};
