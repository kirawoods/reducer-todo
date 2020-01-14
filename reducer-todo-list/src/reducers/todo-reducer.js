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

//To-Do:
//Separate Out Components
//Style
