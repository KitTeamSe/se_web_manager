import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../libs/api/menu';
// import { startLoading, finishLoading } from './loading';
import createRequestSaga, {
  createRequestActionTypes
} from '../libs/createRequestSaga';

const [
  LOAD_MENUS,
  LOAD_MENUS_SUCCESS,
  LOAD_MENUS_FAILURE
] = createRequestActionTypes('auth/LOAD_MENUS');

const UNLOAD_MENUS = 'post/UNLOAD_MENUS';

export const loadMenus = createAction(LOAD_MENUS);
export const unloadMenus = createAction(UNLOAD_MENUS);

const loadMenusSaga = createRequestSaga(LOAD_MENUS, api.getMenus);

export function* menusSaga() {
  yield takeLatest(LOAD_MENUS, loadMenusSaga);
}

const initialState = {
  menus: null,
  error: null
};

export default handleActions(
  {
    [LOAD_MENUS_SUCCESS]: (state, { payload: menus }) => ({
      ...state,
      menus
    }),
    [LOAD_MENUS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error
    }),
    [UNLOAD_MENUS]: () => initialState
  },
  initialState
);
