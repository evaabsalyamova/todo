import { sendDeleteTodo } from "../../../api/todoList";
import { icons } from "../../../assets/icons";
import { deleteTodo, useAppDispatch } from "../../../redux";
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

  return (
    <div className="todoItem">
      <div className="textBlock">{todo.text}</div>
      <div className="todoItemButtons">
        <div className="todoItemButton">{icons.checkMark}</div>
        <div className="todoItemButton" onClick={handleDeleteButtonClick}>
          {icons.trash}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
