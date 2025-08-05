import dayjs from "dayjs";
import { useState } from "react";

// Define the type for the props
interface CalendarProps {
  now: dayjs.Dayjs;
}

export default function useCalendar(now: dayjs.Dayjs) {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs>(now);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


  /*
  * Function
  */
  function showDatePicker() {
    setDatePickerVisibility(true);
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    // console.warn("A date has been picked: ", date);
    setSelectedDate(dayjs(date));
    hideDatePicker();
  };

  const subtractMonth = () => {
    const newDate = dayjs(selectedDate).subtract(1, "month");
    setSelectedDate(newDate);
  };

  const addMonth = () => {
    const newDate = dayjs(selectedDate).add(1, "month");
    setSelectedDate(newDate);
  };

  return {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtractMonth,
    addMonth,
  }
};
