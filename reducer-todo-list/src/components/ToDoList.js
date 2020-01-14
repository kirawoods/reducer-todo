import React, { useReducer, useState } from "react";
import { initialState, reducer } from "../reducers/todo-reducer";
import "./ToDoList.css";

export function ToDoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState("");
  const handleChange = event => {
    setNewTodo(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
  };
  console.log(state);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Add an Item: </label>
        <input type="text" onChange={handleChange}></input>
        <button
          onClick={() => dispatch({ type: "ADD_TODO", payload: newTodo })}
        >
          Submit
        </button>
      </form>
      <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
        Clear Completed To-Dos
      </button>
      {state.map(todo => (
        <p
          key={todo.id}
          onClick={() =>
            dispatch({ type: "TOGGLE_COMPLETED", payload: todo.id })
          }
          className={`item${todo.completed ? " completed" : ""}`}
        >
          {todo.item}
        </p>
      ))}
    </>
  );
}
