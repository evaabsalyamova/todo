import React, { useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { getTodos } from "./api/todoList";
import { todosMapper } from "./types/todo";
import { addInitialTodos, useAppDispatch } from "./redux";
import "./App.css";

const App: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const todoList = getTodos();

    todoList.then((data) => {
      const readyTodos = data.map(todosMapper);
      dispatch(addInitialTodos(readyTodos));
    });
  }, [dispatch]);

  return (
    <div className="appContainer">
      <Header />
      <TodoList />
    </div>
  );
};

export default App;
