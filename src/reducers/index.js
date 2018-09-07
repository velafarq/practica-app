import {
  ADD_TASK,
  TOGGLE_STATUS,
  PUSH_TASK_NOTE,
  UPDATE_TASK_PRACTICE,
  REMOVE_TASK,
  ADD_NOTE,
  GET_NOTES_ERROR,
  GET_NOTES_REQUESTED,
  GET_NOTES_SUCCESS,
  INCREASE_PRACTICE,
  DECREASE_PRACTICE,
  PRACTICE_DURATION,
  GET_TASK_ERROR,
  GET_TASK_REQUESTED,
  GET_TASK_SUCCESS,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  GET_TASKS_REQUESTED,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from "../actions/index";

const initialState = {
  taskIndex: 0,
  taskList: [],
  currentTask: {},
  notes: [],
  practiceStatus: 0,
  practiceDuration: 0,
  error: false,
  isFetching: false,
  isAuthenticated: localStorage.getItem("token") ? true : false
};

const taskReducer = (state = initialState, action) => {
  const taskList = state.taskList;

  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        error: false
      });

    case LOGIN_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        error: true
      });

    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: true
      });

    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false
      });

    case ADD_TASK:
      return Object.assign({}, state, {
        taskList: [action.task, ...state.taskList]
      });

    case TOGGLE_STATUS:
      return Object.assign({}, state, {
        taskList: state.taskList.map(task => {
          if (task._id === action.id) {
            task.status = action.status;
          }
          return task;
        })
      });

    case UPDATE_TASK_PRACTICE:
      return Object.assign({}, state, {
        taskList: state.taskList.map(task => {
          if (task._id === action.id) {
            let updatedPracticeDuration =
              parseInt(task.practiceDuration, 10) +
              parseInt(action.practiceDuration, 10);

            task.practiceDuration = updatedPracticeDuration;
          }
          return task;
        })
      });

    case PUSH_TASK_NOTE:
      return Object.assign({}, state, {
        taskList: state.taskList.map(task => {
          if (task._id === action.id) {
            task.notes = [
              { title: action.title, body: action.body },
              ...state.task.notes
            ];
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

    case GET_TASK_REQUESTED:
      return Object.assign({}, state, {
        isFetching: true
      });

    case GET_TASK_SUCCESS:
      return Object.assign({}, state, {
        currentTask: action.task,
        isFetching: false
      });

    case GET_TASK_ERROR:
      return Object.assign({}, state, {
        error: true
      });

    case ADD_NOTE:
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

    case INCREASE_PRACTICE:
      let newPracticeCount = parseInt(state.practiceStatus, 10) + 1;
      return Object.assign({}, state, {
        practiceStatus: newPracticeCount
      });

    case DECREASE_PRACTICE:
      newPracticeCount = parseInt(state.practiceStatus, 10) - 1;
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
