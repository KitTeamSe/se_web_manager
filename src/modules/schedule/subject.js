import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as api from '../../libs/api/schedule/subject';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

const INITIALIZE = 'subject/INITIALIZE';
const CHANGE_FIELD = 'subject/CHANGE_FIELD';

const CHANGE_SELECT = 'subject/CHANGE_SELECT';
// const [
//   LOAD_SUBJECT,
//   LOAD_SUBJECT_SUCCESS,
//   LOAD_SUBJECT_FAILURE
// ] = createRequestActionTypes('subject/LOAD_SUBJECT');

const [
  LOAD_SUBJECTS,
  LOAD_SUBJECTS_SUCCESS,
  LOAD_SUBJECTS_FAILURE
] = createRequestActionTypes('subject/LOAD_SUBJECTS');

const [
  ADD_SUBJECT,
  ADD_SUBJECT_SUCCESS,
  ADD_SUBJECT_FAILURE
] = createRequestActionTypes('subject/ADD_SUBJECT');

// const [
//   UPDATE_SUBJECT,
//   UPDATE_SUBJECT_SUCCESS,
//   UPDATE_SUBJECT_FAILURE
// ] = createRequestActionTypes('subject/UPDATE_SUBJECT');

const [
  REMOVE_SUBJECT,
  REMOVE_SUBJECT_SUCCESS,
  REMOVE_SUBJECT_FAILURE
] = createRequestActionTypes('subject/REMOVE_SUBJECT');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));
export const changeSelect = createAction(CHANGE_SELECT, ({ value }) => ({
  value
}));
export const loadSubjects = createAction(
  LOAD_SUBJECTS,
  ({ token, direction, page, size }) => ({ token, direction, page, size })
);

export const initializeAdd = createAction(ADD_SUBJECT);
export const addSubject = createAction(
  ADD_SUBJECT,
  ({
    subjectId,
    curriculum,
    type,
    code,
    name,
    grade,
    semester,
    credit,
    token
  }) => ({
    subjectId,
    curriculum,
    type,
    code,
    name,
    grade,
    semester,
    credit,
    token
  })
);

export const removeSubject = createAction(REMOVE_SUBJECT, ({ id, token }) => ({
  id,
  token
}));

// export const updatesubject = createAction(
//   UPDATE_SUBJECT,
//   ({ building, capacity, subjectId, note, roomNumber }) => ({
//     building,
//     capacity,
//     subjectId,
//     note,
//     roomNumber
//   })
// );

const loadSubjectsSaga = createRequestSaga(LOAD_SUBJECTS, api.getSubjects);

const addSubjectSaga = createRequestSaga(ADD_SUBJECT, api.addSubject);

const removeSubjectSaga = createRequestSaga(REMOVE_SUBJECT, api.removeSubject);

export function* subjectSaga() {
  yield takeLatest(LOAD_SUBJECTS, loadSubjectsSaga);
  yield takeLatest(ADD_SUBJECT, addSubjectSaga);
  yield takeLatest(REMOVE_SUBJECT, removeSubjectSaga);
  // yield takeLatest(UPDATE_SUBJECT, updateSaga);
}

const initialState = {
  subject: {
    subjectId: '',
    curriculum: '',
    type: '',
    code: '',
    name: '',
    grade: '',
    semester: '',
    credit: ''
  },
  select: null,
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
        draft.subject[key] = value;
      }),
    [CHANGE_SELECT]: (state, { payload: { value } }) => ({
      ...state,
      select: value
    }),
    [LOAD_SUBJECTS_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_SUBJECTS_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      list: null,
      listError
    }),
    [ADD_SUBJECT]: state => ({
      ...state,
      add: null,
      addError: null
    }),
    [ADD_SUBJECT_SUCCESS]: (state, { payload: add }) => ({
      ...state,
      add,
      addError: null
    }),
    [ADD_SUBJECT_FAILURE]: (state, { payload: addError }) => ({
      ...state,
      addError
    }),
    [REMOVE_SUBJECT_SUCCESS]: (state, { payload: remove }) => ({
      ...state,
      remove,
      removeError: null
    }),
    [REMOVE_SUBJECT_FAILURE]: (state, { payload: removeError }) => ({
      ...state,
      removeError
    })
  },
  initialState
);
