import { CALCULATOR_COLOR, CalculatorBtnTypeList } from "@/constants/CalculatorTypes";
import { useState } from "react";
import { styled } from "styled-components/native";
import Button from "./Button";

export default function Calculator() {
  const [input, setInput] = useState<number>(0);
  const [currentOperator, setCurrentOperator] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [tempInput, setTempInput] = useState<number | null>(null);
  const [tempOperator, setTempOperator] = useState<string | null>(null);
    

  return (
    <CalculatorArea>
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
          text="AC"
          onPress={() => { }}
          flex={3}
        />
        <Button 
          type={CalculatorBtnTypeList.OPERATOR}
          text="/" 
          onPress={() => {}} 
          flex={1}
        />
      </RowBox>
      {/* 7 ~ x */}
      <RowBox>
        <Button 
          type={CalculatorBtnTypeList.NUM}
          text="7"
          onPress={() => { }}
          flex={1}
        />
        <Button 
          type={CalculatorBtnTypeList.NUM}
          text="8"
          onPress={() => { }}
          flex={1}
        />
        <Button 
          type={CalculatorBtnTypeList.NUM}
          text="9"
          onPress={() => { }}
          flex={1}
        />
        <Button 
          type={CalculatorBtnTypeList.OPERATOR}
          text="x" 
          onPress={() => {}} 
          flex={1}
        />
      </RowBox>
      {/* 4 ~ - */}
      <RowBox>
        <Button 
          type={CalculatorBtnTypeList.NUM}
          text="4"
          onPress={() => { }}
          flex={1}
        />
        <Button 
          type={CalculatorBtnTypeList.NUM}
          text="5"
          onPress={() => { }}
          flex={1}
        />
        <Button 
          type={CalculatorBtnTypeList.NUM}
          text="6"
          onPress={() => { }}
          flex={1}
        />
        <Button 
          type={CalculatorBtnTypeList.OPERATOR}
          text="-" 
          onPress={() => {}} 
          flex={1}
        />
      </RowBox>
      {/* 1 ~ + */}
      <RowBox>
        <Button 
          type={CalculatorBtnTypeList.NUM}
          text="1"
          onPress={() => { }}
          flex={1}
        />
        <Button 
          type={CalculatorBtnTypeList.NUM}
          text="2"
          onPress={() => { }}
          flex={1}
        />
        <Button 
          type={CalculatorBtnTypeList.NUM}
          text="3"
          onPress={() => { }}
          flex={1}
        />
        <Button 
          type={CalculatorBtnTypeList.OPERATOR}
          text="+" 
          onPress={() => {}} 
          flex={1}
        />
      </RowBox>
      {/* 0 ~ = */}
      <RowBox>
        <Button 
          type={CalculatorBtnTypeList.NUM}
          text="0"
          onPress={() => { }}
          flex={3}
        />
        <Button 
          type={CalculatorBtnTypeList.OPERATOR}
          text="=" 
          onPress={() => {}} 
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