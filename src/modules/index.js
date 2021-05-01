import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import menu, { menuSaga } from './menu';

import loading from './loading';
import auth, { authSaga } from './auth';
import lectureRoom, { lectureRoomSaga } from './schedule/lectureRoom';

const rootReducer = combineReducers({
  loading,
  auth,
  lectureRoom,
  menu
});

export function* rootSaga() {
  yield all([authSaga(), lectureRoomSaga(), menuSaga()]);
}

export default rootReducer;
