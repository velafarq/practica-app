import {
  ADD_TASK,
  GET_TASKS,
  COMPLETE_TASK,
  REMOVE_TASK,
  ADD_NOTE,
  GET_NOTES,
  PRACTICE_STATUS,
  PRACTICE_DURATION
} from "../actions/index";

const initialState = {
  taskIndex: 0,
  taskList: [],
  notes: [{ content: "test note" }],
  practiceStatus: 0,
  practiceDuration: 0,
  goals: []
};

const taskReducer = (state = initialState, action) => {
  const taskList = state.taskList;
  switch (action.type) {
    case ADD_TASK:
      const task = action.task;
      const taskIndex = action.id;
      task.taskId = taskIndex;
      task.completed = false;
      task.task = task;
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

    case GET_TASKS:
      return Object.assign({}, state, {
        taskList: [action.tasks]
      });

    case REMOVE_TASK:
      return Object.assign({}, state, {
        taskList: taskList.filter(todo => todo.taskId !== action.id)
      });

    case ADD_NOTE:
      console.log(state.notes);
      return Object.assign({}, state, {
        notes: [{ content: action.note }, ...state.notes]
      });

    case GET_NOTES:
      return Object.assign({}, state, {
        notes: [action.notes]
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
