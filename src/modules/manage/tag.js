import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as api from '../../libs/api/manage/tag';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

const INITIALIZE = 'tag/INITIALIZE';
const CHANGE_FIELD = 'tag/CHANGE_FIELD';
const CHANGE_FIELD_ALL = 'tag/CHANGE_FIELD_ALL';

const [LOAD_TAG, LOAD_TAG_SUCCESS, LOAD_TAG_FAILURE] = createRequestActionTypes(
  'tag/LOAD_TAG'
);

const [
  LOAD_TAGS,
  LOAD_TAGS_SUCCESS,
  LOAD_TAGS_FAILURE
] = createRequestActionTypes('tag/LOAD_TAGS');

const [ADD_TAG, ADD_TAG_SUCCESS, ADD_TAG_FAILURE] = createRequestActionTypes(
  'tag/ADD_TAG'
);

const [
  UPDATE_TAG,
  UPDATE_TAG_SUCCESS,
  UPDATE_TAG_FAILURE
] = createRequestActionTypes('tag/UPDATE_TAG');

const [
  REMOVE_TAG,
  REMOVE_TAG_SUCCESS,
  REMOVE_TAG_FAILURE
] = createRequestActionTypes('tag/REMOVE_TAG');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));

export const changeFieldAll = createAction(CHANGE_FIELD_ALL, ({ text }) => ({
  text
}));

export const loadTag = createAction(LOAD_TAG, ({ id, token }) => ({
  id,
  token
}));

export const loadTags = createAction(
  LOAD_TAGS,
  ({ token, direction, page, size }) => ({ token, direction, page, size })
);

export const initializeAdd = createAction(ADD_TAG);
export const initializeUpdate = createAction(UPDATE_TAG);
export const addTag = createAction(ADD_TAG, ({ text, token }) => ({
  text,
  token
}));

export const removeTag = createAction(REMOVE_TAG, ({ id, token }) => ({
  id,
  token
}));

export const updateTag = createAction(UPDATE_TAG, ({ tagId, text, token }) => ({
  tagId,
  text,
  token
}));

const loadTagSaga = createRequestSaga(LOAD_TAG, api.getTag);

const loadTagsSaga = createRequestSaga(LOAD_TAGS, api.getTags);

const addTagSaga = createRequestSaga(ADD_TAG, api.addTag);

const removeTagSaga = createRequestSaga(REMOVE_TAG, api.removeTag);

const updateTagSaga = createRequestSaga(UPDATE_TAG, api.updateTag);

export function* tagSaga() {
  yield takeLatest(LOAD_TAG, loadTagSaga);
  yield takeLatest(LOAD_TAGS, loadTagsSaga);
  yield takeLatest(ADD_TAG, addTagSaga);
  yield takeLatest(REMOVE_TAG, removeTagSaga);
  yield takeLatest(UPDATE_TAG, updateTagSaga);
}

const initialState = {
  tag: { tagId: '', text: '' },
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
        draft.tag[key] = value;
      }),
    [CHANGE_FIELD_ALL]: (state, { payload: { text } }) =>
      produce(state, draft => {
        draft.tag = { text };
      }),
    [LOAD_TAG_SUCCESS]: (state, { payload: info }) => ({
      ...state,
      info,
      infoError: null
    }),
    [LOAD_TAG_FAILURE]: (state, { payload: infoError }) => ({
      ...state,
      info: null,
      infoError
    }),
    [LOAD_TAGS_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_TAGS_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      list: null,
      listError
    }),
    [ADD_TAG]: state => ({
      ...state,
      add: null,
      addError: null
    }),
    [ADD_TAG_SUCCESS]: (state, { payload: add }) => ({
      ...state,
      add,
      addError: null
    }),
    [ADD_TAG_FAILURE]: (state, { payload: addError }) => ({
      ...state,
      addError
    }),
    [REMOVE_TAG_SUCCESS]: (state, { payload: remove }) => ({
      ...state,
      remove,
      removeError: null
    }),
    [REMOVE_TAG_FAILURE]: (state, { payload: removeError }) => ({
      ...state,
      removeError
    }),
    [UPDATE_TAG_SUCCESS]: (state, { payload: update }) => ({
      ...state,
      update,
      updateError: null
    }),
    [UPDATE_TAG_FAILURE]: (state, { payload: updateError }) => ({
      ...state,
      updateError
    })
  },
  initialState
);
