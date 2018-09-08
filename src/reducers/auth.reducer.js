import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from "../actions/index";

const initialState = {
  isAuthenticated: localStorage.getItem("token") ? true : false,

  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isAuthenticated: false
      });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        errorMessage: ""
      });

    case LOGIN_ERROR:
      return Object.assign({}, state, {
        isAuthenticated: false,

        errorMessage: action.errorMessage
      });

    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        isAuthenticated: true
      });

    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false
      });
    default:
      return state;
  }
};
