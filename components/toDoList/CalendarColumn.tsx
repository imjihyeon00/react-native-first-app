import { Text, TouchableOpacity } from "react-native";

const COULMN_SIZE = 35;

interface ColumnProps {
  text: string;
  color: string;
  opacity: number;
  disabled?: boolean;
  onPress?: () => void;
  isSelected?: boolean;
}

export default function CalendarColumn({ text, color, opacity, disabled=false, onPress, isSelected=false }: ColumnProps) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      disabled={disabled}
      style={{ 
        width: COULMN_SIZE, 
        height: COULMN_SIZE, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: COULMN_SIZE / 2,
        backgroundColor: isSelected ? 'lightgray' : 'transparent', 
      }}
    >
      <Text style={{ color, opacity }}>{text}</Text>
    </TouchableOpacity>
  );
};
