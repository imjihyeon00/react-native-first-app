import dayjs from "dayjs";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styled } from "styled-components/native";
import CalendarArrowBtn from "./CalendarArrowBtn";
import CalendarColumn from "./CalendarColumn";
import { getDayColor, getDayText } from "./util";

interface CalendarProps {
  columns: dayjs.Dayjs[];
  selectedDate: dayjs.Dayjs;
  onPressLeftArrow: () => void;
  onPressHeaderDate: () => void;
  onPressRightArrow: () => void;
  onPressDate: (date: dayjs.Dayjs) => void;
}
export default function Calendar({
  columns,
  selectedDate,
  onPressLeftArrow,
  onPressHeaderDate,
  onPressRightArrow,
  onPressDate,
}: CalendarProps) {
  const renderItem = ({ item: date }: { item: dayjs.Dayjs }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const color = getDayColor(day);
    const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");
    const onPress = () => onPressDate(date);

    return (
      <CalendarColumn
        text={dateText.toString()}
        color={color}
        opacity={isCurrentMonth ? 1 : 0.5}
        onPress={onPress}
        isSelected={dayjs(date).isSame(selectedDate, "day")}
      />
    );
  };

  const ListHeaderComponent = () => {
    const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD.");

    return (
      <View>
        <CalendarHeader>
          <CalendarArrowBtn
            direction="left"
            onPress={onPressLeftArrow}
          />

          <TouchableOpacity onPress={onPressHeaderDate}>
            <CalendarDateText>{currentDateText}</CalendarDateText>
          </TouchableOpacity>

          <CalendarArrowBtn
            direction="right"
            onPress={onPressRightArrow}
          />
        </CalendarHeader>
        <View style={{
          flexDirection: 'row'
        }}>
          {[0, 1, 2, 3, 4, 5, 6].map(day => {
            const dayText = getDayText(day);

            return(
              <CalendarColumn
                key={`day-${day}`}
                text={dayText}
                color={getDayColor(day)}
                opacity={1}
                disabled={true}
              />
            )
          })}
        </View>
      </View>
    )
  }

  return (
    <FlatList
      scrollEnabled={false}
      keyExtractor={(_, index) => index.toString()}
      data={columns}
      renderItem={renderItem}
      numColumns={7}
      ListHeaderComponent={ListHeaderComponent}
    />
  )
};


const CalendarHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const CalendarDateText = styled(Text)`
  font-size: 20px;
  color: #404040;
`;