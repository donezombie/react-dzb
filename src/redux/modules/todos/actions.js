import * as types from 'redux/types';

// get todos list
export const getTodosList = (callbacks) => ({
  type: types.REQUEST_LIST_TODOS,
  payload: { callbacks }
});

export const getTodosListSuccess = (payload) => ({
  type: types.REQUEST_LIST_TODOS_SUCCESS,
  payload,
});

export const getTodosListFailed = (payload) => ({
  type: types.REQUEST_LIST_TODOS_FAILED,
  payload,
});

