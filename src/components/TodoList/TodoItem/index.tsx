import { sendDeleteTodo } from "../../../api/todoList";
import { icons } from "../../../assets/icons";
import { deleteTodo, toggleTodoReady, useAppDispatch } from "../../../redux";
import { ITodo } from "../../../types/todo";
import "./styles.css";

interface IProps {
  todo: ITodo;
}

const TodoItem: React.FunctionComponent<IProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const handleDeleteButtonClick = (): void => {
    dispatch(deleteTodo({ id: todo.id }));
    sendDeleteTodo({ id: todo.id });
  };

  const handleReadyTodoClick = (): void => {
    dispatch(toggleTodoReady({ id: todo.id }));
  };

  return (
    <div className="todoItem">
      <div className="todoTitle">{todo.title}</div>
      <div className={todo.isReady ? "readyTextBlock" : "textBlock"}>
        {todo.text}
      </div>
      <div className="todoItemButtons">
        <div className="todoItemButton" onClick={handleReadyTodoClick}>
          {todo.isReady ? icons.readyCheckMark : icons.checkMark}
        </div>
        <div className="todoItemButton" onClick={handleDeleteButtonClick}>
          {icons.trash}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
