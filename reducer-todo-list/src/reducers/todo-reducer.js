import React, { useReducer, useState } from "react";

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    item: "Learn redux",
    completed: false,
    id: 3892987587
  }
];

export const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), item: action.payload.item, completed: false }
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
  console.log(state);
  return (
    <>
      <form>
        <label>Add an Item: </label>
        <input type="text"></input>
        <button>Submit</button>
      </form>
      {state.map(todo => (
        <p>{todo.item}</p>
      ))}
    </>
  );
}

//To-Do:
//Map over items
//Toggle Complete
//Add an Item
//Clear Completed Items
//Separate Out Components
