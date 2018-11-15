import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo';
import './App.css'

class App extends Component {
  state = {
    todos : [
      {id:1, content: 'first content'},
      {id:2, content: 'second content'}
    ]
  }

  addTodo = (todo) =>{
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos:todos
    })
  }

  deleteTodo = (id) =>{
    let todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <div className="todo-wrapper">
        <h1 className="center blue-text"> Todo's App</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
