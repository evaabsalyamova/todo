import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
};

export default App;
