import * as types from 'redux/types';

export const login = (username, password) => ({
  type: types.REQUEST_LOGIN,
  payload: {
    username,
    password,
  }
});