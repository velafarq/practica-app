let nextTaskId = 0;

export const ADD_TASK = "ADD_TASK";
export const addTask = task => ({
  type: ADD_TASK,
  id: nextTaskId++,
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

export const GET_NOTES = "GET_NOTES";
export const getNotes = notes => ({
  type: GET_NOTES,
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
