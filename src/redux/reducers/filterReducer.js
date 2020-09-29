import {
  DONE_FILTER,
  ALL_FILTER,
  UNDONE_FILTER,
} from "../actions/filterAction";

const initialState = null;

const filterReducer = (state = initialState, action) => {
  if (action.type === DONE_FILTER) {
    return true;
  }

  if (action.type === UNDONE_FILTER) {
    return false;
  }

  if (action.type === ALL_FILTER) {
    return null;
  }
  return state;
};

export default filterReducer;
