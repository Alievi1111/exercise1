import React from "react";
import TodoList from "./components/TodoList";

function App() {
  const tasks = ["Learn React", "Build Todo App", "Practice JavaScript"];

  return (
    <div>
      <h1>My Todo App</h1>
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
