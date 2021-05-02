import * as types from 'redux/types';

export const login = (username, password) => ({
  type: types.REQUEST_LOGIN,
  payload: {
    username,
    password,
  },
});

export const checkAuth = () => ({
  type: types.REQUEST_CHECK_AUTH,
});

export const logout = () => ({
  type: types.REQUEST_LOGOUT,
});
