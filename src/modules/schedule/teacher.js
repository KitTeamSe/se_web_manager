import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
// import produce from 'immer';
import * as api from '../../libs/api/schedule/teacher';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

// const CHANGE_FIELD = 'teacher/CHANGE_FIELD';
// const INITIALIZE = 'teacher/INITIALIZE';

// const [
//   LOAD_TEACHER,
//   LOAD_TEACHER_SUCCESS,
//   LOAD_TEACHER_FAILURE
// ] = createRequestActionTypes('teacher/LOAD_TEACHER');

const [
  LOAD_TEACHERS,
  LOAD_TEACHERS_SUCCESS,
  LOAD_TEACHERS_FAILURE
] = createRequestActionTypes('teacher/LOAD_TEACHERS');

// const [
//   ADD_TEACHER,
//   ADD_TEACHER_SUCCESS,
//   ADD_TEACHER_FAILURE
// ] = createRequestActionTypes('teacher/ADD_TEACHER');

// const [
//   UPDATE_TEACHER,
//   UPDATE_TEACHER_SUCCESS,
//   UPDATE_TEACHER_FAILURE
// ] = createRequestActionTypes('teacher/UPDATE_TEACHER');

// const [
//   REMOVE_TEACHER,
//   REMOVE_TEACHER_SUCCESS,
//   REMOVE_TEACHER_FAILURE
// ] = createRequestActionTypes('teacher/REMOVE_TEACHER');

// export const changeField = createAction(
//   CHANGE_FIELD,
//   ({ form, key, value }) => ({ form, key, value })
// );

// export const initialize = createAction(INITIALIZE, form => form);

export const loadTeachers = createAction(
  LOAD_TEACHERS,
  ({ token, direction, page, size }) => ({ token, direction, page, size })
);

// export const addteacher = createAction(
//   ADD_TEACHER,
//   ({ building, capacity, note, roomNumber }) => ({
//     building,
//     capacity,
//     note,
//     roomNumber
//   })
// );

// export const updateteacher = createAction(
//   UPDATE_TEACHER,
//   ({ building, capacity, teacherId, note, roomNumber }) => ({
//     building,
//     capacity,
//     teacherId,
//     note,
//     roomNumber
//   })
// );

const loadTeachersSaga = createRequestSaga(LOAD_TEACHERS, api.getTeachers);

// const addSaga = createRequestSaga(ADD_TEACHER, api.signup);
// const updateSaga = createRequestSaga(UPDATE_TEACHER, api.signin);

export function* teacherSaga() {
  yield takeLatest(LOAD_TEACHERS, loadTeachersSaga);
  // yield takeLatest(ADD_TEACHER, addSaga);
  // yield takeLatest(UPDATE_TEACHER, updateSaga);
}

const initialState = {
  addTeacher: {
    endTime: '',
    name: '',
    note: '',
    teacherOrder: '',
    startTime: ''
  },
  // updateteacher: {
  // endTime: '',
  // name: '',
  // note: '',
  // teacherId: '',
  // teacherOrder: '',
  // startTime: ''
  // },
  // teacher: null,
  teachers: null,
  error: null
};

export default handleActions(
  {
    [LOAD_TEACHERS_SUCCESS]: (state, { payload: teachers }) => ({
      ...state,
      teachers,
      error: null
    }),
    [LOAD_TEACHERS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      teachers: null,
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
