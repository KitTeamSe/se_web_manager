import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as api from '../../libs/api/manage/authorityGroup';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

const INITIALIZE = 'authorityGroup/INITIALIZE';
const CHANGE_FIELD = 'authorityGroup/CHANGE_FIELD';
const CHANGE_FIELD_ALL = 'authorityGroup/CHANGE_FIELD_ALL';

const [
  LOAD_AUTHORITY_GROUP,
  LOAD_AUTHORITY_GROUP_SUCCESS,
  LOAD_AUTHORITY_GROUP_FAILURE
] = createRequestActionTypes('authorityGroup/LOAD_AUTHORITY_GROUP');

const [
  LOAD_AUTHORITY_GROUPS,
  LOAD_AUTHORITY_GROUPS_SUCCESS,
  LOAD_AUTHORITY_GROUPS_FAILURE
] = createRequestActionTypes('authorityGroup/LOAD_AUTHORITY_GROUPS');

const [
  ADD_AUTHORITY_GROUP,
  ADD_AUTHORITY_GROUP_SUCCESS,
  ADD_AUTHORITY_GROUP_FAILURE
] = createRequestActionTypes('authorityGroup/ADD_AUTHORITY_GROUP');

const [
  UPDATE_AUTHORITY_GROUP,
  UPDATE_AUTHORITY_GROUP_SUCCESS,
  UPDATE_AUTHORITY_GROUP_FAILURE
] = createRequestActionTypes('authorityGroup/UPDATE_AUTHORITY_GROUP');

const [
  REMOVE_AUTHORITY_GROUP,
  REMOVE_AUTHORITY_GROUP_SUCCESS,
  REMOVE_AUTHORITY_GROUP_FAILURE
] = createRequestActionTypes('authorityGroup/REMOVE_AUTHORITY_GROUP');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));

export const changeFieldAll = createAction(
  CHANGE_FIELD_ALL,
  ({ description, name }) => ({
    description,
    name
  })
);

export const loadAuthorityGroup = createAction(
  LOAD_AUTHORITY_GROUP,
  ({ id, token }) => ({
    id,
    token
  })
);

export const loadAuthorityGroups = createAction(
  LOAD_AUTHORITY_GROUPS,
  ({ token, direction, page, size }) => ({ token, direction, page, size })
);

export const initializeAdd = createAction(ADD_AUTHORITY_GROUP);
export const initializeUpdate = createAction(UPDATE_AUTHORITY_GROUP);
export const addAuthorityGroup = createAction(
  ADD_AUTHORITY_GROUP,
  ({ description, name, token }) => ({
    description,
    name,
    token
  })
);

export const removeAuthorityGroup = createAction(
  REMOVE_AUTHORITY_GROUP,
  ({ id, token }) => ({
    id,
    token
  })
);

export const updateAuthorityGroup = createAction(
  UPDATE_AUTHORITY_GROUP,
  ({ id, description, name, token }) => ({
    id,
    description,
    name,
    token
  })
);

const loadAuthorityGroupSaga = createRequestSaga(
  LOAD_AUTHORITY_GROUP,
  api.getAuthorityGroup
);

const loadAuthorityGroupsSaga = createRequestSaga(
  LOAD_AUTHORITY_GROUPS,
  api.getAuthorityGroups
);

const addAuthorityGroupSaga = createRequestSaga(
  ADD_AUTHORITY_GROUP,
  api.addAuthorityGroup
);

const removeAuthorityGroupSaga = createRequestSaga(
  REMOVE_AUTHORITY_GROUP,
  api.removeAuthorityGroup
);

const updateAuthorityGroupSaga = createRequestSaga(
  UPDATE_AUTHORITY_GROUP,
  api.updateAuthorityGroup
);

export function* authorityGroupSaga() {
  yield takeLatest(LOAD_AUTHORITY_GROUP, loadAuthorityGroupSaga);
  yield takeLatest(LOAD_AUTHORITY_GROUPS, loadAuthorityGroupsSaga);
  yield takeLatest(ADD_AUTHORITY_GROUP, addAuthorityGroupSaga);
  yield takeLatest(REMOVE_AUTHORITY_GROUP, removeAuthorityGroupSaga);
  yield takeLatest(UPDATE_AUTHORITY_GROUP, updateAuthorityGroupSaga);
}

const initialState = {
  authorityGroup: { description: '', name: '', type: 'NORMAL' },
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
        draft.authorityGroup[key] = value;
      }),
    [CHANGE_FIELD_ALL]: (state, { payload: { description, name } }) =>
      produce(state, draft => {
        draft.authorityGroup = {
          description,
          name
        };
      }),
    [LOAD_AUTHORITY_GROUP_SUCCESS]: (state, { payload: info }) => ({
      ...state,
      info,
      infoError: null
    }),
    [LOAD_AUTHORITY_GROUP_FAILURE]: (state, { payload: infoError }) => ({
      ...state,
      info: null,
      infoError
    }),
    [LOAD_AUTHORITY_GROUPS_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_AUTHORITY_GROUPS_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      list: null,
      listError
    }),
    [ADD_AUTHORITY_GROUP]: state => ({
      ...state,
      add: null,
      addError: null
    }),
    [ADD_AUTHORITY_GROUP_SUCCESS]: (state, { payload: add }) => ({
      ...state,
      add,
      addError: null
    }),
    [ADD_AUTHORITY_GROUP_FAILURE]: (state, { payload: addError }) => ({
      ...state,
      addError
    }),
    [REMOVE_AUTHORITY_GROUP_SUCCESS]: (state, { payload: remove }) => ({
      ...state,
      remove,
      removeError: null
    }),
    [REMOVE_AUTHORITY_GROUP_FAILURE]: (state, { payload: removeError }) => ({
      ...state,
      removeError
    }),
    [UPDATE_AUTHORITY_GROUP_SUCCESS]: (state, { payload: update }) => ({
      ...state,
      update,
      updateError: null
    }),
    [UPDATE_AUTHORITY_GROUP_FAILURE]: (state, { payload: updateError }) => ({
      ...state,
      updateError
    })
  },
  initialState
);
