import { ITodo } from "../../../types/todo";

interface IProps {
  todo: ITodo;
}

const TodoItem: React.FunctionComponent<IProps> = ({ todo }) => {
  return (
    <div className="todoItem">
      <div className="textBlock">{todo.text}</div>
      <div className="todoItemButtons">
        <button className="todoItemButton">=</button>
        <button className="todoItemButton">=</button>
        <button className="todoItemButton">=</button>
      </div>
    </div>
  );
};

export default TodoItem;
