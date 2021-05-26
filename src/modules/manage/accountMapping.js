import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as api from '../../libs/api/manage/accountMapping';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

const INITIALIZE = 'accountMapping/INITIALIZE';
const CHANGE_FIELD = 'accountMapping/CHANGE_FIELD';

const [
  LOAD_ACCOUNT_MAPPING,
  LOAD_ACCOUNT_MAPPING_SUCCESS,
  LOAD_ACCOUNT_MAPPING_FAILURE
] = createRequestActionTypes('accountMapping/LOAD_ACCOUNT_MAPPING');

const [
  LOAD_ACCOUNT_MAPPINGS,
  LOAD_ACCOUNT_MAPPINGS_SUCCESS,
  LOAD_ACCOUNT_MAPPINGS_FAILURE
] = createRequestActionTypes('accountMapping/LOAD_ACCOUNT_MAPPINGS');

const [
  ADD_ACCOUNT_MAPPING,
  ADD_ACCOUNT_MAPPING_SUCCESS,
  ADD_ACCOUNT_MAPPING_FAILURE
] = createRequestActionTypes('accountMapping/ADD_ACCOUNT_MAPPING');

const [
  REMOVE_ACCOUNT_MAPPING,
  REMOVE_ACCOUNT_MAPPING_SUCCESS,
  REMOVE_ACCOUNT_MAPPING_FAILURE
] = createRequestActionTypes('accountMapping/REMOVE_ACCOUNT_MAPPING');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));

export const loadAccountMapping = createAction(
  LOAD_ACCOUNT_MAPPING,
  ({ id, token }) => ({
    id,
    token
  })
);

export const loadAccountMappings = createAction(
  LOAD_ACCOUNT_MAPPINGS,
  ({ token, direction, page, size }) => ({ token, direction, page, size })
);

export const initializeAdd = createAction(ADD_ACCOUNT_MAPPING);
export const addAccountMapping = createAction(
  ADD_ACCOUNT_MAPPING,
  ({ accountId, groupId, token }) => ({
    accountId,
    groupId,
    token
  })
);

export const removeAccountMapping = createAction(
  REMOVE_ACCOUNT_MAPPING,
  ({ id, token }) => ({
    id,
    token
  })
);

const loadAccountMappingSaga = createRequestSaga(
  LOAD_ACCOUNT_MAPPING,
  api.getAccountMapping
);

const loadAccountMappingsSaga = createRequestSaga(
  LOAD_ACCOUNT_MAPPINGS,
  api.getAccountMappings
);

const addAccountMappingSaga = createRequestSaga(
  ADD_ACCOUNT_MAPPING,
  api.addAccountMapping
);

const removeAccountMappingSaga = createRequestSaga(
  REMOVE_ACCOUNT_MAPPING,
  api.removeAccountMapping
);

export function* accountMappingSaga() {
  yield takeLatest(LOAD_ACCOUNT_MAPPING, loadAccountMappingSaga);
  yield takeLatest(LOAD_ACCOUNT_MAPPINGS, loadAccountMappingsSaga);
  yield takeLatest(ADD_ACCOUNT_MAPPING, addAccountMappingSaga);
  yield takeLatest(REMOVE_ACCOUNT_MAPPING, removeAccountMappingSaga);
}

const initialState = {
  accountMapping: { accountId: '', groupId: '' },
  add: null,
  addError: null,
  update: null,
  updateError: null,
  delete: null,
  deleteError: null,
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
        draft.accountMapping[key] = value;
      }),
    [LOAD_ACCOUNT_MAPPING_SUCCESS]: (state, { payload: info }) => ({
      ...state,
      info,
      infoError: null
    }),
    [LOAD_ACCOUNT_MAPPING_FAILURE]: (state, { payload: infoError }) => ({
      ...state,
      info: null,
      infoError
    }),
    [LOAD_ACCOUNT_MAPPINGS_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_ACCOUNT_MAPPINGS_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      list: null,
      listError
    }),
    [ADD_ACCOUNT_MAPPING]: state => ({
      ...state,
      add: null,
      addError: null
    }),
    [ADD_ACCOUNT_MAPPING_SUCCESS]: (state, { payload: add }) => ({
      ...state,
      add,
      addError: null
    }),
    [ADD_ACCOUNT_MAPPING_FAILURE]: (state, { payload: addError }) => ({
      ...state,
      addError
    }),
    [REMOVE_ACCOUNT_MAPPING_SUCCESS]: (state, { payload: remove }) => ({
      ...state,
      remove,
      removeError: null
    }),
    [REMOVE_ACCOUNT_MAPPING_FAILURE]: (state, { payload: removeError }) => ({
      ...state,
      removeError
    })
  },
  initialState
);
