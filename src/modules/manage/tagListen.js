import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as api from '../../libs/api/manage/tagListen';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

const INITIALIZE = 'tagListen/INITIALIZE';
const CHANGE_FIELD = 'tagListen/CHANGE_FIELD';
const CHANGE_FIELD_ALL = 'tagListen/CHANGE_FIELD_ALL';

const [
  LOAD_TAG_LISTEN,
  LOAD_TAG_LISTEN_SUCCESS,
  LOAD_TAG_LISTEN_FAILURE
] = createRequestActionTypes('tagListen/LOAD_TAG_LISTEN');

const [
  LOAD_TAG_LISTENS,
  LOAD_TAG_LISTENS_SUCCESS,
  LOAD_TAG_LISTENS_FAILURE
] = createRequestActionTypes('tagListen/LOAD_TAG_LISTENS');

const [
  ADD_TAG_LISTEN,
  ADD_TAG_LISTEN_SUCCESS,
  ADD_TAG_LISTEN_FAILURE
] = createRequestActionTypes('tagListen/ADD_TAG_LISTEN');

const [
  REMOVE_TAG_LISTEN,
  REMOVE_TAG_LISTEN_SUCCESS,
  REMOVE_TAG_LISTEN_FAILURE
] = createRequestActionTypes('tagListen/REMOVE_TAG_LISTEN');

const [
  LOAD_TAG_LISTEN_BY_ACCOUNT,
  LOAD_TAG_LISTEN_BY_ACCOUNT_SUCCESS,
  LOAD_TAG_LISTEN_BY_ACCOUNT_FAILURE
] = createRequestActionTypes('tagListen/LOAD_TAG_LISTEN_BY_ACCOUNT');

const [
  LOAD_MY_TAG_LISTEN,
  LOAD_MY_TAG_LISTEN_SUCCESS,
  LOAD_MY_TAG_LISTEN_FAILURE
] = createRequestActionTypes('tagListen/LOAD_MY_TAG_LISTEN');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));

export const changeFieldAll = createAction(CHANGE_FIELD_ALL, ({ text }) => ({
  text
}));

export const loadTagListen = createAction(LOAD_TAG_LISTEN, ({ id, token }) => ({
  id,
  token
}));

export const loadTagListens = createAction(
  LOAD_TAG_LISTENS,
  ({ token, direction, page, size }) => ({ token, direction, page, size })
);

export const initializeAdd = createAction(ADD_TAG_LISTEN);
export const addTagListen = createAction(
  ADD_TAG_LISTEN,
  ({ tagId, token }) => ({
    tagId,
    token
  })
);

export const removeTagListen = createAction(
  REMOVE_TAG_LISTEN,
  ({ id, token }) => ({
    id,
    token
  })
);

export const loadTagListenByAccount = createAction(
  LOAD_TAG_LISTEN_BY_ACCOUNT,
  ({ id, token }) => ({ id, token })
);
export const loadMyTagListen = createAction(
  LOAD_MY_TAG_LISTEN,
  ({ token }) => ({ token })
);

const loadTagListenSaga = createRequestSaga(LOAD_TAG_LISTEN, api.getTagListen);

const loadTagListensSaga = createRequestSaga(
  LOAD_TAG_LISTENS,
  api.getTagListens
);

const addTagListenSaga = createRequestSaga(ADD_TAG_LISTEN, api.addTagListen);

const removeTagListenSaga = createRequestSaga(
  REMOVE_TAG_LISTEN,
  api.removeTagListen
);

const loadTagListenByAccountSaga = createRequestSaga(
  LOAD_TAG_LISTEN_BY_ACCOUNT,
  api.getTagListenByAccount
);

const loadMyTagListenSaga = createRequestSaga(
  LOAD_MY_TAG_LISTEN,
  api.getMyTagListen
);

export function* tagListenSaga() {
  yield takeLatest(LOAD_TAG_LISTEN, loadTagListenSaga);
  yield takeLatest(LOAD_TAG_LISTENS, loadTagListensSaga);
  yield takeLatest(ADD_TAG_LISTEN, addTagListenSaga);
  yield takeLatest(REMOVE_TAG_LISTEN, removeTagListenSaga);
  yield takeLatest(LOAD_TAG_LISTEN_BY_ACCOUNT, loadTagListenByAccountSaga);
  yield takeLatest(LOAD_MY_TAG_LISTEN, loadMyTagListenSaga);
}

const initialState = {
  tagListen: { tagListenId: '', text: '' },
  add: null,
  addError: null,
  update: null,
  updateError: null,
  remove: null,
  removeError: null,
  info: null,
  infoError: null,
  accountInfo: null,
  accountInfoError: null,
  myInfo: null,
  myInfoError: null,
  list: null,
  listError: null
};

export default handleActions(
  {
    [INITIALIZE]: () => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, draft => {
        draft.tagListen[key] = value;
      }),
    [CHANGE_FIELD_ALL]: (state, { payload: { text } }) =>
      produce(state, draft => {
        draft.tagListen = { text };
      }),
    [LOAD_TAG_LISTEN_SUCCESS]: (state, { payload: info }) => ({
      ...state,
      info,
      infoError: null
    }),
    [LOAD_TAG_LISTEN_FAILURE]: (state, { payload: infoError }) => ({
      ...state,
      info: null,
      infoError
    }),
    [LOAD_TAG_LISTENS_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_TAG_LISTENS_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      list: null,
      listError
    }),

    [LOAD_TAG_LISTEN_BY_ACCOUNT_SUCCESS]: (
      state,
      { payload: accountList }
    ) => ({
      ...state,
      accountList,
      accountListError: null
    }),
    [LOAD_TAG_LISTEN_BY_ACCOUNT_FAILURE]: (
      state,
      { payload: accountListError }
    ) => ({
      ...state,
      accountList: null,
      accountListError
    }),

    [LOAD_MY_TAG_LISTEN_SUCCESS]: (state, { payload: myList }) => ({
      ...state,
      myList,
      myListError: null
    }),
    [LOAD_MY_TAG_LISTEN_FAILURE]: (state, { payload: myListError }) => ({
      ...state,
      myList: null,
      myListError
    }),
    [ADD_TAG_LISTEN]: state => ({
      ...state,
      add: null,
      addError: null
    }),
    [ADD_TAG_LISTEN_SUCCESS]: (state, { payload: add }) => ({
      ...state,
      add,
      addError: null
    }),
    [ADD_TAG_LISTEN_FAILURE]: (state, { payload: addError }) => ({
      ...state,
      addError
    }),
    [REMOVE_TAG_LISTEN_SUCCESS]: (state, { payload: remove }) => ({
      ...state,
      remove,
      removeError: null
    }),
    [REMOVE_TAG_LISTEN_FAILURE]: (state, { payload: removeError }) => ({
      ...state,
      removeError
    })
  },
  initialState
);
