import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as api from '../../libs/api/manage/authorityMapping';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

const INITIALIZE = 'authorityMapping/INITIALIZE';
const CHANGE_FIELD = 'authorityMapping/CHANGE_FIELD';

const [
  LOAD_AUTHORITY_MAPPING,
  LOAD_AUTHORITY_MAPPING_SUCCESS,
  LOAD_AUTHORITY_MAPPING_FAILURE
] = createRequestActionTypes('authorityMapping/LOAD_AUTHORITY_MAPPING');

const [
  LOAD_AUTHORITY_MAPPINGS,
  LOAD_AUTHORITY_MAPPINGS_SUCCESS,
  LOAD_AUTHORITY_MAPPINGS_FAILURE
] = createRequestActionTypes('authorityMapping/LOAD_AUTHORITY_MAPPINGS');

const [
  ADD_AUTHORITY_MAPPING,
  ADD_AUTHORITY_MAPPING_SUCCESS,
  ADD_AUTHORITY_MAPPING_FAILURE
] = createRequestActionTypes('authorityMapping/ADD_AUTHORITY_MAPPING');

const [
  REMOVE_AUTHORITY_MAPPING,
  REMOVE_AUTHORITY_MAPPING_SUCCESS,
  REMOVE_AUTHORITY_MAPPING_FAILURE
] = createRequestActionTypes('authorityMapping/REMOVE_AUTHORITY_MAPPING');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));

export const loadAuthorityMapping = createAction(
  LOAD_AUTHORITY_MAPPING,
  ({ id, token }) => ({
    id,
    token
  })
);

export const loadAuthorityMappings = createAction(
  LOAD_AUTHORITY_MAPPINGS,
  ({ token, direction, page, size }) => ({ token, direction, page, size })
);

export const initializeAdd = createAction(ADD_AUTHORITY_MAPPING);
export const addAuthorityMapping = createAction(
  ADD_AUTHORITY_MAPPING,
  ({ authorityId, groupId, token }) => ({
    authorityId,
    groupId,
    token
  })
);

export const removeAuthorityMapping = createAction(
  REMOVE_AUTHORITY_MAPPING,
  ({ id, token }) => ({
    id,
    token
  })
);

const loadAuthorityMappingSaga = createRequestSaga(
  LOAD_AUTHORITY_MAPPING,
  api.getAuthorityMapping
);

const loadAuthorityMappingsSaga = createRequestSaga(
  LOAD_AUTHORITY_MAPPINGS,
  api.getAuthorityMappings
);

const addAuthorityMappingSaga = createRequestSaga(
  ADD_AUTHORITY_MAPPING,
  api.addAuthorityMapping
);

const removeAuthorityMappingSaga = createRequestSaga(
  REMOVE_AUTHORITY_MAPPING,
  api.removeAuthorityMapping
);

export function* authorityMappingSaga() {
  yield takeLatest(LOAD_AUTHORITY_MAPPING, loadAuthorityMappingSaga);
  yield takeLatest(LOAD_AUTHORITY_MAPPINGS, loadAuthorityMappingsSaga);
  yield takeLatest(ADD_AUTHORITY_MAPPING, addAuthorityMappingSaga);
  yield takeLatest(REMOVE_AUTHORITY_MAPPING, removeAuthorityMappingSaga);
}

const initialState = {
  authorityMapping: { authorityId: '', groupId: '' },
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
        draft.authorityMapping[key] = value;
      }),
    [LOAD_AUTHORITY_MAPPING_SUCCESS]: (state, { payload: info }) => ({
      ...state,
      info,
      infoError: null
    }),
    [LOAD_AUTHORITY_MAPPING_FAILURE]: (state, { payload: infoError }) => ({
      ...state,
      info: null,
      infoError
    }),
    [LOAD_AUTHORITY_MAPPINGS_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_AUTHORITY_MAPPINGS_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      list: null,
      listError
    }),
    [ADD_AUTHORITY_MAPPING]: state => ({
      ...state,
      add: null,
      addError: null
    }),
    [ADD_AUTHORITY_MAPPING_SUCCESS]: (state, { payload: add }) => ({
      ...state,
      add,
      addError: null
    }),
    [ADD_AUTHORITY_MAPPING_FAILURE]: (state, { payload: addError }) => ({
      ...state,
      addError
    }),
    [REMOVE_AUTHORITY_MAPPING_SUCCESS]: (state, { payload: remove }) => ({
      ...state,
      remove,
      removeError: null
    }),
    [REMOVE_AUTHORITY_MAPPING_FAILURE]: (state, { payload: removeError }) => ({
      ...state,
      removeError
    })
  },
  initialState
);
