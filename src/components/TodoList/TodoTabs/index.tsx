const TodoTabs: React.FunctionComponent = () => {
  return (
    <div className="todoTabs">
      <button className="todoTab">Close all</button>
      <button className="todoTab">Remove all</button>
      <button className="todoTab">Clear ready</button>
      <button className="todoTab">Add todo</button>
    </div>
  );
};

export default TodoTabs;
