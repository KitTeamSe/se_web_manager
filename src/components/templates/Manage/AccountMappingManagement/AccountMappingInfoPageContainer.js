import React, { useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadAccountMapping,
  initialize
} from '../../../../modules/manage/accountMapping';
import AccountMappingInfoPage from './AccountMappingInfoPage';

const AccountMappingInfoViewContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { accountMappingData, error, loadingData } = useSelector(
    ({ accountMapping, loading }) => ({
      accountMappingData: accountMapping.info,
      error: accountMapping.infoError,
      loadingData: loading['accountMappings/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { id } = match.params;
    const token = localStorage.getItem('token');
    dispatch(loadAccountMapping({ id, token }));
  }, [dispatch, location.search]);

  return (
    <AccountMappingInfoPage
      accountMapping={accountMappingData}
      error={error}
      loading={loadingData}
    />
  );
};

AccountMappingInfoViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(AccountMappingInfoViewContainer);
