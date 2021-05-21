import React, { useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadAuthority,
  initialize
} from '../../../../modules/manage/authority';
import AuthorityInfoPage from './AuthorityInfoPage';

const AuthorityInfoViewContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { authorityData, error, loadingData } = useSelector(
    ({ authority, loading }) => ({
      authorityData: authority.info,
      error: authority.infoError,
      loadingData: loading['authoritys/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { id } = match.params;
    const token = localStorage.getItem('token');
    dispatch(loadAuthority({ id, token }));
  }, [dispatch, location.search]);

  return (
    <AuthorityInfoPage
      authority={authorityData}
      error={error}
      loading={loadingData}
    />
  );
};

AuthorityInfoViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(AuthorityInfoViewContainer);
