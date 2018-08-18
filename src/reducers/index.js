import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from "../actions/index";

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
      // const updatedState = taskList.filter(todo => todo.taskId !== action.id);
      return Object.assign({}, state, {
        taskList: taskList.filter(todo => todo.taskId !== action.id)
      });

    default:
      return state;
  }
};

export default taskReducer;
