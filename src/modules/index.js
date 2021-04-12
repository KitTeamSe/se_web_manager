import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import menu, { menuSaga } from './menu';
import sideMenu from './sideMenu';

const rootReducer = combineReducers({ menu, sideMenu });

export function* rootSaga() {
  yield all([menuSaga()]);
}

export default rootReducer;
