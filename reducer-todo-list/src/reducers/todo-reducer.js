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
    // case "TOGGLE_COMPLETED":

    // case "CLEAR_COMPLETED":
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
      {state.map(todo => (
        <p
          key={todo.id}
          className={`item${todo.completed ? "completed" : ""}`}
          //   onClick={dispatch({ type: "TOGGLE_COMPLETED", payload: todo.id })}
        >
          {todo.item}
        </p>
      ))}
    </>
  );
}

//To-Do:
//Toggle Complete
//Add an Item
//Clear Completed Items
//Separate Out Components
