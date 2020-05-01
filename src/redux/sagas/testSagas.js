import { takeLatest, put } from 'redux-saga/effects';
import types from '../types';
import Services from '../../services';
import { TODOS_URL } from '../../constants/api';


function* testRequest() {
  try {
    const response = yield Services.get(TODOS_URL);
    yield put({ type: types.TEST_REQUEST_SUCCESS, data: response.data });
  } catch (error) {
    yield put({ type: types.TEST_REQUEST_FAILED, error });
  }
}

export default function* () {
  yield takeLatest(types.TEST_REQUEST, testRequest)
}