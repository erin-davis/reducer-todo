import React, {useState, useReducer} from "react";
import {initialState, simpleReducer} from "../reducers/reducer.js"

const Todos = () =>{
  const [item, setItem] = useState('');
  const [complete, setComplete] = useState(false);
  const [state, dispatch] = useReducer(simpleReducer, initialState);

  return (
    <div>
    {state.map(list =>{
      return(
        <div className="todo-item">
          <h3>{list.item}</h3>
          {list.completed ? (<p>Complete: Yes</p>) : (<p>Complete: No</p>)}
        </div>
      )
    })}
    </div>
  )
}

export default Todos;
