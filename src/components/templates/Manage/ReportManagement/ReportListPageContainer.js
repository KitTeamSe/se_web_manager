import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReportListPage from './ReportListPage';
import { loadReports, initialize } from '../../../../modules/manage/report';

const ReportListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { reportListData, error, loadingData } = useSelector(
    ({ report, loading }) => ({
      reportListData: report.list,
      error: report.listError,
      loadingData: loading['reports/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { direction, size } = { direction: 'ASC', size: 10 };
    const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });
    const token = localStorage.getItem('token');
    dispatch(loadReports({ direction, page, size, token }));
  }, [dispatch, location.search]);

  return (
    <ReportListPage
      reportList={reportListData}
      error={error}
      loading={loadingData}
    />
  );
};

ReportListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(ReportListViewContainer);
