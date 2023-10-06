import { icons } from "../../../assets/icons";
import { ITodo } from "../../../types/todo";
import "./styles.css";

interface IProps {
  todo: ITodo;
}

const TodoItem: React.FunctionComponent<IProps> = ({ todo }) => {
  return (
    <div className="todoItem">
      <div className="textBlock">{todo.text}</div>
      <div className="todoItemButtons">
        <div className="todoItemButton">{icons.checkMark}</div>
        <div className="todoItemButton">{icons.trash}</div>
      </div>
    </div>
  );
};

export default TodoItem;
