import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AuthorityListPage from './AuthorityListPage';
import {
  loadAuthoritys,
  initialize
} from '../../../../modules/manage/authority';

const AuthorityListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { authorityListData, error, loadingData } = useSelector(
    ({ authority, loading }) => ({
      authorityListData: authority.list,
      error: authority.listError,
      loadingData: loading['authoritys/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { direction, size } = { direction: 'ASC', size: 10 };
    const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });
    const token = localStorage.getItem('token');
    dispatch(loadAuthoritys({ direction, page, size, token }));
  }, [dispatch, location.search]);

  return (
    <AuthorityListPage
      authorityList={authorityListData}
      error={error}
      loading={loadingData}
    />
  );
};

AuthorityListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(AuthorityListViewContainer);
