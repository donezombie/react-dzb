import { takeLatest, put } from 'redux-saga/effects';
import types from '../types';

function* login({ payload }) {
  try {
    const { username, password } = payload;
    if (username === 'test' && password === '1234') {
      yield put({ type: types.REQUEST_LOGIN_SUCCESS });
      return;
    }
    yield put({ type: types.REQUEST_LOGIN_FAILED, error: 'Username / Password was wrong!' });
  } catch (error) {
    yield put({ type: types.REQUEST_LOGIN_FAILED, error });
  }
}

export default function* () {
  yield takeLatest(types.REQUEST_LOGIN, login);
}