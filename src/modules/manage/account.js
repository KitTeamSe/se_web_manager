import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as api from '../../libs/api/manage/account';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

const INITIALIZE = 'account/INITIALIZE';
const CHANGE_FIELD = 'account/CHANGE_FIELD';
const CHANGE_FIELD_ALL = 'account/CHANGE_FIELD_ALL';

const [
  LOAD_ACCOUNT,
  LOAD_ACCOUNT_SUCCESS,
  LOAD_ACCOUNT_FAILURE
] = createRequestActionTypes('account/LOAD_ACCOUNT');

const [
  LOAD_ACCOUNTS,
  LOAD_ACCOUNTS_SUCCESS,
  LOAD_ACCOUNTS_FAILURE
] = createRequestActionTypes('account/LOAD_ACCOUNTS');

const [
  UPDATE_ACCOUNT,
  UPDATE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAILURE
] = createRequestActionTypes('account/UPDATE_ACCOUNT');

const [
  REMOVE_ACCOUNT,
  REMOVE_ACCOUNT_SUCCESS,
  REMOVE_ACCOUNT_FAILURE
] = createRequestActionTypes('account/REMOVE_ACCOUNT');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));

export const changeFieldAll = createAction(
  CHANGE_FIELD_ALL,
  ({ id, informationOpenAgree, name, nickname, password, studentId }) => ({
    id,
    informationOpenAgree,
    name,
    nickname,
    password,
    studentId
  })
);

export const loadAccount = createAction(LOAD_ACCOUNT, ({ id, token }) => ({
  id,
  token
}));

export const loadAccounts = createAction(
  LOAD_ACCOUNTS,
  ({ token, direction, page, size }) => ({ token, direction, page, size })
);

export const initializeUpdate = createAction(UPDATE_ACCOUNT);

export const removeAccount = createAction(REMOVE_ACCOUNT, ({ id, token }) => ({
  id,
  token
}));

export const updateAccount = createAction(
  UPDATE_ACCOUNT,
  ({
    id,
    informationOpenAgree,
    name,
    nickname,
    password,
    studentId,
    type,
    token
  }) => ({
    id,
    informationOpenAgree,
    name,
    nickname,
    password,
    studentId,
    type,
    token
  })
);

const loadAccountSaga = createRequestSaga(LOAD_ACCOUNT, api.getAccount);

const loadAccountsSaga = createRequestSaga(LOAD_ACCOUNTS, api.getAccounts);

const removeAccountSaga = createRequestSaga(REMOVE_ACCOUNT, api.removeAccount);

const updateAccountSaga = createRequestSaga(UPDATE_ACCOUNT, api.updateAccount);

export function* accountSaga() {
  yield takeLatest(LOAD_ACCOUNT, loadAccountSaga);
  yield takeLatest(LOAD_ACCOUNTS, loadAccountsSaga);
  yield takeLatest(REMOVE_ACCOUNT, removeAccountSaga);
  yield takeLatest(UPDATE_ACCOUNT, updateAccountSaga);
}

const initialState = {
  account: {
    id: '',
    studentId: '',
    name: '',
    nickname: '',
    password: '',
    informationOpenAgree: '',
    type: ''
  },
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
        draft.account[key] = value;
      }),
    [CHANGE_FIELD_ALL]: (
      state,
      {
        payload: {
          id,
          informationOpenAgree,
          name,
          nickname,
          password,
          studentId
        }
      }
    ) =>
      produce(state, draft => {
        draft.account = {
          id,
          informationOpenAgree,
          name,
          nickname,
          password,
          studentId
        };
      }),
    [LOAD_ACCOUNT_SUCCESS]: (state, { payload: info }) => ({
      ...state,
      info,
      infoError: null
    }),
    [LOAD_ACCOUNT_FAILURE]: (state, { payload: infoError }) => ({
      ...state,
      info: null,
      infoError
    }),
    [LOAD_ACCOUNTS_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_ACCOUNTS_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      list: null,
      listError
    }),
    [REMOVE_ACCOUNT_SUCCESS]: (state, { payload: remove }) => ({
      ...state,
      remove,
      removeError: null
    }),
    [REMOVE_ACCOUNT_FAILURE]: (state, { payload: removeError }) => ({
      ...state,
      removeError
    }),
    [UPDATE_ACCOUNT_SUCCESS]: (state, { payload: update }) => ({
      ...state,
      update,
      updateError: null
    }),
    [UPDATE_ACCOUNT_FAILURE]: (state, { payload: updateError }) => ({
      ...state,
      updateError
    })
  },
  initialState
);
