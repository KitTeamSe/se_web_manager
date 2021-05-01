import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
// import produce from 'immer';
import * as api from '../../libs/api/schedule/lectureRoom';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

// const CHANGE_FIELD = 'lectureRoom/CHANGE_FIELD';
// const INITIALIZE = 'lectureRoom/INITIALIZE';

// const [
//   LOAD_LECTURE_ROOM,
//   LOAD_LECTURE_ROOM_SUCCESS,
//   LOAD_LECTURE_ROOM_FAILURE
// ] = createRequestActionTypes('lectureRoom/LOAD_LECTURE_ROOM');

const [
  LOAD_LECTURE_ROOMS,
  LOAD_LECTURE_ROOMS_SUCCESS,
  LOAD_LECTURE_ROOMS_FAILURE
] = createRequestActionTypes('lectureRoom/LOAD_LECTURE_ROOMS');

// const [
//   ADD_LECTURE_ROOM,
//   ADD_LECTURE_ROOM_SUCCESS,
//   ADD_LECTURE_ROOM_FAILURE
// ] = createRequestActionTypes('lectureRoom/ADD_LECTURE_ROOM');

// const [
//   UPDATE_LECTURE_ROOM,
//   UPDATE_LECTURE_ROOM_SUCCESS,
//   UPDATE_LECTURE_ROOM_FAILURE
// ] = createRequestActionTypes('lectureRoom/UPDATE_LECTURE_ROOM');

// const [
//   REMOVE_LECTURE_ROOM,
//   REMOVE_LECTURE_ROOM_SUCCESS,
//   REMOVE_LECTURE_ROOM_FAILURE
// ] = createRequestActionTypes('lectureRoom/REMOVE_LECTURE_ROOM');

// export const changeField = createAction(
//   CHANGE_FIELD,
//   ({ form, key, value }) => ({ form, key, value })
// );

// export const initialize = createAction(INITIALIZE, form => form);

export const loadLectureRooms = createAction(
  LOAD_LECTURE_ROOMS,
  ({ page, size }) => ({ page, size })
);

// export const addLectureRoom = createAction(
//   ADD_LECTURE_ROOM,
//   ({ building, capacity, note, roomNumber }) => ({
//     building,
//     capacity,
//     note,
//     roomNumber
//   })
// );

// export const updateLectureRoom = createAction(
//   UPDATE_LECTURE_ROOM,
//   ({ building, capacity, lectureRoomId, note, roomNumber }) => ({
//     building,
//     capacity,
//     lectureRoomId,
//     note,
//     roomNumber
//   })
// );

const loadLectureRoomsSaga = createRequestSaga(
  LOAD_LECTURE_ROOMS,
  api.getLectureRooms
);

// const addSaga = createRequestSaga(ADD_LECTURE_ROOM, api.signup);
// const updateSaga = createRequestSaga(UPDATE_LECTURE_ROOM, api.signin);

export function* lectureRoomSaga() {
  yield takeLatest(LOAD_LECTURE_ROOMS, loadLectureRoomsSaga);
  // yield takeLatest(ADD_LECTURE_ROOM, addSaga);
  // yield takeLatest(UPDATE_LECTURE_ROOM, updateSaga);
}

const initialState = {
  // addLectureRoom: {
  //   building: '',
  //   capacity: '',
  //   note: '',
  //   roomNumber: ''
  // },
  // updateLectureRoom: {
  //   building: '',
  //   capacity: '',
  //   lectureRoomId: '',
  //   note: '',
  //   roomNumber: ''
  // },
  lectureRooms: null,
  // lectureRoom: null,
  error: null
};

export default handleActions(
  {
    [LOAD_LECTURE_ROOMS_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts
    }),
    [LOAD_LECTURE_ROOMS_FAILURE]: (state, { payload: posts }) => ({
      ...state,
      posts
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
