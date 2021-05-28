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

const CHANGE_SELECT = 'period/CHANGE_SELECT';
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

const [
  REMOVE_PERIOD,
  REMOVE_PERIOD_SUCCESS,
  REMOVE_PERIOD_FAILURE
] = createRequestActionTypes('period/REMOVE_PERIOD');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));
export const changeSelect = createAction(CHANGE_SELECT, ({ value }) => ({
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

export const removePeriod = createAction(REMOVE_PERIOD, ({ id, token }) => ({
  id,
  token
}));

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

const removePeriodSaga = createRequestSaga(REMOVE_PERIOD, api.removePeriod);

export function* periodSaga() {
  yield takeLatest(LOAD_PERIODS, loadPeriodsSaga);
  yield takeLatest(ADD_PERIOD, addPeriodSaga);
  yield takeLatest(REMOVE_PERIOD, removePeriodSaga);
  // yield takeLatest(UPDATE_PERIOD, updateSaga);
}

const initialState = {
  period: {
    periodOrder: '',
    name: '',
    endTime: '',
    startTime: '',
    note: ''
  },
  select: null,
  add: null,
  addError: null,
  update: null,
  updateError: null,
  remove: null,
  removeError: null,
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
    [CHANGE_SELECT]: (state, { payload: { value } }) => ({
      ...state,
      select: value
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
    }),
    [REMOVE_PERIOD_SUCCESS]: (state, { payload: remove }) => ({
      ...state,
      remove,
      removeError: null
    }),
    [REMOVE_PERIOD_FAILURE]: (state, { payload: removeError }) => ({
      ...state,
      removeError
    })
  },
  initialState
);
