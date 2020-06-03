import React, {useState, useReducer} from "react";
import {initialState, simpleReducer} from "../reducers/reducer.js"

const Todos = () =>{
  const [item, setItem] = useState('');
  const [complete, setComplete] = useState(false);
  const [state, dispatch] = useReducer(simpleReducer, initialState);

  return (
    <div className="todo-item">

    </div>
  )
}

export default Todos;
