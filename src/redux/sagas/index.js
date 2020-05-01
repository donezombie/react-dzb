import { fork, all } from 'redux-saga/effects';
import testSaga from './testSagas';
import authSagas from './authSagas';

export default function* rootSaga() {
  yield all([
      fork(authSagas),
      fork(testSaga),
  ]);
}