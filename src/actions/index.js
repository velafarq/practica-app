let nextTaskId = 0;

export const ADD_TASK = "ADD_TASK";
export const addTask = task => ({
  type: ADD_TASK,
  id: nextTaskId++,
  payload: task
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

export const PRACTICE_STATUS = "PRACTICE_STATUS";
export const practiceStatus = status => ({
  type: PRACTICE_STATUS,
  status
});
