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
      <div className="count">{state.item}</div>
    </>
  );
}
