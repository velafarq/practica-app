import {
  ADD_TASK,
  TOGGLE_TASK_STATUS,
  UPDATE_TASK_PRACTICE,
  PUSH_TASK_NOTE,
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
              ...state.notes
            ];
          }
          return task;
        })
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
