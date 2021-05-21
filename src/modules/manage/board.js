import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as api from '../../libs/api/manage/board';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

const INITIALIZE = 'board/INITIALIZE';
const CHANGE_FIELD = 'board/CHANGE_FIELD';
const CHANGE_FIELD_ALL = 'board/CHANGE_FIELD_ALL';

const [
  LOAD_BOARD,
  LOAD_BOARD_SUCCESS,
  LOAD_BOARD_FAILURE
] = createRequestActionTypes('board/LOAD_BOARD');

const [
  LOAD_BOARDS,
  LOAD_BOARDS_SUCCESS,
  LOAD_BOARDS_FAILURE
] = createRequestActionTypes('board/LOAD_BOARDS');

const [
  ADD_BOARD,
  ADD_BOARD_SUCCESS,
  ADD_BOARD_FAILURE
] = createRequestActionTypes('board/ADD_BOARD');

const [
  UPDATE_BOARD,
  UPDATE_BOARD_SUCCESS,
  UPDATE_BOARD_FAILURE
] = createRequestActionTypes('board/UPDATE_BOARD');

const [
  REMOVE_BOARD,
  REMOVE_BOARD_SUCCESS,
  REMOVE_BOARD_FAILURE
] = createRequestActionTypes('board/REMOVE_BOARD');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));

export const changeFieldAll = createAction(
  CHANGE_FIELD_ALL,
  ({
    description,
    boardOrder,
    boardType,
    nameEng,
    nameKor,
    parentId,
    url
  }) => ({
    description,
    boardOrder,
    boardType,
    nameEng,
    nameKor,
    parentId,
    url
  })
);

export const loadBoard = createAction(LOAD_BOARD, ({ id, token }) => ({
  id,
  token
}));

export const loadBoards = createAction(LOAD_BOARDS, ({ token }) => ({ token }));

export const initializeAdd = createAction(ADD_BOARD);
export const initializeUpdate = createAction(UPDATE_BOARD);
export const addBoard = createAction(
  ADD_BOARD,
  ({ nameEng, nameKor, token }) => ({
    nameEng,
    nameKor,
    token
  })
);

export const removeBoard = createAction(REMOVE_BOARD, ({ id, token }) => ({
  id,
  token
}));

export const updateBoard = createAction(
  UPDATE_BOARD,
  ({ boardId, nameEng, nameKor, token }) => ({
    boardId,
    nameEng,
    nameKor,
    token
  })
);

const loadBoardSaga = createRequestSaga(LOAD_BOARD, api.getBoard);

const loadBoardsSaga = createRequestSaga(LOAD_BOARDS, api.getBoards);

const addBoardSaga = createRequestSaga(ADD_BOARD, api.addBoard);

const removeBoardSaga = createRequestSaga(REMOVE_BOARD, api.removeBoard);

const updateBoardSaga = createRequestSaga(UPDATE_BOARD, api.updateBoard);

export function* boardSaga() {
  yield takeLatest(LOAD_BOARD, loadBoardSaga);
  yield takeLatest(LOAD_BOARDS, loadBoardsSaga);
  yield takeLatest(ADD_BOARD, addBoardSaga);
  yield takeLatest(REMOVE_BOARD, removeBoardSaga);
  yield takeLatest(UPDATE_BOARD, updateBoardSaga);
}

const initialState = {
  board: {
    nameEng: '',
    nameKor: ''
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
        draft.board[key] = value;
      }),
    [CHANGE_FIELD_ALL]: (state, { payload: { nameEng, nameKor } }) =>
      produce(state, draft => {
        draft.board = {
          nameEng,
          nameKor
        };
      }),
    [LOAD_BOARD_SUCCESS]: (state, { payload: info }) => ({
      ...state,
      info,
      infoError: null
    }),
    [LOAD_BOARD_FAILURE]: (state, { payload: infoError }) => ({
      ...state,
      info: null,
      infoError
    }),
    [LOAD_BOARDS_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_BOARDS_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      list: null,
      listError
    }),
    [ADD_BOARD]: state => ({
      ...state,
      add: null,
      addError: null
    }),
    [ADD_BOARD_SUCCESS]: (state, { payload: add }) => ({
      ...state,
      add,
      addError: null
    }),
    [ADD_BOARD_FAILURE]: (state, { payload: addError }) => ({
      ...state,
      addError
    }),
    [REMOVE_BOARD_SUCCESS]: (state, { payload: remove }) => ({
      ...state,
      remove,
      removeError: null
    }),
    [REMOVE_BOARD_FAILURE]: (state, { payload: removeError }) => ({
      ...state,
      removeError
    }),
    [UPDATE_BOARD_SUCCESS]: (state, { payload: update }) => ({
      ...state,
      update,
      updateError: null
    }),
    [UPDATE_BOARD_FAILURE]: (state, { payload: updateError }) => ({
      ...state,
      updateError
    })
  },
  initialState
);
