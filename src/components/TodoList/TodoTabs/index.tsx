import { clearReadyTodo, removeAllTodo, useAppDispatch } from "../../../redux";
import "./styles.css";

interface IProps {
  setShouldShowAddTodoBlock: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoTabs: React.FunctionComponent<IProps> = ({
  setShouldShowAddTodoBlock,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="todoTabs">
      <button className="todoTab" onClick={() => dispatch(removeAllTodo())}>
        Remove all
      </button>
      <button className="todoTab" onClick={() => dispatch(clearReadyTodo())}>
        Clear ready
      </button>
      <button
        className="todoTab"
        onClick={() => setShouldShowAddTodoBlock(true)}
      >
        Add todo
      </button>
    </div>
  );
};

export default TodoTabs;
