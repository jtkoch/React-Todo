import React from "react";

const TodoForm = props => {
    return (
      <form onSubmit={this.submitTodo}>
        <input type="text" 
          name="todo" 
          value={props.value} 
          onChange={props.handleChange} 
          placeholder="Enter todo" 
        />
        <button onClick={this.addTodo}>Add</button>
        <button onClick={this.clearFinished}>Clear Finished</button>
      </form>
    );
  }


export default TodoForm;