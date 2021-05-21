import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import loading from './loading';
import auth, { authSaga } from './auth';
import menu, { menuSaga } from './manage/menu';
import board, { boardSaga } from './manage/board';
import authority, { authoritySaga } from './manage/authority';
import authorityGroup, { authorityGroupSaga } from './manage/authorityGroup';

import lectureRoom, { lectureRoomSaga } from './schedule/lectureRoom';
import period, { periodSaga } from './schedule/period';
import subject, { subjectSaga } from './schedule/subject';
import teacher, { teacherSaga } from './schedule/teacher';

const rootReducer = combineReducers({
  loading,
  auth,
  menu,
  lectureRoom,
  period,
  subject,
  teacher,
  board,
  authority,
  authorityGroup
});

export function* rootSaga() {
  yield all([
    authSaga(),
    lectureRoomSaga(),
    periodSaga(),
    subjectSaga(),
    teacherSaga(),
    menuSaga(),
    boardSaga(),
    authoritySaga(),
    authorityGroupSaga()
  ]);
}

export default rootReducer;
