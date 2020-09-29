import { v4 as uuidv4 } from "uuid";

import { ADD_TODO, REMOVE_TODO, TOGGLE_DONE } from "../actions/todosActions";

const initialState = [];

const todosReducer = (state = initialState, action) => {
  if (action.type === ADD_TODO) {
    return [
      {
        id: uuidv4(),
        content: action.payload.content,
        done: false,
      },
      ...state,
    ];
  }

  if (action.type === REMOVE_TODO) {
    return state.filter((todo) => todo.id !== action.payload.id);
  }

  if (action.type === TOGGLE_DONE) {
    return state.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
  }

  return state;
};

export default todosReducer;
