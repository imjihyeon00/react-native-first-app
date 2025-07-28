import CalendarArrowBtn from "@/components/toDoList/CalendarArrowBtn";
import CalendarColumn from "@/components/toDoList/CalendarColumn";
import { getCalendarColumns, getDayColor, getDayText } from "@/components/toDoList/util";
import dayjs from "dayjs";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styled } from "styled-components/native";


export default function ToDoList() {
  const now = dayjs();
  const columns = getCalendarColumns(now);
  
  const renderItem = ({ item:date }: { item: dayjs.Dayjs }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const color = getDayColor(day);
    const isCurrentMonth = dayjs(date).isSame(now, "month");

    return (
      <CalendarColumn
        text={dateText.toString()}
        color={color}
        opacity={isCurrentMonth ? 1 : 0.5}
      />
    );
  };

  const ListHeaderComponent = () => {
    const currentDateText = dayjs(now).format("YYYY.MM.DD.");

    return (
      <View>
        <CalendarHeader>
          <CalendarArrowBtn
            direction="left"
            onPress={() => {
              // Handle left arrow press
            }}
          />

          <TouchableOpacity>
            <CalendarDateText>{currentDateText}</CalendarDateText>
          </TouchableOpacity>

          <CalendarArrowBtn
            direction="right"
            onPress={() => {
              // Handle right arrow press
            }}
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
              />
            )
          })}
        </View>
      </View>
    )
  }

  return (
    <SafeAreaProvider>
      <ToDoListContainer>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={columns}
          renderItem={renderItem}
          numColumns={7}
          ListHeaderComponent={ListHeaderComponent}
        />
      </ToDoListContainer>
    </SafeAreaProvider>
  )
};

const ToDoListContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;


const CalendarHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const CalendarDateText = styled(Text)`
  font-size: 20px;
  color: #404040;
`;