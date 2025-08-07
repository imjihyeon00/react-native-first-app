import Calendar from "@/components/toDoList/Calendar";
import { getCalendarColumns } from "@/components/toDoList/util";
import useCalendar from "@/hooks/useCalendar";
import useToDoList from "@/hooks/useToDoList";
import dayjs from "dayjs";
import { useEffect } from "react";
import { FlatList, Image, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styled } from "styled-components/native";


export default function ToDoList() {
  const insets = useSafeAreaInsets();

  const now = dayjs();  
  const {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtractMonth,
    addMonth,
  } = useCalendar(now)
  const {
    todoList,
    inputText,
    setInputText,
    addTodo,
    removeTodo,
    toggleTodo,
  } = useToDoList(selectedDate);

  const columns = getCalendarColumns(selectedDate);

  const onPressLeftArrow = subtractMonth;
  const onPressHeaderDate = showDatePicker;
  const onPressRightArrow = addMonth;
  const onPressDate = setSelectedDate;
  

  

  useEffect(() => {
    console.log("Selected date changed:", dayjs(selectedDate).format("YYYY-MM-DD"));
  }, [selectedDate]);

  const ListHeaderComponent = () => {
    return (
      <Calendar
        columns={columns}
        selectedDate={selectedDate}
        onPressLeftArrow={onPressLeftArrow}
        onPressHeaderDate={onPressHeaderDate}
        onPressRightArrow={onPressRightArrow}
        onPressDate={onPressDate}
      />
    );
  };

  return (
    <ToDoListContainer>
      <Image
        source={{
          // 출처: https://kr.freepik.com/free-photo/white-crumpled-paper-texture-for-background_1189772.htm
          uri: "https://img.freepik.com/free-photo/white-crumpled-paper-texture-for-background_1373-159.jpg?w=1060&t=st=1667524235~exp=1667524835~hmac=8a3d988d6c33a32017e280768e1aa4037b1ec8078c98fe21f0ea2ef361aebf2c",
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }} 
      />

      <FlatList
        data={todoList}
        renderItem={({ item:todo }) => {
          return (
            <Text>{todo.content}</Text>
          )
        }}
        ListHeaderComponent={ListHeaderComponent}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </ToDoListContainer>
  )
};

const ToDoListContainer = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

