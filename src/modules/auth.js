import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as api from '../libs/api/auth';
// import { startLoading, finishLoading } from './loading';
import createRequestSaga, {
  createRequestActionTypes
} from '../libs/createRequestSaga';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] = createRequestActionTypes(
  'auth/SIGNUP'
);

const [SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE] = createRequestActionTypes(
  'auth/SIGNIN'
);

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);

export const signup = createAction(
  SIGNUP,
  ({
    answer,
    email,
    id,
    name,
    nickname,
    password,
    phoneNumber,
    questionId,
    studentId,
    type
  }) => ({
    answer,
    email,
    id,
    name,
    nickname,
    password,
    phoneNumber,
    questionId,
    studentId,
    type
  })
);

export const signin = createAction(SIGNIN, ({ id, pw }) => ({
  id,
  pw
}));

const signupSaga = createRequestSaga(SIGNUP, api.signup);
const signinSaga = createRequestSaga(SIGNIN, api.signin);

export function* authSaga() {
  yield takeLatest(SIGNUP, signupSaga);
  yield takeLatest(SIGNIN, signinSaga);
}

const initialState = {
  signup: {
    answer: '',
    email: '',
    id: '',
    name: '',
    nickname: '',
    password: '',
    passwordCheck: '',
    phoneNumber: '',
    questionId: '',
    studentId: '',
    type: 'STUDENT'
  },
  signin: {
    id: '',
    pw: ''
  },
  auth: null,
  authError: null
};

export default handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null
    }),
    [SIGNUP_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth
    }),
    [SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error
    }),
    [SIGNIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth
    }),
    [SIGNIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error
    })
  },
  initialState
);
