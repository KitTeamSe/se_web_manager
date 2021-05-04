import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
// import produce from 'immer';
import * as api from '../../libs/api/schedule/period';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

// const CHANGE_FIELD = 'period/CHANGE_FIELD';
// const INITIALIZE = 'period/INITIALIZE';

// const [
//   LOAD_PERIOD,
//   LOAD_PERIOD_SUCCESS,
//   LOAD_PERIOD_FAILURE
// ] = createRequestActionTypes('period/LOAD_PERIOD');

const [
  LOAD_PERIODS,
  LOAD_PERIODS_SUCCESS,
  LOAD_PERIODS_FAILURE
] = createRequestActionTypes('period/LOAD_PERIODS');

// const [
//   ADD_PERIOD,
//   ADD_PERIOD_SUCCESS,
//   ADD_PERIOD_FAILURE
// ] = createRequestActionTypes('period/ADD_PERIOD');

// const [
//   UPDATE_PERIOD,
//   UPDATE_PERIOD_SUCCESS,
//   UPDATE_PERIOD_FAILURE
// ] = createRequestActionTypes('period/UPDATE_PERIOD');

// const [
//   REMOVE_PERIOD,
//   REMOVE_PERIOD_SUCCESS,
//   REMOVE_PERIOD_FAILURE
// ] = createRequestActionTypes('period/REMOVE_PERIOD');

// export const changeField = createAction(
//   CHANGE_FIELD,
//   ({ form, key, value }) => ({ form, key, value })
// );

// export const initialize = createAction(INITIALIZE, form => form);

export const loadPeriods = createAction(
  LOAD_PERIODS,
  ({ token, direction, page, size }) => ({ token, direction, page, size })
);

// export const addperiod = createAction(
//   ADD_PERIOD,
//   ({ building, capacity, note, roomNumber }) => ({
//     building,
//     capacity,
//     note,
//     roomNumber
//   })
// );

// export const updateperiod = createAction(
//   UPDATE_PERIOD,
//   ({ building, capacity, periodId, note, roomNumber }) => ({
//     building,
//     capacity,
//     periodId,
//     note,
//     roomNumber
//   })
// );

const loadPeriodsSaga = createRequestSaga(LOAD_PERIODS, api.getPeriods);

// const addSaga = createRequestSaga(ADD_PERIOD, api.signup);
// const updateSaga = createRequestSaga(UPDATE_PERIOD, api.signin);

export function* periodSaga() {
  yield takeLatest(LOAD_PERIODS, loadPeriodsSaga);
  // yield takeLatest(ADD_PERIOD, addSaga);
  // yield takeLatest(UPDATE_PERIOD, updateSaga);
}

const initialState = {
  period: {
    endTime: '',
    name: '',
    note: '',
    periodOrder: '',
    startTime: ''
  },
  // updateperiod: {
  // endTime: '',
  // name: '',
  // note: '',
  // periodId: '',
  // periodOrder: '',
  // startTime: ''
  // },
  // period: null,
  periods: null,
  error: null
};

export default handleActions(
  {
    [LOAD_PERIODS_SUCCESS]: (state, { payload: periods }) => ({
      ...state,
      periods,
      error: null
    }),
    [LOAD_PERIODS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      periods: null,
      error
    })
    // [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
    //   produce(state, draft => {
    //     draft[form][key] = value;
    //   }),
    // [INITIALIZE]: (state, { payload: form }) => ({
    //   ...state,
    //   [form]: initialState[form],
    //   authError: null
    // }),
    // [INITIALIZE_AUTH]: state => ({
    //   ...state,
    //   auth: null,
    //   authError: null
    // }),
    // [SIGNUP_SUCCESS]: (state, { payload: auth }) => ({
    //   ...state,
    //   authError: null,
    //   auth
    // }),
    // [SIGNUP_FAILURE]: (state, { payload: error }) => ({
    //   ...state,
    //   authError: error
    // }),
    // [SIGNIN_SUCCESS]: (state, { payload: auth }) => ({
    //   ...state,
    //   authError: null,
    //   auth
    // }),
    // [SIGNIN_FAILURE]: (state, { payload: error }) => ({
    //   ...state,
    //   authError: error
    // })
  },
  initialState
);
