import { combineReducers } from "redux";
import listsReducer from "./listsReducer";

const reducers = combineReducers({
  lists: listsReducer,
});

export default reducers;
