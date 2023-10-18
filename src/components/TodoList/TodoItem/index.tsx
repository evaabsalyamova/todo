import { useState } from "react";
import { sendDeleteTodo, sendTodoUpdates } from "../../../api/todoList";
import { icons } from "../../../assets/icons";
import {
  changeTextTodo,
  deleteTodo,
  toggleTodoReady,
  useAppDispatch,
} from "../../../redux";
import { ITodo } from "../../../types/todo";
import "./styles.css";

interface IProps {
  todo: ITodo;
}

const TodoItem: React.FunctionComponent<IProps> = ({ todo }) => {
  const [newText, setNewText] = useState<string>(todo.text);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleDeleteButtonClick = (): void => {
    dispatch(deleteTodo({ id: todo.id }));
    sendDeleteTodo({ id: todo.id });
  };

  const handleReadyTodoClick = (): void => {
    dispatch(toggleTodoReady({ id: todo.id }));
  };

  const handleSaveButtonClick = (): void => {
    if (newText !== todo.text) {
      dispatch(changeTextTodo({ id: todo.id, text: newText }));

      sendTodoUpdates({ todo: { ...todo, text: newText } });
    }

    setIsEditMode(false);
  };

  return (
    <div className="todoItem">
      <div className="todoItemBlock">
        <div className="todoTitle">{todo.title}</div>
        {isEditMode ? (
          <div>
            <input
              className="changeTextBlock"
              onChange={(text) => setNewText(text.target.value)}
              value={newText}
              placeholder="Enter text"
            />
            <button onClick={handleSaveButtonClick}>SAVE</button>
          </div>
        ) : (
          <div className={todo.isReady ? "readyTextBlock" : "textBlock"}>
            {todo.text}
          </div>
        )}
      </div>

      <div className="todoItemButtons">
        <div className="todoItemButton" onClick={handleReadyTodoClick}>
          {todo.isReady ? icons.readyCheckMark : icons.checkMark}
        </div>
        <div className="todoItemButton" onClick={handleDeleteButtonClick}>
          {icons.trash}
        </div>
        <div
          className="todoItemButton"
          onClick={() => setIsEditMode(!isEditMode)}
        >
          {icons.todoSettings}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
