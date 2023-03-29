import { combineReducers } from "redux";
import authReducer from "./Auth";
import currentUserReducer from "./currentUserReducer";
import askQuestionReducer from "./questions";
import questionsReducer from "./questions";
import usersReducer from "./users";
export default combineReducers({
  authReducer,
  currentUserReducer,
  askQuestionReducer,
  questionsReducer,
  usersReducer,
});
