import {
  INCREASE_PRACTICE,
  DECREASE_PRACTICE,
  PRACTICE_DURATION
} from "../actions/index";

const initialState = {
  practiceStatus: 0,
  practiceDuration: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
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
