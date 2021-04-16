import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import loading from './loading';
import auth, { authSaga } from './auth';
import menu, { menuSaga } from './menu';

const rootReducer = combineReducers({
  loading,
  auth,
  menu
});

export function* rootSaga() {
  yield all([authSaga(), menuSaga()]);
}

export default rootReducer;
