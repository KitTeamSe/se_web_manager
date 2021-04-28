import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import loading from './loading';
import auth, { authSaga } from './auth';
import lectureRoom, { lectureRoomSaga } from './schedule/lectureRoom';

const rootReducer = combineReducers({
  loading,
  auth,
  lectureRoom
});

export function* rootSaga() {
  yield all([authSaga(), lectureRoomSaga()]);
}

export default rootReducer;
