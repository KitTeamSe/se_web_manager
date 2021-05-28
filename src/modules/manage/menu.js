import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as api from '../../libs/api/manage/menu';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

const INITIALIZE = 'menu/INITIALIZE';
const CHANGE_FIELD = 'menu/CHANGE_FIELD';
const CHANGE_FIELD_ALL = 'menu/CHANGE_FIELD_ALL';

const [
  LOAD_MENU,
  LOAD_MENU_SUCCESS,
  LOAD_MENU_FAILURE
] = createRequestActionTypes('menu/LOAD_MENU');

const [
  LOAD_MENUS,
  LOAD_MENUS_SUCCESS,
  LOAD_MENUS_FAILURE
] = createRequestActionTypes('menu/LOAD_MENUS');

const [ADD_MENU, ADD_MENU_SUCCESS, ADD_MENU_FAILURE] = createRequestActionTypes(
  'menu/ADD_MENU'
);

const [
  UPDATE_MENU,
  UPDATE_MENU_SUCCESS,
  UPDATE_MENU_FAILURE
] = createRequestActionTypes('menu/UPDATE_MENU');

const [
  REMOVE_MENU,
  REMOVE_MENU_SUCCESS,
  REMOVE_MENU_FAILURE
] = createRequestActionTypes('menu/REMOVE_MENU');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));

export const changeFieldAll = createAction(
  CHANGE_FIELD_ALL,
  ({ description, menuOrder, menuType, nameEng, nameKor, parentId, url }) => ({
    description,
    menuOrder,
    menuType,
    nameEng,
    nameKor,
    parentId,
    url
  })
);

export const loadMenu = createAction(LOAD_MENU, ({ id, token }) => ({
  id,
  token
}));

export const loadMenus = createAction(LOAD_MENUS, ({ token }) => ({ token }));

export const initializeAdd = createAction(ADD_MENU);
export const initializeUpdate = createAction(UPDATE_MENU);
export const addMenu = createAction(
  ADD_MENU,
  ({
    description,
    menuOrder,
    menuType,
    nameEng,
    nameKor,
    parentId,
    url,
    token
  }) => ({
    description,
    menuOrder,
    menuType,
    nameEng,
    nameKor,
    parentId,
    url,
    token
  })
);

export const removeMenu = createAction(REMOVE_MENU, ({ id, token }) => ({
  id,
  token
}));

export const updateMenu = createAction(
  UPDATE_MENU,
  ({
    menuId,
    description,
    menuOrder,
    menuType,
    nameEng,
    nameKor,
    parentId,
    url,
    token
  }) => ({
    menuId,
    description,
    menuOrder,
    menuType,
    nameEng,
    nameKor,
    parentId,
    url,
    token
  })
);

const loadMenuSaga = createRequestSaga(LOAD_MENU, api.getMenu);

const loadMenusSaga = createRequestSaga(LOAD_MENUS, api.getMenus);

const addMenuSaga = createRequestSaga(ADD_MENU, api.addMenu);

const removeMenuSaga = createRequestSaga(REMOVE_MENU, api.removeMenu);

const updateMenuSaga = createRequestSaga(UPDATE_MENU, api.updateMenu);

export function* menuSaga() {
  yield takeLatest(LOAD_MENU, loadMenuSaga);
  yield takeLatest(LOAD_MENUS, loadMenusSaga);
  yield takeLatest(ADD_MENU, addMenuSaga);
  yield takeLatest(REMOVE_MENU, removeMenuSaga);
  yield takeLatest(UPDATE_MENU, updateMenuSaga);
}

const initialState = {
  menu: {
    description: '',
    menuOrder: '',
    menuType: '',
    nameEng: '',
    nameKor: '',
    parentId: '',
    url: ''
  },
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
        draft.menu[key] = value;
      }),
    [CHANGE_FIELD_ALL]: (
      state,
      {
        payload: {
          description,
          menuOrder,
          menuType,
          nameEng,
          nameKor,
          parentId,
          url
        }
      }
    ) =>
      produce(state, draft => {
        draft.menu = {
          description,
          menuOrder,
          menuType,
          nameEng,
          nameKor,
          parentId,
          url
        };
      }),
    [LOAD_MENU_SUCCESS]: (state, { payload: info }) => ({
      ...state,
      info,
      infoError: null
    }),
    [LOAD_MENU_FAILURE]: (state, { payload: infoError }) => ({
      ...state,
      info: null,
      infoError
    }),
    [LOAD_MENUS_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_MENUS_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      list: null,
      listError
    }),
    [ADD_MENU]: state => ({
      ...state,
      add: null,
      addError: null
    }),
    [ADD_MENU_SUCCESS]: (state, { payload: add }) => ({
      ...state,
      add,
      addError: null
    }),
    [ADD_MENU_FAILURE]: (state, { payload: addError }) => ({
      ...state,
      addError
    }),
    [REMOVE_MENU_SUCCESS]: (state, { payload: remove }) => ({
      ...state,
      remove,
      removeError: null
    }),
    [REMOVE_MENU_FAILURE]: (state, { payload: removeError }) => ({
      ...state,
      removeError
    }),
    [UPDATE_MENU_SUCCESS]: (state, { payload: update }) => ({
      ...state,
      update,
      updateError: null
    }),
    [UPDATE_MENU_FAILURE]: (state, { payload: updateError }) => ({
      ...state,
      updateError
    })
  },
  initialState
);
