import {
  TODO_LIST_LOAD_REQUEST,
  TODO_LIST_LOAD_SUCCESS,
  TODO_LIST_LOAD_FAIL,
  ADD_TODO_LIST,
  DELETE_TODO_LIST
} from "../actions/todoListActions";

const initialState = {
  message: "",
  status: "",
  data: []
};

export function getTodoList(state = initialState, action) {
  switch (action.type) {

  case ADD_TODO_LIST:
    return {
      data: action.payload,
    };

  case DELETE_TODO_LIST:
    return {
      data: action.payload,
    };

  case TODO_LIST_LOAD_REQUEST:
    return {...state,
      message: "",
      status: "",
      data: []
    };

  case TODO_LIST_LOAD_SUCCESS:
    return {...state,
      data: action.payload,
      status: "ok"
    };

  case TODO_LIST_LOAD_FAIL:
    return {...state,
      message: action.payload,
      status: "not"
    };

  default:
    return state;
  }
}