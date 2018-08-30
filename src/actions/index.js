let nextTaskId = 0;

export const ADD_TASK = "ADD_TASK";
export const addTask = task => ({
  type: ADD_TASK,
  task
});

export const GET_TASKS = "GET_TASKS";
export const getTasks = tasks => ({
  type: GET_TASKS,
  tasks
});

export const COMPLETE_TASK = "COMPLETE_TASK";
export const completeTask = id => ({
  type: COMPLETE_TASK,
  id
});

export const REMOVE_TASK = "REMOVE_TASK";
export const removeTask = id => ({
  type: REMOVE_TASK,
  id
});

export const ADD_NOTE = "ADD_NOTE";
export const addNote = note => ({
  type: ADD_NOTE,
  note
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

export const PRACTICE_STATUS = "PRACTICE_STATUS";
export const practiceStatus = () => ({
  type: PRACTICE_STATUS
});

export const PRACTICE_DURATION = "PRACTICE_DURATION";
export const practiceDuration = input => ({
  type: PRACTICE_DURATION,
  input
});
