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

export const GET_TASK_REQUESTED = "GET_TASK_REQUESTED";
export const getTaskRequested = () => ({
  type: GET_TASK_REQUESTED
});

export const GET_TASK_SUCCESS = "GET_TASK_SUCCESS";
export const getTaskSuccess = task => ({
  type: GET_TASK_SUCCESS,
  task
});

export const GET_TASK_ERROR = "GET_TASK_ERROR";
export const getTaskError = () => ({
  type: GET_TASK_ERROR
});

export const ADD_TASK = "ADD_TASK";
export const addTask = task => ({
  type: ADD_TASK,
  task
});

export const TOGGLE_TASK_STATUS = "TOGGLE_TASK_STATUS";
export const toggleTaskStatus = (id, status) => ({
  type: TOGGLE_TASK_STATUS,
  id,
  status
});

export const PUSH_TASK_NOTE = "PUSH_TASK_NOTE";
export const pushTaskNote = (id, title, body) => ({
  type: PUSH_TASK_NOTE,
  id,
  title,
  body
});

export const UPDATE_TASK_PRACTICE = "UPDATE_TASK_PRACTICE";
export const updateTaskPractice = (id, practiceDuration) => ({
  type: UPDATE_TASK_PRACTICE,
  id,
  practiceDuration
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

export const INCREASE_PRACTICE = "INCREASE_PRACTICE";
export const increasePractice = () => ({
  type: INCREASE_PRACTICE
});

export const DECREASE_PRACTICE = "DECREASE_PRACTICE";
export const decreasePractice = () => ({
  type: DECREASE_PRACTICE
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
  token: token,
  errorMessage: ""
});

export const LOGIN_ERROR = "LOGIN_ERROR";
export const loginError = message => ({
  type: LOGIN_ERROR,
  isFetching: false,
  isAuthenticated: false,
  errorMessage: message
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
