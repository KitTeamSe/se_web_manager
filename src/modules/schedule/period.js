import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as api from '../../libs/api/schedule/period';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

const INITIALIZE = 'period/INITIALIZE';
const CHANGE_FIELD = 'period/CHANGE_FIELD';

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

const [
  ADD_PERIOD,
  ADD_PERIOD_SUCCESS,
  ADD_PERIOD_FAILURE
] = createRequestActionTypes('period/ADD_PERIOD');

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

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));

export const loadPeriods = createAction(
  LOAD_PERIODS,
  ({ token, direction, page, size }) => ({ token, direction, page, size })
);

export const initializeAdd = createAction(ADD_PERIOD);
export const addPeriod = createAction(
  ADD_PERIOD,
  ({ periodOrder, name, endTime, startTime, note, token }) => ({
    periodOrder,
    name,
    endTime,
    startTime,
    note,
    token
  })
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

const addPeriodSaga = createRequestSaga(ADD_PERIOD, api.addPeriod);
// const addSaga = createRequestSaga(ADD_PERIOD, api.signup);
// const updateSaga = createRequestSaga(UPDATE_PERIOD, api.signin);

export function* periodSaga() {
  yield takeLatest(LOAD_PERIODS, loadPeriodsSaga);
  yield takeLatest(ADD_PERIOD, addPeriodSaga);
  // yield takeLatest(UPDATE_PERIOD, updateSaga);
}

const initialState = {
  period: {
    periodOrder: '',
    name: '',
    endTime: [],
    startTime: [],
    note: ''
  },
  add: null,
  addError: null,
  update: null,
  updateError: null,
  delete: null,
  deleteError: null,
  info: null,
  infoError: null,
  list: null,
  listError: null
};

export default handleActions(
  {
    [INITIALIZE]: () => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, draft => {
        draft.period[key] = value;
      }),
    [LOAD_PERIODS_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_PERIODS_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      list: null,
      listError
    }),
    [ADD_PERIOD]: state => ({
      ...state,
      add: null,
      addError: null
    }),
    [ADD_PERIOD_SUCCESS]: (state, { payload: add }) => ({
      ...state,
      add,
      addError: null
    }),
    [ADD_PERIOD_FAILURE]: (state, { payload: addError }) => ({
      ...state,
      addError
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
