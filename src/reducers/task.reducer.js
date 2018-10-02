import {
  ADD_TASK,
  TOGGLE_TASK_STATUS,
  UPDATE_TASK_PRACTICE_SUCCESS,
  RESET_TASK_PRACTICE_SUCCESS,
  PUSH_TASK_NOTE,
  PULL_TASK_NOTE,
  GET_TASKS_REQUESTED,
  GET_TASKS_SUCCESS,
  GET_TASKS_ERROR,
  REMOVE_TASK,
  GET_TASK_REQUESTED,
  GET_TASK_SUCCESS,
  GET_TASK_ERROR
} from "../actions/index";

const initialState = {
  taskList: [],
  currentTask: {}
};

export default (state = initialState, action) => {
  const taskList = state.taskList;
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {
        taskList: [action.task, ...state.taskList]
      });
    case TOGGLE_TASK_STATUS:
      return Object.assign({}, state, {
        taskList: state.taskList.map(task => {
          if (task._id === action.id) {
            task.status = action.status;
          }
          return task;
        })
      });
    case UPDATE_TASK_PRACTICE_SUCCESS:
      const updateCurrentTask = state.currentTask;
      updateCurrentTask.practiceDuration = action.practiceDuration;
      return Object.assign({}, state, {
        currentTask: updateCurrentTask
      });

    case RESET_TASK_PRACTICE_SUCCESS:
      const updateCurrentTask3 = state.currentTask;
      updateCurrentTask3.practiceDuration = 0;
      return Object.assign({}, state, {
        currentTask: updateCurrentTask3
      });

    case PUSH_TASK_NOTE:
      const updateCurrentTask2 = state.currentTask;
      updateCurrentTask2.notes = action.notes;

      return Object.assign({}, state, {
        currentTask: updateCurrentTask2
      });

    case PULL_TASK_NOTE:
      const updateCurrentTask4 = state.currentTask;
      updateCurrentTask4.notes = action.notes;

      return Object.assign({}, state, {
        currentTask: updateCurrentTask4
      });

    case GET_TASKS_REQUESTED:
      return Object.assign({}, state, {});

    case GET_TASKS_SUCCESS:
      return Object.assign({}, state, {
        taskList: [...action.tasks]
      });

    case GET_TASKS_ERROR:
      return Object.assign({}, state, {});

    case REMOVE_TASK:
      return Object.assign({}, state, {
        taskList: taskList.filter(todo => todo._id !== action.id)
      });

    case GET_TASK_REQUESTED:
      return Object.assign({}, state, {});

    case GET_TASK_SUCCESS:
      return Object.assign({}, state, {
        currentTask: action.task
      });

    case GET_TASK_ERROR:
      return Object.assign({}, state, {});
    default:
      return state;
  }
};
