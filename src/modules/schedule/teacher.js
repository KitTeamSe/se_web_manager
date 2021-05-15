import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as api from '../../libs/api/schedule/teacher';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

const INITIALIZE = 'teacher/INITIALIZE';
const CHANGE_FIELD = 'teacher/CHANGE_FIELD';
const CHANGE_SELECT = 'teacher/CHANGE_SELECT';

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

const [
  ADD_TEACHER,
  ADD_TEACHER_SUCCESS,
  ADD_TEACHER_FAILURE
] = createRequestActionTypes('teacher/ADD_TEACHER');

// const [
//   UPDATE_TEACHER,
//   UPDATE_TEACHER_SUCCESS,
//   UPDATE_TEACHER_FAILURE
// ] = createRequestActionTypes('teacher/UPDATE_TEACHER');

const [
  REMOVE_TEACHER,
  REMOVE_TEACHER_SUCCESS,
  REMOVE_TEACHER_FAILURE
] = createRequestActionTypes('teacher/REMOVE_TEACHER');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));

export const changeSelect = createAction(CHANGE_SELECT, ({ value }) => ({
  value
}));

export const loadTeachers = createAction(
  LOAD_TEACHERS,
  ({ token, direction, page, size }) => ({ token, direction, page, size })
);

export const initializeAdd = createAction(ADD_TEACHER);
export const addTeacher = createAction(
  ADD_TEACHER,
  ({ department, name, note, type, token }) => ({
    department,
    name,
    note,
    type,
    token
  })
);

export const removeTeacher = createAction(REMOVE_TEACHER, ({ id, token }) => ({
  id,
  token
}));

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

const addTeacherSaga = createRequestSaga(ADD_TEACHER, api.addTeacher);

const removeTeacherSaga = createRequestSaga(REMOVE_TEACHER, api.removeTeacher);

export function* teacherSaga() {
  yield takeLatest(LOAD_TEACHERS, loadTeachersSaga);
  yield takeLatest(ADD_TEACHER, addTeacherSaga);
  yield takeLatest(REMOVE_TEACHER, removeTeacherSaga);
  // yield takeLatest(UPDATE_TEACHER, updateSaga);
}

const initialState = {
  teacher: {
    department: '',
    name: '',
    note: '',
    type: ''
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
        draft.teacher[key] = value;
      }),
    [CHANGE_SELECT]: (state, { payload: { value } }) => ({
      ...state,
      select: value
    }),
    [LOAD_TEACHERS_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_TEACHERS_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      list: null,
      listError
    }),
    [ADD_TEACHER]: state => ({
      ...state,
      add: null,
      addError: null
    }),
    [ADD_TEACHER_SUCCESS]: (state, { payload: add }) => ({
      ...state,
      add,
      addError: null
    }),
    [ADD_TEACHER_FAILURE]: (state, { payload: addError }) => ({
      ...state,
      addError
    }),
    [REMOVE_TEACHER_SUCCESS]: (state, { payload: remove }) => ({
      ...state,
      remove,
      removeError: null
    }),
    [REMOVE_TEACHER_FAILURE]: (state, { payload: removeError }) => ({
      ...state,
      removeError
    })
  },
  initialState
);
