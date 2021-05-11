import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as api from '../../libs/api/schedule/lectureRoom';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

const INITIALIZE = 'lectureRoom/INITIALIZE';
const CHANGE_FIELD = 'lectureRoom/CHANGE_FIELD';

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

const [
  ADD_LECTURE_ROOM,
  ADD_LECTURE_ROOM_SUCCESS,
  ADD_LECTURE_ROOM_FAILURE
] = createRequestActionTypes('lectureRoom/ADD_LECTURE_ROOM');

// const [
//   UPDATE_LECTURE_ROOM,
//   UPDATE_LECTURE_ROOM_SUCCESS,
//   UPDATE_LECTURE_ROOM_FAILURE
// ] = createRequestActionTypes('lectureRoom/UPDATE_LECTURE_ROOM');

const [
  REMOVE_LECTURE_ROOM,
  REMOVE_LECTURE_ROOM_SUCCESS,
  REMOVE_LECTURE_ROOM_FAILURE
] = createRequestActionTypes('lectureRoom/REMOVE_LECTURE_ROOM');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));

export const loadLectureRooms = createAction(
  LOAD_LECTURE_ROOMS,
  ({ token, direction, page, size }) => ({ token, direction, page, size })
);

export const initializeAdd = createAction(ADD_LECTURE_ROOM);
export const addLectureRoom = createAction(
  ADD_LECTURE_ROOM,
  ({ building, roomNumber, capacity, note, token }) => ({
    building,
    roomNumber,
    capacity,
    note,
    token
  })
);

export const removeLectureRoom = createAction(
  REMOVE_LECTURE_ROOM,
  ({ id, token }) => ({
    id,
    token
  })
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

const addLectureRoomSaga = createRequestSaga(
  ADD_LECTURE_ROOM,
  api.addLectureRoom
);

const removeLectureRoomSaga = createRequestSaga(
  REMOVE_LECTURE_ROOM,
  api.removeLectureRoom
);
// const addSaga = createRequestSaga(ADD_LECTURE_ROOM, api.signup);
// const updateSaga = createRequestSaga(UPDATE_LECTURE_ROOM, api.signin);

export function* lectureRoomSaga() {
  yield takeLatest(LOAD_LECTURE_ROOMS, loadLectureRoomsSaga);
  yield takeLatest(ADD_LECTURE_ROOM, addLectureRoomSaga);
  yield takeLatest(REMOVE_LECTURE_ROOM, removeLectureRoomSaga);
  // yield takeLatest(UPDATE_LECTURE_ROOM, updateSaga);
}

const initialState = {
  lectureRoom: {
    building: '',
    roomNumber: '',
    capacity: '',
    note: ''
  },
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
        draft.lectureRoom[key] = value;
      }),
    [LOAD_LECTURE_ROOMS_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_LECTURE_ROOMS_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_LECTURE_ROOMS_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      list: null,
      listError
    }),
    [ADD_LECTURE_ROOM]: state => ({
      ...state,
      add: null,
      addError: null
    }),
    [ADD_LECTURE_ROOM_SUCCESS]: (state, { payload: add }) => ({
      ...state,
      add,
      addError: null
    }),
    [ADD_LECTURE_ROOM_FAILURE]: (state, { payload: addError }) => ({
      ...state,
      addError
    }),
    [REMOVE_LECTURE_ROOM_SUCCESS]: (state, { payload: remove }) => ({
      ...state,
      remove,
      removeError: null
    }),
    [REMOVE_LECTURE_ROOM_FAILURE]: (state, { payload: removeError }) => ({
      ...state,
      removeError
    })
  },
  initialState
);
