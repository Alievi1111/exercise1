import React from "react";
import Todoitem from "./TodoItem";

function TodoList({ tasks }) {
  return (
    <div>
      {tasks.map((tasks, index) => (
        <Todoitem key={index} text={tasks} />
      ))}
    </div>
  );
}
export default TodoList;
