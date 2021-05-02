import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
// import produce from 'immer';
import * as api from '../../libs/api/schedule/subject';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

// const CHANGE_FIELD = 'subject/CHANGE_FIELD';
// const INITIALIZE = 'subject/INITIALIZE';

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

// const [
//   ADD_SUBJECT,
//   ADD_SUBJECT_SUCCESS,
//   ADD_SUBJECT_FAILURE
// ] = createRequestActionTypes('subject/ADD_SUBJECT');

// const [
//   UPDATE_SUBJECT,
//   UPDATE_SUBJECT_SUCCESS,
//   UPDATE_SUBJECT_FAILURE
// ] = createRequestActionTypes('subject/UPDATE_SUBJECT');

// const [
//   REMOVE_SUBJECT,
//   REMOVE_SUBJECT_SUCCESS,
//   REMOVE_SUBJECT_FAILURE
// ] = createRequestActionTypes('subject/REMOVE_SUBJECT');

// export const changeField = createAction(
//   CHANGE_FIELD,
//   ({ form, key, value }) => ({ form, key, value })
// );

// export const initialize = createAction(INITIALIZE, form => form);

export const loadSubjects = createAction(
  LOAD_SUBJECTS,
  ({ token, direction, page, size }) => ({ token, direction, page, size })
);

// export const addsubject = createAction(
//   ADD_SUBJECT,
//   ({ building, capacity, note, roomNumber }) => ({
//     building,
//     capacity,
//     note,
//     roomNumber
//   })
// );

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

// const addSaga = createRequestSaga(ADD_SUBJECT, api.signup);
// const updateSaga = createRequestSaga(UPDATE_SUBJECT, api.signin);

export function* subjectSaga() {
  yield takeLatest(LOAD_SUBJECTS, loadSubjectsSaga);
  // yield takeLatest(ADD_SUBJECT, addSaga);
  // yield takeLatest(UPDATE_SUBJECT, updateSaga);
}

const initialState = {
  addSubject: {
    endTime: '',
    name: '',
    note: '',
    subjectOrder: '',
    startTime: ''
  },
  // updatesubject: {
  // endTime: '',
  // name: '',
  // note: '',
  // subjectId: '',
  // subjectOrder: '',
  // startTime: ''
  // },
  // subject: null,
  subjects: null,
  error: null
};

export default handleActions(
  {
    [LOAD_SUBJECTS_SUCCESS]: (state, { payload: subjects }) => ({
      ...state,
      subjects,
      error: null
    }),
    [LOAD_SUBJECTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      subjects: null,
      error
    })
    // [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
    //   produce(state, draft => {
    //     draft[form][key] = value;
    //   }),
    // [INITIALIZE]: (state, { payload: form }) => ({
    //   ...state,
    //   [form]: initialState[form],
    //   authError: null
    // }),
    // [INITIALIZE_AUTH]: state => ({
    //   ...state,
    //   auth: null,
    //   authError: null
    // }),
    // [SIGNUP_SUCCESS]: (state, { payload: auth }) => ({
    //   ...state,
    //   authError: null,
    //   auth
    // }),
    // [SIGNUP_FAILURE]: (state, { payload: error }) => ({
    //   ...state,
    //   authError: error
    // }),
    // [SIGNIN_SUCCESS]: (state, { payload: auth }) => ({
    //   ...state,
    //   authError: null,
    //   auth
    // }),
    // [SIGNIN_FAILURE]: (state, { payload: error }) => ({
    //   ...state,
    //   authError: error
    // })
  },
  initialState
);
