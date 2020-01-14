import React, { useReducer, useState } from "react";

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), item: action.payload, completed: false }
      ];
    case "TOGGLE_COMPLETED":
      state.forEach(todo => {
        todo.id === action.payload && (todo.completed = !todo.completed);
      });
      return [...state];
    case "CLEAR_COMPLETED":
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};

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

//To-Do:
//Separate Out Components
//Style
