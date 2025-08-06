import dayjs from "dayjs";
import { useState } from "react";

interface ToDo {
  id: number;
  content: string;
  date: dayjs.Dayjs;
  isSuccess: boolean;
}

const defaultToDoList: ToDo[] = [
  {
    id: 1,
    content: "운동하기",
    date: dayjs(),
    isSuccess: true,
  },
  {
    id: 2,
    content: "공부하기",
    date: dayjs().add(1, "day"),
    isSuccess: false,
  },
  {
    id: 3,
    content: "영화 보기",
    date: dayjs().add(2, "day"),
    isSuccess: true,
  },
];


export default function useToDoList(selectedDate: dayjs.Dayjs) {
  const [todoList, setToDoList] = useState<ToDo[]>(defaultToDoList);
  const [inputText, setInputText] = useState<string>("");

  const addTodo = () => {
    const list_len = todoList.length;
    const listId = list_len > 0 ? todoList[list_len - 1].id + 1 : 1;
    
    const newTodoList = [
      ...todoList,
      {
        id: listId,
        content: inputText,
        date: selectedDate,
        isSuccess: false,
      },
    ]

    setToDoList(newTodoList);
    setInputText("");
  }

  const removeTodo = (id: number) => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setToDoList(newTodoList);
  }

  const toggleTodo = (id: number) => {
    const newTodoList = todoList.map(todo =>
      todo.id === id ? { ...todo, isSuccess: !todo.isSuccess } : todo
    );
    setToDoList(newTodoList);
  }

  return {
    todoList,
    inputText,
    setInputText,
    addTodo,
    removeTodo,
    toggleTodo
  }
};
