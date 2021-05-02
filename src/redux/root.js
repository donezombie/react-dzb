import { combineReducers } from 'redux';
import { all, spawn, call } from 'redux-saga/effects';
import { authSaga, authReducer } from './modules/auth';

export function* rootSagas() {
  const sagas = [authSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      }),
    ),
  );
}

export const rootReducers = combineReducers({
  authReducer,
});
