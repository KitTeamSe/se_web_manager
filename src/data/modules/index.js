import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import menu, { menuSaga } from './menu';

const rootReducer = combineReducers({ menu });

export function* rootSaga() {
  yield all([menuSaga()]);
}

export default rootReducer;
