import { TOTAL_PRACTICE_DURATION } from "../actions/index";

const initialState = {
  practiceStatus: 0,
  practiceDuration: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOTAL_PRACTICE_DURATION:
      return Object.assign({}, state, {
        practiceDuration: action.input
      });
    default:
      return state;
  }
};
