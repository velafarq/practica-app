import {
  ADD_TASK,
  GET_TASKS,
  COMPLETE_TASK,
  REMOVE_TASK,
  ADD_NOTE,
  GET_NOTES_ERROR,
  GET_NOTES_REQUESTED,
  GET_NOTES_SUCCESS,
  PRACTICE_STATUS,
  PRACTICE_DURATION
} from "../actions/index";

const initialState = {
  taskIndex: 0,
  taskList: [],
  notes: [],
  practiceStatus: 0,
  practiceDuration: 0,
  error: false,
  isFetching: false
};

const taskReducer = (state = initialState, action) => {
  const taskList = state.taskList;
  const task = action.task;
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {
        taskList: [action.task, ...state.tasks]
      });

    case COMPLETE_TASK:
      return Object.assign({}, state, {
        ...taskList.filter(todo => {
          if (todo.taskId === action.id) {
            todo.completed = !todo.completed;
            console.log(todo);
          }
        })
      });

    case GET_TASKS:
      return Object.assign({}, state, {
        taskList: [...action.tasks]
      });

    case REMOVE_TASK:
      return Object.assign({}, state, {
        taskList: taskList.filter(todo => todo.taskId !== action.id)
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
      const newPracticeCount = parseInt(state.practiceStatus) + 1;
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
