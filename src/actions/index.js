let nextTaskId = 0;

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
export const completeTask = (id, status) => ({
  type: COMPLETE_TASK,
  id,
  status
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
