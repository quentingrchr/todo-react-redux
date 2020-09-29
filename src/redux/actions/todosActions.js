export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_DONE = "TOGGLE_DONE";

export const addTodo = (content) => {
  console.log("add todo");
  return {
    type: ADD_TODO,
    payload: {
      content,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: {
      id,
    },
  };
};

export const toggleDone = (id) => {
  return {
    type: TOGGLE_DONE,
    payload: {
      id,
    },
  };
};
