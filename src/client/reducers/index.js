import { combineReducers } from "redux";
import { getTodoList } from "./todoList";

export const rootReducer  = combineReducers({
  todoList: getTodoList,
});