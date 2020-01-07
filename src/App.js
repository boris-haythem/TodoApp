import React, { Component } from "react";
import "./App.css";
import Todo from './todo/todo'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: ["item1", "item2"] };
  }
  
  render() {
    return (
      <div>
        <Todo/>
      </div>
    );
  }
}

export default App;
