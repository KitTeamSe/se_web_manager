import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadPeriods, initialize } from '../../../../modules/schedule/period';
import PeriodListPage from './PeriodListPage';

const PeriodListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { periodsData, error, loadingData } = useSelector(
    ({ period, loading }) => ({
      periodsData: period.list,
      error: period.listError,
      loadingData: loading['periods/LOAD_PERIODS'],
      select: period.select
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { direction, size } = { direction: 'ASC', size: 10 };
    const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });
    const token = localStorage.getItem('token');
    dispatch(loadPeriods({ direction, page, size, token }));
  }, [dispatch, location.search]);

  return (
    <PeriodListPage periods={periodsData} error={error} loading={loadingData} />
  );
};

PeriodListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(PeriodListViewContainer);
