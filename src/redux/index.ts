import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../types/todo";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

interface IAddInitialTodosAction {
  payload: ITodo[];
  type: string;
}

interface IAddTodoAction {
  payload: { todoText: string; todoTitle: string };
  type: string;
}

interface IDeleteTodoAction {
  payload: { id: number };
  type: string;
}

interface IToggleTodoReadyAction {
  payload: { id: number };
  type: string;
}

const initialState: ITodo[] = [];

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addInitialTodos: (state, action: IAddInitialTodosAction) => {
      return action.payload;
    },
    addTodo: (state, action: IAddTodoAction) => {
      state.push({
        text: action.payload.todoText,
        isReady: false,
        id: Math.floor(Math.random() * 100),
        title: action.payload.todoTitle,
      });
    },
    deleteTodo: (state, action: IDeleteTodoAction) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    removeAllTodo: () => {
      return [];
    },
    clearReadyTodo: (state) => {
      return state.filter((todo) => !todo.isReady);
    },
    toggleTodoReady: (state, action: IToggleTodoReadyAction) => {
      const todoById = state.find((todo) => todo.id === action.payload.id);
      if (todoById) {
        todoById.isReady = !todoById.isReady;
      }
    },
  },
});

export const {
  addTodo,
  removeAllTodo,
  clearReadyTodo,
  toggleTodoReady,
  addInitialTodos,
  deleteTodo,
} = todoListSlice.actions;

export const store = configureStore({
  reducer: {
    todoList: todoListSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
