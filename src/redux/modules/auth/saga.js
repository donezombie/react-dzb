import { takeLatest, put } from 'redux-saga/effects';
import * as types from 'redux/types';
import authServices from 'services/authServices';
import { isEmpty } from 'lodash';

function* login({ payload }) {
  const { username, password } = payload;
  try {
    if (username === 'don' && password === 'don') {
      yield put({ type: types.REQUEST_LOGIN_SUCCESS });
      authServices.saveUserLocalStorage({ username, isLogged: true });
    } else {
      yield put({ type: types.REQUEST_LOGIN_FAILED });
    }
  } catch (error) {
    yield put({ type: types.REQUEST_LOGIN_FAILED, error });
  }
}

function* logout() {
  try {
    yield authServices.clearUserLocalStorage();
    window.location.reload();
  } catch (error) {}
}

function* checkAuth() {
  const dataUser = authServices.getUserLocalStorage();
  if (!isEmpty(dataUser)) {
    yield put({ type: types.REQUEST_LOGIN_SUCCESS });
  }
}

export function* authSaga() {
  yield takeLatest(types.REQUEST_LOGIN, login);
  yield takeLatest(types.REQUEST_CHECK_AUTH, checkAuth);
  yield takeLatest(types.REQUEST_LOGOUT, logout);
}
