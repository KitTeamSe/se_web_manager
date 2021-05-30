import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BlacklistListPage from './BlacklistListPage';
import {
  loadBlacklists,
  initialize
} from '../../../../modules/manage/blacklist';

const BlacklistListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { blacklistListData, error, loadingData } = useSelector(
    ({ blacklist, loading }) => ({
      blacklistListData: blacklist.list,
      error: blacklist.listError,
      loadingData: loading['blacklists/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { direction, size } = { direction: 'ASC', size: 10 };
    const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });
    const token = localStorage.getItem('token');
    dispatch(loadBlacklists({ direction, page, size, token }));
  }, [dispatch, location.search]);

  return (
    <BlacklistListPage
      blacklistList={blacklistListData}
      error={error}
      loading={loadingData}
    />
  );
};

BlacklistListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(BlacklistListViewContainer);
