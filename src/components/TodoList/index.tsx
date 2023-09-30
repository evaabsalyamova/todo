import { useState } from "react";
import { addTodo, useAppDispatch, useAppSelector } from "../../redux";
import TodoItem from "./TodoItem";
import TodoTabs from "./TodoTabs";
import "./styles.css";

const TodoList: React.FunctionComponent = () => {
  const [shouldShowAddTodoBlock, setShouldShowAddTodoBlock] =
    useState<boolean>(false);
  const [currentText, setCurrentText] = useState<string>("");

  const dispatch = useAppDispatch();

  const todoList = useAppSelector((state) => state.todoList);

  return (
    <div className="todoListContainer">
      <div className="todoListTitle">Todo List</div>
      <div className="todoListBlock">
        <TodoTabs setShouldShowAddTodoBlock={setShouldShowAddTodoBlock} />
        {shouldShowAddTodoBlock ? (
          <div>
            <input
              onChange={(text) => setCurrentText(text.target.value)}
              value={currentText}
            />
            <button
              onClick={() => {
                dispatch(addTodo({ id: 2, isReady: false, text: currentText }));
                setCurrentText("");
                setShouldShowAddTodoBlock(false);
              }}
            >
              ADD
            </button>
          </div>
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
