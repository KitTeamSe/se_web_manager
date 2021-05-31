import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import loading from './loading';
import auth, { authSaga } from './auth';
import menu, { menuSaga } from './manage/menu';
import board, { boardSaga } from './manage/board';
import account, { accountSaga } from './manage/account';
import authority, { authoritySaga } from './manage/authority';
import authorityGroup, { authorityGroupSaga } from './manage/authorityGroup';
import accountMapping, { accountMappingSaga } from './manage/accountMapping';
import authorityMapping, {
  authorityMappingSaga
} from './manage/authorityMapping';
import tag, { tagSaga } from './manage/tag';
import tagListen, { tagListenSaga } from './manage/tagListen';
import blacklist, { blacklistSaga } from './manage/blacklist';
import report, { reportSaga } from './manage/report';

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
  account,
  authority,
  authorityGroup,
  authorityMapping,
  accountMapping,
  blacklist,
  report,
  tag,
  tagListen
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
    accountSaga(),
    authoritySaga(),
    authorityGroupSaga(),
    authorityMappingSaga(),
    accountMappingSaga(),
    blacklistSaga(),
    reportSaga(),
    tagSaga(),
    tagListenSaga()
  ]);
}

export default rootReducer;
