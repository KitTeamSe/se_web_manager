import React, { useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadBlacklist,
  initialize
} from '../../../../modules/manage/blacklist';
import BlacklistInfoPage from './BlacklistInfoPage';

const BlacklistInfoViewContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { blacklistData, error, loadingData } = useSelector(
    ({ blacklist, loading }) => ({
      blacklistData: blacklist.info,
      error: blacklist.infoError,
      loadingData: loading['blacklists/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { id } = match.params;
    const token = localStorage.getItem('token');
    dispatch(loadBlacklist({ id, token }));
  }, [dispatch, location.search]);

  return (
    <BlacklistInfoPage
      blacklist={blacklistData}
      error={error}
      loading={loadingData}
    />
  );
};

BlacklistInfoViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(BlacklistInfoViewContainer);
