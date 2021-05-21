import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../../libs/api/manage/authority';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

const INITIALIZE = 'authority/INITIALIZE';

const [
  LOAD_AUTHORITY,
  LOAD_AUTHORITY_SUCCESS,
  LOAD_AUTHORITY_FAILURE
] = createRequestActionTypes('authority/LOAD_AUTHORITY');

const [
  LOAD_AUTHORITYS,
  LOAD_AUTHORITYS_SUCCESS,
  LOAD_AUTHORITYS_FAILURE
] = createRequestActionTypes('authority/LOAD_AUTHORITYS');

export const initialize = createAction(INITIALIZE);

export const loadAuthority = createAction(LOAD_AUTHORITY, ({ id, token }) => ({
  id,
  token
}));

export const loadAuthoritys = createAction(
  LOAD_AUTHORITYS,
  ({ token, direction, page, size }) => ({ token, direction, page, size })
);

const loadAuthoritySaga = createRequestSaga(LOAD_AUTHORITY, api.getAuthority);

const loadAuthoritysSaga = createRequestSaga(
  LOAD_AUTHORITYS,
  api.getAuthoritys
);
export function* authoritySaga() {
  yield takeLatest(LOAD_AUTHORITY, loadAuthoritySaga);
  yield takeLatest(LOAD_AUTHORITYS, loadAuthoritysSaga);
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
    [LOAD_AUTHORITY_SUCCESS]: (state, { payload: info }) => ({
      ...state,
      info,
      infoError: null
    }),
    [LOAD_AUTHORITY_FAILURE]: (state, { payload: infoError }) => ({
      ...state,
      info: null,
      infoError
    }),
    [LOAD_AUTHORITYS_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_AUTHORITYS_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      list: null,
      listError
    })
  },
  initialState
);
