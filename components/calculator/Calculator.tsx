import { CALCULATOR_COLOR, CalculatorBtnTypeList } from "@/constants/CalculatorTypes";
import { useState } from "react";
import { Text } from "react-native";
import { styled } from "styled-components/native";
import Button from "./Button";

export default function Calculator() {
  const [input, setInput] = useState<number>(0);
  const [currentOperator, setCurrentOperator] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [tempInput, setTempInput] = useState<number | null>(null);
  const [tempOperator, setTempOperator] = useState<string | null>(null);
  const [isClickedOperator, setIsClickedOperator] = useState<boolean>(false);
  const [isClickedEqual, setIsClickedEqual] = useState<boolean>(false);

  const hasInput = !!input;

  const onPressNumber = (num: number) => {
    if(currentOperator && isClickedOperator) {
      setResult(input);
      setInput(num);
      setIsClickedOperator(false);
    } else {
      const newInput = Number(`${input}${num}`);
      setInput(newInput);
    }

  }

  const onPressOperator = (operator: string) => {
    if (operator !== "=") {
      setCurrentOperator(operator);
      setIsClickedOperator(true);
      setIsClickedEqual(false);
    } else {
      let finalResult = result;
      const finalInput = isClickedEqual ? (tempInput ?? 0) : input;
      const finalOperator = isClickedEqual ? tempOperator : currentOperator;
      switch (finalOperator) {
        case "+":
          finalResult = (result ?? 0) + finalInput;
          break;
        case "-":
          finalResult = (result ?? 0) - finalInput;
          break;
        case "*":
          finalResult = (result ?? 0) * finalInput;
          break;
        case "/":
          if (finalInput !== 0) {
            finalResult = (result ?? 0) / finalInput;
          }
          break;
        default:
          break; 
      }
      setResult(finalResult);
      setInput(finalResult ?? 0);
      setTempInput(finalInput);
      setCurrentOperator(null);
      setTempOperator(finalOperator);
      setIsClickedEqual(true);
    }
  }

  const onPressReset = () => {
    if(hasInput){
      setInput(0);
    } else {
      setInput(0);
      setCurrentOperator(null);
      setResult(null);
      setTempInput(null);
      setTempOperator(null);
      setIsClickedOperator(false);
    }
  }


  return (
    <CalculatorArea>
      {/* Test */}
      <Text>input: {input}</Text>
      <Text>currentOperator: {currentOperator}</Text>
      <Text>result: {result}</Text>
      <Text>tempInput: {tempInput}</Text>
      <Text>tempOperator: {tempOperator}</Text>

      
      {/* result */}
      <InputContainer>
        <InputText>
          {input}
        </InputText>
      </InputContainer>
      {/* AC ~ / */}
      <RowBox>
        <Button 
          type={CalculatorBtnTypeList.RESET}
          text={hasInput ? "C" : "AC"}
          onPress={onPressReset}
          flex={3}
        />
        <Button 
          type={CalculatorBtnTypeList.OPERATOR}
          text="/" 
          onPress={() => onPressOperator("/")} 
          flex={1}
          isSelected={currentOperator === "/"}
        />
      </RowBox>
      {/* 7 ~ x */}
      <RowBox>
        {[7, 8, 9].map(num => (
          <Button 
            key={num}
            type={CalculatorBtnTypeList.NUM}
            text={num.toString()}
            onPress={() => onPressNumber(num)}
            flex={1}
          />
        ))}
        <Button 
          type={CalculatorBtnTypeList.OPERATOR}
          text="x" 
          onPress={() => onPressOperator("*")} 
          flex={1}
          isSelected={currentOperator === "*"}
        />
      </RowBox>
      {/* 4 ~ - */}
      <RowBox>
        {[4, 5, 6].map(num => (
          <Button 
            key={num}
            type={CalculatorBtnTypeList.NUM}
            text={num.toString()}
            onPress={() => onPressNumber(num)}
            flex={1}
          />
        ))}
        <Button 
          type={CalculatorBtnTypeList.OPERATOR}
          text="-" 
          onPress={() => onPressOperator("-")} 
          flex={1}
          isSelected={currentOperator === "-"}
        />
      </RowBox>
      {/* 1 ~ + */}
      <RowBox>
        {[1, 2, 3].map(num => (
          <Button 
            key={num}
            type={CalculatorBtnTypeList.NUM}
            text={num.toString()}
            onPress={() => onPressNumber(num)}
            flex={1}
          />
        ))}
        <Button 
          type={CalculatorBtnTypeList.OPERATOR}
          text="+" 
          onPress={() => onPressOperator("+")} 
          flex={1}
          isSelected={currentOperator === "+"}
        />
      </RowBox>
      {/* 0 ~ = */}
      <RowBox>
        <Button 
          type={CalculatorBtnTypeList.NUM}
          text="0"
          onPress={() => { onPressNumber(0) }}
          flex={3}
        />
        <Button 
          type={CalculatorBtnTypeList.OPERATOR}
          text="=" 
          onPress={() => {onPressOperator("=")}} 
          flex={1}
        />
      </RowBox>
    </CalculatorArea>
  )
};

const InputContainer = styled.View`
  background-color: ${CALCULATOR_COLOR.RESULT};
  min-height: 50px;
`;

const InputText = styled.Text`
  color: #fff;
  font-size: 30px;
  text-align: right;
  padding: 10px;
`;

const CalculatorArea = styled.View`
  flex: 1;
  justify-content: center;
  width: 200px;
`;

const RowBox = styled.View`
  flex-direction: row;
  width: 100%;
`;