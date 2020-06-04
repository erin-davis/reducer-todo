import React, {useState, useReducer} from "react";
import {initialState, simpleReducer} from "../reducers/reducer.js"

//the point of this one is step 3: Adding Todos
const TodoForm = (props) =>{
  const [todoText, setTodoText] = useState('');

  const [state, dispatch] = useReducer(simpleReducer, initialState);

  const createTodo = e =>{
    dispatch({ type: "WRITE_TODO", payload: todoText});
  };

  return(
    <form>
      <input
        type="text"
        name="todoText"
        value={todoText}
        onChange={createTodo}
      />
      <button>Add New Todo</button>
    </form>
  )
}
export default TodoForm;
