import React from "react";

const TodoForm = props => {
    return (
      <form>
        <input 
          onChange={props.handleChange} 
          type="text" 
          name="todo" 
          value={props.value} 
          placeholder="Enter todo" 
        />
        <button onClick={props.handleAddTodo}>Add</button>
        <button onClick={props.handleClearFinished}>Clear Finished</button>
      </form>
    );
  };


export default TodoForm;