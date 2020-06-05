import React from 'react';
import "./App.css";
import Todos from "./components/Todos.js"
import TodoForm from "./components/TodoForm.js";
import {initialState, simpleReducer} from "./reducers/reducer.js"

function App(props) {

  const addItem = itemText =>{
    const newItem = {
      item: itemText,
      completed: false,
      id: Date.now()
    };
    props.initialState({
      initialState: [...initialState, newItem]
    })
  }

  return (
    <div className="App">
    <h1>This is my Todo List with Reducers this time</h1>
    <TodoForm />
    <Todos initialState={initialState}/>
    </div>
  );
}

export default App;
