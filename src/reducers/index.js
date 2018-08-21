import {
  ADD_TASK,
  COMPLETE_TASK,
  REMOVE_TASK,
  ADD_NOTE,
  PRACTICE_STATUS
} from "../actions/index";

const initialState = {
  taskIndex: 0,
  taskList: [],
  notes: [],
  practiceStatus: false,
  practiceHours: 0,
  goals: []
};

const taskReducer = (state = initialState, action) => {
  const taskList = state.taskList;
  switch (action.type) {
    case ADD_TASK:
      const task = action.payload;
      const taskIndex = action.id;
      task.taskId = taskIndex;
      task.completed = false;
      return Object.assign({}, state, {
        taskList: [...state.taskList, task],
        taskIndex: taskIndex
      });

      console.log(taskList);
    case COMPLETE_TASK:
      return Object.assign({}, state, {
        ...taskList.filter(todo => {
          if (todo.taskId === action.id) {
            todo.completed = !todo.completed;
            console.log(todo);
          }
        })
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

    case PRACTICE_STATUS:
      return Object.assign({}, state, {
        practiceStatus: action.status
      });

    default:
      return state;
  }
};

export default taskReducer;
