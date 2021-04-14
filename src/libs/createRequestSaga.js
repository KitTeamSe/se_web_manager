import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

const createRequestSaga = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* saga(action) {
    yield put(startLoading(type));
    try {
      const res = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: res.data
      });
    } catch (err) {
      yield put({
        type: FAILURE,
        payload: err,
        error: true
      });
    }
    yield put(finishLoading(type));
  };
};

export default createRequestSaga;
