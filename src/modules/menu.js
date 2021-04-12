// 액션 타입
import { call, put, takeLatest } from 'redux-saga/effects';
import { getMenuListApi, getMenuByIdApi } from '../libs/API/menu';

// 메뉴 리스트 조회 / 성공 / 실패
const GET_MENU_LIST = 'menu/GET_MENU_LIST';
const GET_MENU_LIST_SUCCESS = 'menu/GET_MENU_LIST_SUCCESS';
const GET_MENU_LIST_ERROR = 'menu/GET_MENU_LIST_ERROR';

// 메뉴ID조회 / 성공 / 실패
const GET_MENU_BY_ID = 'menu/GET_MENU_BY_ID';
const GET_MENU_BY_ID_SUCCESS = 'menu/GET_MENU_BY_ID_SUCCESS';
const GET_MENU_BY_ID_ERROR = 'menu/GET_MENU_BY_ID_ERROR';

// 액션 생성 함수
export const getMenuList = () => ({ type: GET_MENU_LIST });
export const getMenuById = id => ({ type: GET_MENU_BY_ID, id });

// state 초기값
const initialState = {
  menuList: {
    data: [
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
    ]
  },
  menuById: {
    data: {
      child: [],
      description: 'Menu Description',
      menuId: 0,
      menuOrder: 0,
      nameEng: 'Menu Name in Eng',
      nameKor: 'Menu Name in Kor'
    }
  }
};

// 사가 정의
function* getMenuListSaga() {
  try {
    const res = yield call(getMenuListApi);
    yield put({ type: GET_MENU_LIST_SUCCESS, payload: res });
  } catch (e) {
    yield put({ type: GET_MENU_LIST_ERROR, error: true, payload: e });
  }
}

function* getMenuByIdSaga(action) {
  try {
    const res = yield call(getMenuByIdApi, action.id);
    yield put({ type: GET_MENU_BY_ID_SUCCESS, payload: res });
  } catch (e) {
    yield put({ type: GET_MENU_BY_ID_ERROR, error: true, payload: e });
  }
}
// menu의 사가들을 합친 통합 사가
export function* menuSaga() {
  yield takeLatest(GET_MENU_LIST, getMenuListSaga);
  yield takeLatest(GET_MENU_BY_ID, getMenuByIdSaga);
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
    default:
      return state;
  }
}
