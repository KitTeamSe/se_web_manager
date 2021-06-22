import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AccountListPage from './AccountListPage';
import { loadAccounts, initialize } from '../../../../modules/manage/account';

const AccountListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { accountListData, error, loadingData } = useSelector(
    ({ account, loading }) => ({
      accountListData: account.list,
      error: account.listError,
      loadingData: loading['accounts/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { direction, size } = { direction: 'ASC', size: 10 };
    const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });
    const token = localStorage.getItem('token');
    dispatch(loadAccounts({ direction, page, size, token }));
  }, [dispatch, location.search]);

  return (
    <AccountListPage
      accountList={accountListData}
      error={error}
      loading={loadingData}
    />
  );
};

AccountListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(AccountListViewContainer);
