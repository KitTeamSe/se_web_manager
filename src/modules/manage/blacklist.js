import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as api from '../../libs/api/manage/blacklist';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

const INITIALIZE = 'blacklist/INITIALIZE';
const CHANGE_FIELD = 'blacklist/CHANGE_FIELD';

const [
  LOAD_BLACKLIST,
  LOAD_BLACKLIST_SUCCESS,
  LOAD_BLACKLIST_FAILURE
] = createRequestActionTypes('blacklist/LOAD_BLACKLIST');

const [
  LOAD_BLACKLISTS,
  LOAD_BLACKLISTS_SUCCESS,
  LOAD_BLACKLISTS_FAILURE
] = createRequestActionTypes('blacklist/LOAD_BLACKLISTS');

const [
  ADD_BLACKLIST,
  ADD_BLACKLIST_SUCCESS,
  ADD_BLACKLIST_FAILURE
] = createRequestActionTypes('blacklist/ADD_BLACKLIST');

const [
  REMOVE_BLACKLIST,
  REMOVE_BLACKLIST_SUCCESS,
  REMOVE_BLACKLIST_FAILURE
] = createRequestActionTypes('blacklist/REMOVE_BLACKLIST');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));

export const loadBlacklist = createAction(LOAD_BLACKLIST, ({ id, token }) => ({
  id,
  token
}));

export const loadBlacklists = createAction(
  LOAD_BLACKLISTS,
  ({ token, direction, page, size }) => ({ token, direction, page, size })
);

export const initializeAdd = createAction(ADD_BLACKLIST);
export const addBlacklist = createAction(
  ADD_BLACKLIST,
  ({ ip, reason, token }) => ({ ip, reason, token })
);

export const removeBlacklist = createAction(
  REMOVE_BLACKLIST,
  ({ id, token }) => ({
    id,
    token
  })
);

const loadBlacklistSaga = createRequestSaga(LOAD_BLACKLIST, api.getBlacklist);

const loadBlacklistsSaga = createRequestSaga(
  LOAD_BLACKLISTS,
  api.getBlacklists
);

const addBlacklistSaga = createRequestSaga(ADD_BLACKLIST, api.addBlacklist);

const removeBlacklistSaga = createRequestSaga(
  REMOVE_BLACKLIST,
  api.removeBlacklist
);

export function* blacklistSaga() {
  yield takeLatest(LOAD_BLACKLIST, loadBlacklistSaga);
  yield takeLatest(LOAD_BLACKLISTS, loadBlacklistsSaga);
  yield takeLatest(ADD_BLACKLIST, addBlacklistSaga);
  yield takeLatest(REMOVE_BLACKLIST, removeBlacklistSaga);
}

const initialState = {
  blacklist: { ip: '', reason: '' },
  add: null,
  addError: null,
  update: null,
  updateError: null,
  remove: null,
  removeError: null,
  info: null,
  infoError: null,
  list: null,
  listError: null
};

export default handleActions(
  {
    [INITIALIZE]: () => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, draft => {
        draft.blacklist[key] = value;
      }),
    [LOAD_BLACKLIST_SUCCESS]: (state, { payload: info }) => ({
      ...state,
      info,
      infoError: null
    }),
    [LOAD_BLACKLIST_FAILURE]: (state, { payload: infoError }) => ({
      ...state,
      info: null,
      infoError
    }),
    [LOAD_BLACKLISTS_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_BLACKLISTS_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      list: null,
      listError
    }),
    [ADD_BLACKLIST]: state => ({
      ...state,
      add: null,
      addError: null
    }),
    [ADD_BLACKLIST_SUCCESS]: (state, { payload: add }) => ({
      ...state,
      add,
      addError: null
    }),
    [ADD_BLACKLIST_FAILURE]: (state, { payload: addError }) => ({
      ...state,
      addError
    }),
    [REMOVE_BLACKLIST_SUCCESS]: (state, { payload: remove }) => ({
      ...state,
      remove,
      removeError: null
    }),
    [REMOVE_BLACKLIST_FAILURE]: (state, { payload: removeError }) => ({
      ...state,
      removeError
    })
  },
  initialState
);
