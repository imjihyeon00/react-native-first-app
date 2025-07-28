import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";

const ArrowButton = styled(TouchableOpacity)`
  paddingVertical: 15px;
  paddingHorizontal: 20px;
`;

interface CalendarArrowBtnProps {
  direction: "left" | "right";
  onPress: () => void;
}

/**
 * @param param direction: "left" | "right", onPress: () => void
 * @returns 
 */
export default function CalendarArrowBtn({ direction, onPress }: CalendarArrowBtnProps) {
  return (
    <ArrowButton onPress={onPress}>
      <SimpleLineIcons name={`arrow-${direction}`} size={15} color="black" />
    </ArrowButton>
  );
};
