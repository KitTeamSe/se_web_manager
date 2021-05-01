// 액션 타입
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getMenuListApi,
  getMenuByIdApi,
  createMenuApi,
  deleteMenuApi,
  updateMenuApi
} from '../libs/api/menu';

// 메뉴 리스트 조회 / 성공 / 실패
const GET_MENU_LIST = 'menu/GET_MENU_LIST';
const GET_MENU_LIST_SUCCESS = 'menu/GET_MENU_LIST_SUCCESS';
const GET_MENU_LIST_ERROR = 'menu/GET_MENU_LIST_ERROR';

// 메뉴ID조회 / 성공 / 실패
const GET_MENU_BY_ID = 'menu/GET_MENU_BY_ID';
const GET_MENU_BY_ID_SUCCESS = 'menu/GET_MENU_BY_ID_SUCCESS';
const GET_MENU_BY_ID_ERROR = 'menu/GET_MENU_BY_ID_ERROR';

// 메뉴 생성 / 성공 / 실패
const CREATE_MENU = 'menu/CREATE_MENU';
const CREATE_MENU_SUCCESS = 'menu/CREATE_MENU_SUCCESS';
const CREATE_MENU_ERROR = 'menu/CREATE_MENU_ERROR';

// 메뉴 삭제 / 성공 / 실패
const DELETE_MENU = 'menu/DELETE_MENU';
const DELETE_MENU_SUCCESS = 'menu/DELETE_MENU_SUCCESS';
const DELETE_MENU_ERROR = 'menu/DELETE_MENU_SUCCESS';

// 메뉴 수정 / 성공 / 실패
const UPDATE_MENU = 'menu/UPDATE_MENU';
const UPDATE_MENU_SUCCESS = 'menu/UPDATE_MENU_SUCCESS';
const UPDATE_MENU_ERROR = 'menu/UPDATE_MENU_ERROR';

// 액션 생성 함수
export const getMenuList = () => ({ type: GET_MENU_LIST });
export const getMenuById = menuId => ({ type: GET_MENU_BY_ID, menuId });
export const createMenu = menuData => ({ type: CREATE_MENU, menuData });
export const deleteMenu = menuId => ({ type: DELETE_MENU, menuId });
export const updateMenu = menuData => ({ type: UPDATE_MENU, menuData });

// state 초기값
const initialState = {
  menuList: [
    {
      child: [],
      description: 'Menu Description',
      menuId: 1,
      menuOrder: 0,
      nameEng: 'Menu1_init Name in Eng',
      nameKor: 'Menu1_init Name in Kor'
    },
    {
      child: [],
      description: 'Menu Description',
      menuId: 2,
      menuOrder: 0,
      nameEng: 'Menu2_init Name in Eng',
      nameKor: 'Menu2_init Name in Kor'
    }
  ],
  menuById: {
    child: [],
    description: 'Menu Description',
    menuId: 0,
    menuOrder: 0,
    nameEng: 'Menu Name in Eng',
    nameKor: 'Menu Name in Kor',
    parentId: 1
  },
  menuCreateResult: { result: true },
  menuDeleteResult: { result: true }
};

// 사가 정의
function* getMenuListSaga() {
  try {
    const res = yield call(getMenuListApi);
    yield put({ type: GET_MENU_LIST_SUCCESS, payload: res.data.data });
  } catch (e) {
    yield put({ type: GET_MENU_LIST_ERROR, error: true, payload: e });
  }
}

function* getMenuByIdSaga(action) {
  try {
    const res = yield call(getMenuByIdApi, action.menuId);
    yield put({ type: GET_MENU_BY_ID_SUCCESS, payload: res.data.data });
  } catch (e) {
    yield put({ type: GET_MENU_BY_ID_ERROR, error: true, payload: e });
  }
}

function* createMenuSaga(action) {
  try {
    const res = yield call(createMenuApi, action.menuData);
    if (res.status === 201 && res.data.code === 1) {
      yield put({ type: CREATE_MENU_SUCCESS, payload: res.data });
    } else {
      yield new Promise(resolve => {
        alert('메뉴 생성 실패');
        resolve();
      });
      yield put({ type: CREATE_MENU_ERROR, payload: res.data });
    }
  } catch (e) {
    yield put({ type: CREATE_MENU_ERROR, error: true, payload: e });
  }
}

function* deleteMenuSaga(action) {
  try {
    const res = yield call(deleteMenuApi, action.menuId);
    console.log(res);
    if (res.status === 200 && res.data.code === 1) {
      yield put({ type: DELETE_MENU_SUCCESS, payload: res.data });
    } else {
      yield new Promise(resolve => {
        alert('메뉴 삭제 실패');
        resolve();
      });
      yield put({ type: CREATE_MENU_ERROR, payload: res.data });
    }
  } catch (e) {
    yield put({ type: DELETE_MENU_ERROR, error: true, payload: e });
  }
}

function* updateMenuSaga(action) {
  try {
    const res = yield call(updateMenuApi, action.menuData);
    if (res.status === 200 && res.data.code === 1) {
      yield put({ type: UPDATE_MENU_SUCCESS, payload: res.data });
    } else {
      yield new Promise(resolve => {
        alert('메뉴 생성 실패');
        resolve();
      });
      yield put({ type: UPDATE_MENU_ERROR, payload: res.data });
    }
  } catch (e) {
    yield put({ type: UPDATE_MENU_ERROR, error: true, payload: e });
  }
}
// menu의 사가들을 합친 통합 사가
export function* menuSaga() {
  yield takeLatest(GET_MENU_LIST, getMenuListSaga);
  yield takeLatest(GET_MENU_BY_ID, getMenuByIdSaga);
  yield takeLatest(CREATE_MENU, createMenuSaga);
  yield takeLatest(DELETE_MENU, deleteMenuSaga);
  yield takeLatest(UPDATE_MENU, updateMenuSaga);
}

// 리듀서 정의 export default
export default function menu(state = initialState, action) {
  switch (action.type) {
    // 메뉴 리스트 조회
    case GET_MENU_LIST:
      return state;
    case GET_MENU_LIST_SUCCESS:
      return {
        ...state,
        menuList: {
          ...action.payload
        }
      };
    case GET_MENU_LIST_ERROR:
      return state;

    // 메뉴 ID로 조회
    case GET_MENU_BY_ID:
      return state;
    case GET_MENU_BY_ID_SUCCESS:
      return {
        ...state,
        menuById: {
          ...action.payload
        }
      };
    case GET_MENU_BY_ID_ERROR:
      return state;

    // 메뉴 생성
    case CREATE_MENU:
      return state;
    case CREATE_MENU_SUCCESS:
      return {
        ...state,
        menuCreateResult: { ...action.payload }
      };
    case CREATE_MENU_ERROR:
      return state;

    case DELETE_MENU:
      return state;
    case DELETE_MENU_SUCCESS:
      return {
        ...state,
        menuDeleteResult: { ...action.payload }
      };
    case DELETE_MENU_ERROR:
      return state;
    // 하이요~~
    case UPDATE_MENU_SUCCESS:
      return {
        ...state,
        menuUpdateResult: { ...action.payload }
      };
    case UPDATE_MENU:
    case UPDATE_MENU_ERROR:
      return state;
    default:
      return state;
  }
}
