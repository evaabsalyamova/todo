import { TodoStatus } from "../../types/todo";
import TodoItem from "./TodoItem";
import TodoTabs from "./TodoTabs";

const TodoList: React.FunctionComponent = () => {
  const todos = [
    {
      id: 1,
      text: "nnn",
      status: TodoStatus.READY,
    },
  ];

  return (
    <div className="todoListContainer">
      <div className="todoListTitle">Todo List</div>
      <div className="todoListBlock">
        <TodoTabs />
        <div className="todoItemsBlock">
          {todos.map((todo) => (
            <TodoItem todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
