import React, { useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadAccount, initialize } from '../../../../modules/manage/account';
import AccountInfoPage from './AccountInfoPage';

const AccountInfoViewContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { accountData, error, loadingData } = useSelector(
    ({ account, loading }) => ({
      accountData: account.info,
      error: account.infoError,
      loadingData: loading['accounts/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { id } = match.params;
    const token = localStorage.getItem('token');
    dispatch(loadAccount({ id, token }));
  }, [dispatch, location.search]);

  return (
    <AccountInfoPage
      account={accountData}
      error={error}
      loading={loadingData}
    />
  );
};

AccountInfoViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(AccountInfoViewContainer);
