export const GET_TASKS_REQUESTED = "GET_TASKS_REQUESTED";
export const getTasksRequested = () => ({
  type: GET_TASKS_REQUESTED
});

export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS";
export const getTasksSuccess = tasks => ({
  type: GET_TASKS_SUCCESS,
  tasks
});

export const GET_TASKS_ERROR = "GET_TASKS_ERROR";
export const getTasksError = () => ({
  type: GET_TASKS_ERROR
});

export const ADD_TASK = "ADD_TASK";
export const addTask = task => ({
  type: ADD_TASK,
  task
});

export const COMPLETE_TASK = "COMPLETE_TASK";
export const completeTask = (id, completed) => ({
  type: COMPLETE_TASK,
  id,
  completed
});

export const REMOVE_TASK = "REMOVE_TASK";
export const removeTask = id => ({
  type: REMOVE_TASK,
  id
});

export const GET_NOTES_REQUESTED = "GET_NOTES_REQUESTED";
export const getNotesRequested = () => ({
  type: GET_NOTES_REQUESTED
});

export const GET_NOTES_ERROR = "GET_NOTES_ERROR";
export const getNotesError = () => ({
  type: GET_NOTES_ERROR
});
export const GET_NOTES_SUCCESS = "GET_NOTES_SUCCESS";
export const getNotesSuccess = notes => ({
  type: GET_NOTES_SUCCESS,
  notes
});
export const ADD_NOTE = "ADD_NOTE";
export const addNote = note => ({
  type: ADD_NOTE,
  note
});

export const PRACTICE_STATUS = "PRACTICE_STATUS";
export const practiceStatus = () => ({
  type: PRACTICE_STATUS
});

export const PRACTICE_DURATION = "PRACTICE_DURATION";
export const practiceDuration = input => ({
  type: PRACTICE_DURATION,
  input
});

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const loginRequest = (email, password) => ({
  type: LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  email,
  password
});

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  token: token
});

export const LOGIN_ERROR = "LOGIN_ERROR";
export const loginError = message => ({
  type: LOGIN_ERROR,
  isFetching: false,
  isAuthenticated: false,
  message
});

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
  isFetching: true,
  isAuthenticated: true
});

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
  isFetching: false,
  isAuthenticated: false
});

// export const LOGOUT_ERROR = "LOGOUT_ERROR";
// export const logoutError = message => ({
//   type: LOGOUT_ERROR,
//   isFetching: false,
//   isAuthenticated: true,
//   message
// });
