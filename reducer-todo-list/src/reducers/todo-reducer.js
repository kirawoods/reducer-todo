import React, { useReducer } from "react";

export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589
};

export const reducer = (state = [], action) => {};

export function ToDoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <form>
        <label>Add an Item: </label>
        <input type="text"></input>
        <button>Submit</button>
      </form>
      <div className="count">{state.item}</div>
    </>
  );
}

//To-Do:
//Map over items
//Toggle Complete
//Add an Item
//Clear Completed Items
//Separate Out Components
