import React, { useState } from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import "./index.css"

const App = () => {

  return (
    <div>    
      <p>Ronald Quispe J</p>
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
