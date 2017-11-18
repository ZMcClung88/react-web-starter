import React, { Component } from 'react';


export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange(e) {
    const {value} = e.target; // same as const value = e.target.value. deconstructing
    this.setState({newTodo: value});
  }

  handleClick(e) {
    e.preventDefault(); // not sure why this is neeeded?
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''}); //{todos} equivelant of todos: todos. deconstruct.
  }

  render() {
    return (
      <div>
        <form>
          <input onChange={this.handleChange.bind(this)} value={this.state.newTodo} type="text" placeholder="new todo" />
          <button onClick={this.handleClick.bind(this)}>create</button>
        </form>
        <ul>
          {this.state.todos.map(todo => <li>{todo}</li>)}
        </ul>
      </div>
    );
  }
}
