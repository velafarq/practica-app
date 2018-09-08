import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import authReducer from "./reducers/auth.reducer";
import noteReducer from "./reducers/note.reducer";
import practiceReducer from "./reducers/practice.reducer";
import taskReducer from "./reducers/task.reducer";
import statusReducer from "./reducers/status.reducer";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  auth: authReducer,
  notes: noteReducer,
  practices: practiceReducer,
  tasks: taskReducer,
  status: statusReducer
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
console.log(store);
export default store;
