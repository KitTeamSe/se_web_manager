import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../libs/api/auth';
import createRequestSaga, {
  createRequestActionTypes
} from '../libs/createRequestSaga';

const TEMP_SET_USER = 'user/TEMP_SET_USER';

const [ACCOUNT, ACCOUNT_SUCCESS, ACCOUNT_FAILURE] = createRequestActionTypes(
  'user/ACCOUNT'
);

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const account = createAction(ACCOUNT);

const accountSaga = createRequestSaga(ACCOUNT, api.account);

export function* userSaga() {
  yield takeLatest(ACCOUNT, accountSaga);
}

const initialState = { user: null, token: null, checkError: null };

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user
    }),
    [ACCOUNT_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null
    }),
    [ACCOUNT_FAILURE]: (state, { payload: err }) => ({
      ...state,
      user: null,
      checkError: err
    })
  },
  initialState
);
