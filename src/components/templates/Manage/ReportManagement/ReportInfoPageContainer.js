import React, { useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadReport, initialize } from '../../../../modules/manage/report';
import ReportInfoPage from './ReportInfoPage';

const ReportInfoViewContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { reportData, error, loadingData } = useSelector(
    ({ report, loading }) => ({
      reportData: report.info,
      error: report.infoError,
      loadingData: loading['reports/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { id } = match.params;
    const token = localStorage.getItem('token');
    dispatch(loadReport({ id, token }));
  }, [dispatch, location.search]);

  return (
    <ReportInfoPage report={reportData} error={error} loading={loadingData} />
  );
};

ReportInfoViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(ReportInfoViewContainer);
