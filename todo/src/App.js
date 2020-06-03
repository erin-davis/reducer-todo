import React from 'react';
import "./App.css";
import Todos from "./components/Todos.js"

function App() {
  return (
    <div className="App">
    <h1>This is my Todo List with Reducers this time</h1>
    <Todos />
    </div>
  );
}

export default App;
