import { View } from "react-native";

interface MarginProps {
  height: number;
}
export default function Margin(props:MarginProps) {
  return <View style={{height: props.height }} />;
};
