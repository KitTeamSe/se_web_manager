import React, { useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadAuthorityMapping,
  initialize
} from '../../../../modules/manage/authorityMapping';
import AuthorityMappingInfoPage from './AuthorityMappingInfoPage';

const AuthorityMappingInfoViewContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { authorityMappingData, error, loadingData } = useSelector(
    ({ authorityMapping, loading }) => ({
      authorityMappingData: authorityMapping.info,
      error: authorityMapping.infoError,
      loadingData: loading['authorityMappings/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { id } = match.params;
    const token = localStorage.getItem('token');
    dispatch(loadAuthorityMapping({ id, token }));
  }, [dispatch, location.search]);

  return (
    <AuthorityMappingInfoPage
      authorityMapping={authorityMappingData}
      error={error}
      loading={loadingData}
    />
  );
};

AuthorityMappingInfoViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(AuthorityMappingInfoViewContainer);
