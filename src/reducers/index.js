import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from "../actions/index";

const initialState = { tasks: { taskIndex: 0, taskList: [] } };

const taskReducer = (state = initialState, action) => {
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
      if (state.tasks.taskList.taskId !== action.id) {
        console.log("tnhis is the one", state.tasks.taskList[action.id]);
        return state;
      }
    // const theTask = state.tasks.taskList[action.id];

    // return Object.assign({}, state, {
    //   tasks: {
    //     taskList:

    // });

    default:
      return state;
  }
};

export default taskReducer;
