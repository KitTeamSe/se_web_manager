import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../libs/api/menu';
// import { startLoading, finishLoading } from './loading';
import createRequestSaga, {
  createRequestActionTypes
} from '../libs/createRequestSaga';

const [
  LOAD_MENU,
  LOAD_MENU_SUCCESS,
  LOAD_MENU_FAILURE
] = createRequestActionTypes('auth/LOAD_MENU');

const UNLOAD_MENU = 'post/UNLOAD_MENU';

export const loadMenu = createAction(LOAD_MENU);
export const unloadMenu = createAction(UNLOAD_MENU);

const loadMenuSaga = createRequestSaga(LOAD_MENU, api.getMenu);

export function* menuSaga() {
  yield takeLatest(LOAD_MENU, loadMenuSaga);
}

const initialState = {
  menu: null,
  error: null
};

export default handleActions(
  {
    [LOAD_MENU_SUCCESS]: (state, { payload: menu }) => ({
      ...state,
      menu
    }),
    [LOAD_MENU_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error
    }),
    [UNLOAD_MENU]: () => initialState
  },
  initialState
);
