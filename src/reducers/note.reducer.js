import {
  ADD_NOTE,
  REMOVE_NOTE,
  GET_NOTES_ERROR,
  GET_NOTES_REQUESTED,
  GET_NOTES_SUCCESS
} from "../actions/index";

const initialState = {
  notes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return Object.assign({}, state, {
        notes: [action.note, ...state.notes]
      });

    case REMOVE_NOTE:
      return Object.assign({}, state, {
        notes: state.notes.filter(note => note._id !== action.id)
      });
    case GET_NOTES_REQUESTED:
      return Object.assign({}, state, {});

    case GET_NOTES_SUCCESS:
      return Object.assign({}, state, {
        notes: [...action.notes]
      });

    case GET_NOTES_ERROR:
      return Object.assign({}, state, {});
    default:
      return state;
  }
};
