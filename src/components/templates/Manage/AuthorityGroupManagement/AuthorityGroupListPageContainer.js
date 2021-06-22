import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AuthorityGroupListPage from './AuthorityGroupListPage';
import {
  loadAuthorityGroups,
  initialize
} from '../../../../modules/manage/authorityGroup';

const AuthorityGroupListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { authorityGroupListData, error, loadingData } = useSelector(
    ({ authorityGroup, loading }) => ({
      authorityGroupListData: authorityGroup.list,
      error: authorityGroup.listError,
      loadingData: loading['authorityGroups/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { direction, size } = { direction: 'ASC', size: 10 };
    const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });
    const token = localStorage.getItem('token');
    dispatch(loadAuthorityGroups({ direction, page, size, token }));
  }, [dispatch, location.search]);

  return (
    <AuthorityGroupListPage
      authorityGroupList={authorityGroupListData}
      error={error}
      loading={loadingData}
    />
  );
};

AuthorityGroupListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(AuthorityGroupListViewContainer);
