import {
  ADD_TASK,
  COMPLETE_TASK,
  REMOVE_TASK,
  ADD_NOTE,
  GET_NOTES_ERROR,
  GET_NOTES_REQUESTED,
  GET_NOTES_SUCCESS,
  PRACTICE_STATUS,
  PRACTICE_DURATION,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  GET_TASKS_REQUESTED
} from "../actions/index";

const initialState = {
  taskIndex: 0,
  taskList: [],
  notes: [],
  practiceStatus: 0,
  practiceDuration: 0,
  error: false,
  isFetching: false,
  isAuthenticated: false
};

const taskReducer = (state = initialState, action) => {
  const taskList = state.taskList;

  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {
        taskList: [action.task, ...state.taskList]
      });

    case COMPLETE_TASK:
      return Object.assign({}, state, {
        taskList: state.taskList.map(task => {
          if (task._id === action.id) {
            task.completed = action.completed;
          }
          return task;
        })
      });

    case GET_TASKS_REQUESTED:
      return Object.assign({}, state, {
        isFetching: true
      });

    case GET_TASKS_SUCCESS:
      return Object.assign({}, state, {
        taskList: [...action.tasks],
        isFetching: false
      });

    case GET_TASKS_ERROR:
      return Object.assign({}, state, {
        error: true
      });

    case REMOVE_TASK:
      return Object.assign({}, state, {
        taskList: taskList.filter(todo => todo._id !== action.id)
      });

    case ADD_NOTE:
      console.log(state.notes);
      return Object.assign({}, state, {
        notes: [action.note, ...state.notes]
      });

    case GET_NOTES_REQUESTED:
      return Object.assign({}, state, {
        isFetching: true
      });

    case GET_NOTES_SUCCESS:
      return Object.assign({}, state, {
        notes: [...action.notes],
        isFetching: false
      });

    case GET_NOTES_ERROR:
      return Object.assign({}, state, {
        error: true
      });

    case PRACTICE_STATUS:
      const newPracticeCount = parseInt(state.practiceStatus, 10) + 1;
      return Object.assign({}, state, {
        practiceStatus: newPracticeCount
      });

    case PRACTICE_DURATION:
      const previous = parseFloat(state.practiceDuration);
      const current = parseFloat(action.input);
      const newPracticeStatus = previous + current;

      return Object.assign({}, state, {
        practiceDuration: newPracticeStatus
      });

    default:
      return state;
  }
};

export default taskReducer;
