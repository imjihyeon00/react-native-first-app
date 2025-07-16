
export const CalculatorBtnTypeList = {
  RESET: 'reset',
  OPERATOR: 'operator',
  NUM: 'num',
}
export type CalculatorBtnType = (typeof CalculatorBtnTypeList)[keyof typeof CalculatorBtnTypeList];

export const CALCULATOR_COLOR = {
  RESULT: '#4e4c51',
  [CalculatorBtnTypeList.RESET]: '#5f5e62',
  [CalculatorBtnTypeList.OPERATOR]: '#f39c29',
  [CalculatorBtnTypeList.NUM]: '#5c5674',
}