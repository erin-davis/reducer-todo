import React from 'react';
import "./App.css";
import Todos from "./components/Todos.js"
import TodoForm from "./components/TodoForm.js";

function App() {
  return (
    <div className="App">
    <h1>This is my Todo List with Reducers this time</h1>
    <TodoForm />
    <Todos />
    </div>
  );
}

export default App;
