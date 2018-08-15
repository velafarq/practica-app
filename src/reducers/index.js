import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from "../actions/index";

const initialState = {
  tasks: {
    taskIndex: 0,
    taskList: []
  }
};

const taskReducer = (state = initialState, action) => {
  const taskList = state.tasks.taskList;
  switch (action.type) {
    case ADD_TASK:
      const task = action.payload;
      const taskIndex = action.id;
      task.taskId = taskIndex;
      task.completed = false;
      // board.lists = [];
      return Object.assign({}, state, {
        tasks: {
          taskList: [task, ...state.tasks.taskList],
          taskIndex: taskIndex
        }
      });

    case COMPLETE_TASK:
      return Object.assign({}, state, {
        ...state,
        taskList: {
          ...taskList,
          ...taskList.filter(todo => {
            if (todo.taskId === action.id) {
              todo.completed = !todo.completed;
              console.log(todo);
            }
          })
        }
      });

    case REMOVE_TASK:
      console.log("this is working", taskList);
      const updatedState = taskList.splice(action.id, 1);
      return Object.assign({}, state, {
        updatedState
      });

    default:
      return state;
  }
};

export default taskReducer;
