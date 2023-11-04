import { useState } from "react";
import { useAppSelector } from "../../redux";
import TodoItem from "./TodoItem";
import TodoTabs from "./TodoTabs";
import "./styles.css";
import TodoForm from "./TodoForm";

const TodoList: React.FunctionComponent = () => {
  const [shouldShowAddTodoBlock, setShouldShowAddTodoBlock] =
    useState<boolean>(false);

  const todoList = useAppSelector((state) => state.todoList);

  return (
    <div className="todoListContainer">
      <TodoTabs setShouldShowAddTodoBlock={setShouldShowAddTodoBlock} />
      {shouldShowAddTodoBlock ? (
        <TodoForm onFinish={() => setShouldShowAddTodoBlock(false)} />
      ) : (
        <div className="todoItemsBlock">
          {todoList.map((todo) => (
            <TodoItem todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
