import { CALCULATOR_COLOR, CalculatorBtnType } from "@/constants/CalculatorTypes";
import { styled } from "styled-components/native";

interface CalculatorButtonProps {
  text: string;
  onPress: () => void;
  flex: number;
  type: CalculatorBtnType;
  isSelected?: boolean;
}

export default function Button({
  text="", 
  onPress, 
  flex, 
  type,
  isSelected=false
}:CalculatorButtonProps) {
  return (
    <TouchBtn 
      onPress={onPress} 
      $bgColor={CALCULATOR_COLOR[type]}
      $flex={flex}
      $isSelected={isSelected}
    >
      <BtnText>{text}</BtnText>
    </TouchBtn>
  );
};

interface TouchBtnProps {
  $bgColor: string;
  $flex: number;
  $isSelected?: boolean;
}

const TouchBtn = styled.TouchableOpacity<TouchBtnProps>`
  flex: ${props => props.$flex || 1};
  background-color: ${props => props.$bgColor || CALCULATOR_COLOR.RESULT};
  justify-content: center;
  align-items: center;
  height: 50px;
  border: ${props => props.$isSelected ? '1px solid #333' : '0.2px solid #333'};
`;

const BtnText = styled.Text`
  color: #fff;
  font-size: 25px;
`;