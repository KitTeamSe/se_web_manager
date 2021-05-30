import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import * as api from '../../libs/api/manage/report';
import {
  createRequestSaga,
  createRequestActionTypes
} from '../../libs/createRequestSaga';

const INITIALIZE = 'report/INITIALIZE';
const CHANGE_FIELD = 'report/CHANGE_FIELD';
const CHANGE_FIELD_ALL = 'report/CHANGE_FIELD_ALL';

const [
  LOAD_REPORT,
  LOAD_REPORT_SUCCESS,
  LOAD_REPORT_FAILURE
] = createRequestActionTypes('report/LOAD_REPORT');

const [
  LOAD_REPORTS,
  LOAD_REPORTS_SUCCESS,
  LOAD_REPORTS_FAILURE
] = createRequestActionTypes('report/LOAD_REPORTS');

const [
  UPDATE_REPORT,
  UPDATE_REPORT_SUCCESS,
  UPDATE_REPORT_FAILURE
] = createRequestActionTypes('report/UPDATE_REPORT');

const [
  REMOVE_REPORT,
  REMOVE_REPORT_SUCCESS,
  REMOVE_REPORT_FAILURE
] = createRequestActionTypes('report/REMOVE_REPORT');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));

export const changeFieldAll = createAction(CHANGE_FIELD_ALL, ({ text }) => ({
  text
}));

export const loadReport = createAction(LOAD_REPORT, ({ id, token }) => ({
  id,
  token
}));

export const loadReports = createAction(
  LOAD_REPORTS,
  ({ token, direction, page, size }) => ({ token, direction, page, size })
);

export const initializeUpdate = createAction(UPDATE_REPORT);

export const removeReport = createAction(REMOVE_REPORT, ({ id, token }) => ({
  id,
  token
}));

export const updateReport = createAction(
  UPDATE_REPORT,
  ({ description, reportId, reportStatus, token }) => ({
    description,
    reportId,
    reportStatus,
    token
  })
);

const loadReportSaga = createRequestSaga(LOAD_REPORT, api.getReport);

const loadReportsSaga = createRequestSaga(LOAD_REPORTS, api.getReports);

const removeReportSaga = createRequestSaga(REMOVE_REPORT, api.removeReport);

const updateReportSaga = createRequestSaga(UPDATE_REPORT, api.updateReport);

export function* reportSaga() {
  yield takeLatest(LOAD_REPORT, loadReportSaga);
  yield takeLatest(LOAD_REPORTS, loadReportsSaga);
  yield takeLatest(REMOVE_REPORT, removeReportSaga);
  yield takeLatest(UPDATE_REPORT, updateReportSaga);
}

const initialState = {
  report: { reportId: '', text: '' },
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
        draft.report[key] = value;
      }),
    [CHANGE_FIELD_ALL]: (state, { payload: { text } }) =>
      produce(state, draft => {
        draft.report = { text };
      }),
    [LOAD_REPORT_SUCCESS]: (state, { payload: info }) => ({
      ...state,
      info,
      infoError: null
    }),
    [LOAD_REPORT_FAILURE]: (state, { payload: infoError }) => ({
      ...state,
      info: null,
      infoError
    }),
    [LOAD_REPORTS_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      list,
      listError: null
    }),
    [LOAD_REPORTS_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      list: null,
      listError
    }),
    [REMOVE_REPORT_SUCCESS]: (state, { payload: remove }) => ({
      ...state,
      remove,
      removeError: null
    }),
    [REMOVE_REPORT_FAILURE]: (state, { payload: removeError }) => ({
      ...state,
      removeError
    }),
    [UPDATE_REPORT_SUCCESS]: (state, { payload: update }) => ({
      ...state,
      update,
      updateError: null
    }),
    [UPDATE_REPORT_FAILURE]: (state, { payload: updateError }) => ({
      ...state,
      updateError
    })
  },
  initialState
);
