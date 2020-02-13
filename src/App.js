import React, { Component } from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Do the dishes",
          id: 12345,
          completed: false
        },  
        {
          task: "Walk the dog",
          id: 123456,
          completed: false
        },
        {
          task: "Do the laundry",
          id: 1234567,
          completed: false
        },
        {
          task: "Go on a run",
          id: 12345678,
          completed: false
        },
        {
          task: "Get groceries",
          id: 123456789,
          completed: false
        }
      ], todo: ""
    };
  }

  addTodo = e => {
    e.preventDefault();
  
  const newTodo = {
    task: this.state.todo,
    id: Date.now(),
    completed: false
  };

  this.setState({
    todos: [...this.state.todos, newTodo],
    todo: ""
  }); 
};

changeTodo = e => this.setState({ [e.target.name]: e.target.value });

toggleTodo = id => {
  let todos = this.state.todos.slice();
  todos = todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
      return todo;
    } else {
      return todo;
    }
  });
  this.setState({ todos });
};

clearFinished = e => {
  e.preventDefault();
  let todos = this.state.todos.filter(todo => !todo.finished);
  this.setState({ todos });
};

  render() {
    return (
      <div className="App">
        <h1>Let's get stuff done!</h1>
        <TodoForm 
          value={this.state.todo}
          handleChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearFinished={this.clearFinished}
        />
        <TodoList 
          handleToggleComplete={this.toggleTodo}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, 
  // and any change handlers you need to work with your state.

export default App;