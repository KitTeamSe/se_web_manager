import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import loading from './loading';
import auth, { authSaga } from './auth';
import lectureRoom, { lectureRoomSaga } from './schedule/lectureRoom';
import period, { periodSaga } from './schedule/period';
import subject, { subjectSaga } from './schedule/subject';
import teacher, { teacherSaga } from './schedule/teacher';

const rootReducer = combineReducers({
  loading,
  auth,
  lectureRoom,
  period,
  subject,
  teacher
});

export function* rootSaga() {
  yield all([
    authSaga(),
    lectureRoomSaga(),
    periodSaga(),
    subjectSaga(),
    teacherSaga()
  ]);
}

export default rootReducer;
