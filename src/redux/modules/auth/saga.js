import { takeLatest, put } from 'redux-saga/effects';
import * as types from 'redux/types';

function* login({ payload }) {
  const { username, password } = payload;
  try {
    if (username === 'don' && password === 'don') {
      yield put({ type: types.REQUEST_LOGIN_SUCCESS });
    } else {
      yield put({ type: types.REQUEST_LOGIN_FAILED });
    }
  } catch (error) {
    yield put({ type: types.REQUEST_LOGIN_FAILED, error });
  }
}

function logout() {
  window.location.reload();
}

export function* authSaga() {
  yield takeLatest(types.REQUEST_LOGIN, login);
  yield takeLatest(types.REQUEST_CHECK_AUTH, checkAuth);
  yield takeLatest(types.REQUEST_LOGOUT, logout);
}
