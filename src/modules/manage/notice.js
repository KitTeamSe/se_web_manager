import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../../libs/api/manage/notice';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

const INITIALIZE = 'notice/INITIALIZE';

const [
  LOAD_NOTICE,
  LOAD_NOTICE_SUCCESS,
  LOAD_NOTICE_FAILURE
] = createRequestActionTypes('notice/LOAD_NOTICE');

const [
  LOAD_NOTICES,
  LOAD_NOTICES_SUCCESS,
  LOAD_NOTICES_FAILURE
] = createRequestActionTypes('notice/LOAD_NOTICES');

export const initialize = createAction(INITIALIZE);

export const loadNotice = createAction(LOAD_NOTICE, ({ id, token }) => ({
  id,
  token
}));

export const loadNotices = createAction(
  LOAD_NOTICES,
  ({ token, direction, page, size }) => ({ token, direction, page, size })
);

const loadNoticeSaga = createRequestSaga(LOAD_NOTICE, api.getNotice);

const loadNoticesSaga = createRequestSaga(LOAD_NOTICES, api.getNotices);
export function* noticeSaga() {
  yield takeLatest(LOAD_NOTICE, loadNoticeSaga);
  yield takeLatest(LOAD_NOTICES, loadNoticesSaga);
}

const initialState = {
  info: null,
  infoError: null,
  list: null,
  listError: null
};

export default handleActions(
  {
    [INITIALIZE]: () => initialState,
    [LOAD_NOTICE_SUCCESS]: (state, { payload: info }) => ({
      ...state,
      info,
      infoError: null
    }),
    [LOAD_NOTICE_FAILURE]: (state, { payload: infoError }) => ({
      ...state,
      info: null,
      infoError
    }),
    [LOAD_NOTICES_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_NOTICES_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      list: null,
      listError
    })
  },
  initialState
);
