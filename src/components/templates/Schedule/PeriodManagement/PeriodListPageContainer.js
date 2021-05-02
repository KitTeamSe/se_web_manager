import React, { useEffect } from 'react';
// import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadPeriods } from '../../../../modules/schedule/period';
import PeriodListPage from './PeriodListPage';

const PeriodListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { periodsData, error, loadingData } = useSelector(
    ({ period, loading }) => ({
      periodsData: period.periods,
      error: period.error,
      loadingData: loading['periods/LOAD_PERIODS']
    })
  );

  useEffect(() => {
    // const { direction, page, size } = qs.parse(location.search, {
    //   ignoreQueryPrefix: true
    // });
    const { direction, page, size } = { direction: 'ASC', page: 1, size: 10 };
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
