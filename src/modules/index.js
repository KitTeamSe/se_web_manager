import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import loading from './loading';
import auth, { authSaga } from './auth';
import menu, { menuSaga } from './manage/menu';
import board, { boardSaga } from './manage/board';
import authority, { authoritySaga } from './manage/authority';
import authorityGroup, { authorityGroupSaga } from './manage/authorityGroup';
import accountMapping, { accountMappingSaga } from './manage/accountMapping';
import authorityMapping, {
  authorityMappingSaga
} from './manage/authorityMapping';
import tag, { tagSaga } from './manage/tag';

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
  authorityGroup,
  authorityMapping,
  accountMapping,
  tag
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
    authorityGroupSaga(),
    authorityMappingSaga(),
    accountMappingSaga(),
    tagSaga()
  ]);
}

export default rootReducer;
