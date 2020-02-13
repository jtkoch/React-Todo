import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo handleToggleComplete={props.toggleTodo} key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;