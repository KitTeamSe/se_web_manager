import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionTypes = type => {
  const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`];
  return [type, SUCCESS, FAILURE];
};

export const createRequestSaga = (type, request) => {
  const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`];
  return function* saga(action) {
    yield put(startLoading(type));
    try {
      const res = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: res.data,
        meta: res
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

export const createRequestSagaById = (type, request) => {
  const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`];
  return function* saga(action) {
    yield put(startLoading(type));
    const id = action.meta;
    try {
      const res = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: res.data,
        meta: id
      });
    } catch (err) {
      yield put({
        type: FAILURE,
        payload: err,
        error: true,
        meta: id
      });
    }
    yield put(finishLoading(type));
  };
};
