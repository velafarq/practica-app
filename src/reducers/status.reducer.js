import {
  IS_FETCHING_FALSE,
  IS_FETCHING_TRUE,
  ERROR_FALSE,
  ERROR_TRUE
} from "../actions/index";

const initialState = {
  isFetching: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING_TRUE:
      return Object.assign({}, state, {
        isFetching: true
      });
    case IS_FETCHING_FALSE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case ERROR_TRUE:
      return Object.assign({}, state, {
        error: true
      });
    case ERROR_FALSE:
      return Object.assign({}, state, {
        error: false
      });

    default:
      return state;
  }
};
