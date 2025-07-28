import { Text, View } from "react-native";

const COULMN_SIZE = 35;

interface ColumnProps {
  text: string;
  color: string;
  opacity: number;
}

export default function CalendarColumn({ text, color, opacity }: ColumnProps) {
  return (
    <View style={{ 
      width: COULMN_SIZE, 
      height: COULMN_SIZE, 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <Text style={{ color, opacity }}>{text}</Text>
    </View>
  );
};
