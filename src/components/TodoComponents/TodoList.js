import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo key={todo.id} item={todo} toggleTodo={props.toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;