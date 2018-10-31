import { defaultErrorMsg } from "../constants/Default";
import api from "../api";

export const TODO_LIST_LOAD_REQUEST = "TODO_LIST_LOAD_REQUEST";
export const TODO_LIST_LOAD_SUCCESS = "TODO_LIST_LOAD_SUCCESS";
export const TODO_LIST_LOAD_FAIL = "TODO_LIST_LOAD_FAIL";
export const ADD_TODO_LIST = "ADD_TODO_LIST";
export const DELETE_TODO_LIST = "DELETE_TODO_LIST";

export const todoListRequest = () => ({
  type: TODO_LIST_LOAD_REQUEST
});

export const todoListSuccess = (data) => ({
  type: TODO_LIST_LOAD_SUCCESS,
  payload: data
});

export const todoListFail = (errorMsg) => ({
  type: TODO_LIST_LOAD_FAIL,
  payload: errorMsg
});

export const loadTodoList = () => dispatch => {
  dispatch({
    type: todoListRequest
  });

  api.todoList()
    .then(res => {

      if (res.data) {
        dispatch(todoListSuccess(res.data));
      } else {
        dispatch(todoListFail("Ошибка при загрузке страницы..."));
      }
    })
    .catch(e => dispatch(todoListFail(defaultErrorMsg)));
};



export const createTodoListSuccess =  (data) => {
  return {
    type: ADD_TODO_LIST,
    payload: data
  };
};

export const createTodoList = (text) => dispatch => {
  api.createTodoList(text)
    .then(res => {
      dispatch(createTodoListSuccess(res.data));
    })
    .catch(error => {
      throw(error);
    });
};



export const deleteTodoListSuccess = id => {
  return {
    type: DELETE_TODO_LIST,
    payload: {
      id
    }
  };
};

export const deleteTodoList = id => dispatch => {
  api.deleteTodoList(id)
    .then(response => {
      dispatch(deleteTodoListSuccess(response.data));
    })
    .catch(error => {
      throw(error);
    });
};












// export const deleteTodoList = (todoListId) => {
//   api.deleteTodoList(todoListId)
//     .then(() => loadTodoList())
//     .catch(err => console.error(err));
// };

// export const todoListActions = () => dispatch => {
//   function loadTodoList() {
//     console.log("loadTodoList");
//     dispatch({
//       type: todoListRequest
//     });
//
//     api.todoList()
//       .then(res => {const {data, status} = res.data;
//         console.log("todoList");
//
//         if (status === "ok") {
//           dispatch(todoListSuccess(data));
//         } else {
//           dispatch(todoListFail("Ошибка при загрузке страницы..."));
//         }
//       })
//       .catch(e => dispatch(todoListFail(defaultErrorMsg)));
//   }
//
//   console.log("createTodoList");
//
//   function createTodoList(data) {
//     api.createTodoList(data)
//       .then(() => loadTodoList())
//       .catch(err => console.error(err));
//   }
//
//   console.log("deleteTodoList");
//
//   function deleteTodoList(todoListId) {
//     api.deleteTodoList(todoListId)
//       .then(() => loadTodoList())
//       .catch(err => console.error(err));
//   }
// };
