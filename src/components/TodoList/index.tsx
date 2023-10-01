import { useState } from "react";
import { useAppSelector } from "../../redux";
import TodoItem from "./TodoItem";
import TodoTabs from "./TodoTabs";
import "./styles.css";
import AddTodoBlock from "./AddTodoBlock";

const TodoList: React.FunctionComponent = () => {
  const [shouldShowAddTodoBlock, setShouldShowAddTodoBlock] =
    useState<boolean>(false);

  const todoList = useAppSelector((state) => state.todoList);

  return (
    <div className="todoListContainer">
      <div className="todoListTitle">Todo List</div>
      <div className="todoListBlock">
        <TodoTabs setShouldShowAddTodoBlock={setShouldShowAddTodoBlock} />
        {shouldShowAddTodoBlock ? (
          <AddTodoBlock setShouldShowAddTodoBlock={setShouldShowAddTodoBlock} />
        ) : (
          <div className="todoItemsBlock">
            {todoList.map((todo) => (
              <TodoItem todo={todo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
