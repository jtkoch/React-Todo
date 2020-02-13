import React from "react";

const Todo = props => {

  return (
    <div 
      className = {`todo${props.completed ? ' completed' : ''}`}
      onClick={e => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;