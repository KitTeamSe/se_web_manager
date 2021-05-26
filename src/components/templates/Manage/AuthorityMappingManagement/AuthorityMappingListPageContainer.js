import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AuthorityMappingListPage from './AuthorityMappingListPage';
import {
  loadAuthorityMappings,
  initialize
} from '../../../../modules/manage/authorityMapping';

const AuthorityMappingListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { authorityMappingListData, error, loadingData } = useSelector(
    ({ authorityMapping, loading }) => ({
      authorityMappingListData: authorityMapping.list,
      error: authorityMapping.listError,
      loadingData: loading['authorityMappings/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { direction, size } = { direction: 'ASC', size: 10 };
    const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });
    const token = localStorage.getItem('token');
    dispatch(loadAuthorityMappings({ direction, page, size, token }));
  }, [dispatch, location.search]);

  return (
    <AuthorityMappingListPage
      authorityMappingList={authorityMappingListData}
      error={error}
      loading={loadingData}
    />
  );
};

AuthorityMappingListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(AuthorityMappingListViewContainer);
