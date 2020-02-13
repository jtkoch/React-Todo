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
          id: Date.now(),
          completed: false
        },  
        {
          task: "Walk the dog",
          id: Date.now(),
          completed: false
        },
        {
          task: "Do the laundry",
          id: Date.now(),
          completed: false
        },
        {
          task: "Go on a run",
          id: Date.now(),
          completed: false
        },
        {
          task: "Get groceries",
          id: Date.now(),
          completed: false
        }
      ], todo: ""
    };
  }

  addTodo = (e, todo) => {
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
  console.log(todoID);

  this.setState({
    todos: this.state.todos.map(todo => {
      console.log(todo);
      if(id === todo.id) {
        return {
          ...todo,
          finished: !todo.finished
        };
      }

      return todo;
    })
  });
};

clearFinished = e => {
  e.preventDefault();
  console.log(this.state.todos);
  this.setState({
    todos: this.state.todos.filter(todos => todos.finished === false)
  });
  console.log(this.state.todos);
};

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>Let's get stuff done!</h1>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList 
          todos={this.todos}
          toggleTodo={this.toggleTodo}
          clearFinished={this.clearFinished}
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