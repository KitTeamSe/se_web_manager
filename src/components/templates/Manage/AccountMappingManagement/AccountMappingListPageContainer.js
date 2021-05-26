import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AccountMappingListPage from './AccountMappingListPage';
import {
  loadAccountMappings,
  initialize
} from '../../../../modules/manage/accountMapping';

const AccountMappingListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { accountMappingListData, error, loadingData } = useSelector(
    ({ accountMapping, loading }) => ({
      accountMappingListData: accountMapping.list,
      error: accountMapping.listError,
      loadingData: loading['accountMappings/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { direction, size } = { direction: 'ASC', size: 10 };
    const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });
    const token = localStorage.getItem('token');
    dispatch(loadAccountMappings({ direction, page, size, token }));
  }, [dispatch, location.search]);

  return (
    <AccountMappingListPage
      accountMappingList={accountMappingListData}
      error={error}
      loading={loadingData}
    />
  );
};

AccountMappingListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(AccountMappingListViewContainer);
