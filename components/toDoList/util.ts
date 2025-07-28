// iOS 시뮬레이터 키보드 on/off cmd + shift + k
import dayjs, { Dayjs } from "dayjs";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";

// 타입 정의
export const statusBarHeight: number = getStatusBarHeight(true);
export const bottomSpace: number = getBottomSpace();
export const ITEM_WIDTH = 220;

// 날짜 배열을 받아 캘린더 앞뒤 공백을 채워주는 함수
export const fillEmptyColumns = (
  columns: Dayjs[],
  start: Dayjs,
  end: Dayjs
): Dayjs[] => {
  const filledColumns = columns.slice(0);

  // 1. 첫날 이전 공백 채우기
  const startDay = start.get("day");
  for (let i = 1; i <= startDay; i += 1) {
    const date = start.subtract(i, "day");
    filledColumns.unshift(date);
  }

  // 2. 마지막날 이후 공백 채우기
  const endDay = end.get("day");
  for (let i = 1; i <= 6 - endDay; i += 1) {
    const date = end.add(i, "day");
    filledColumns.push(date);
  }

  return filledColumns;
};

// 해당 월의 모든 날짜 배열 + 앞뒤 공백까지 채운 결과 반환
export const getCalendarColumns = (now: Dayjs): Dayjs[] => {
  const start = dayjs(now).startOf("month");
  const end = dayjs(now).endOf("month");
  const endDate = end.get("date");

  const columns: Dayjs[] = [];
  for (let i = 0; i < endDate; i += 1) {
    const date = start.add(i, "day");
    columns.push(date);
  }
  const filledColumns = fillEmptyColumns(columns, start, end);
  return filledColumns;
};

/**
 * @param day 0~6
 * @return '일'~'토'
 */
const dayTexts = ["일", "월", "화", "수", "목", "금", "토"];
export const getDayText = (day: number): string => {
  return dayTexts[day] ?? "";
};

/**
 * @param day 0~6
 * @return 색상 hex string
 */
export const getDayColor = (day: number): string => {
  return day === 0 ? "#e67639" : day === 6 ? "#5872d1" : "#2b2b2b";
};
