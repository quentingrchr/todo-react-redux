import { createStore, combineReducers } from "redux";
import todosReducer from "./reducers/todosReducer";
import filterReducer from "./reducers/filterReducer";

const reducers = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});

const store = createStore(reducers);

export default store;
