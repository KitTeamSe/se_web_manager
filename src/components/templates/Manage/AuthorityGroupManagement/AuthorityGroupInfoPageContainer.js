import React, { useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadAuthorityGroup,
  initialize
} from '../../../../modules/manage/authorityGroup';
import AuthorityGroupInfoPage from './AuthorityGroupInfoPage';

const AuthorityGroupInfoViewContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { authorityGroupData, error, loadingData } = useSelector(
    ({ authorityGroup, loading }) => ({
      authorityGroupData: authorityGroup.info,
      error: authorityGroup.infoError,
      loadingData: loading['authorityGroups/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { id } = match.params;
    const token = localStorage.getItem('token');
    dispatch(loadAuthorityGroup({ id, token }));
  }, [dispatch, location.search]);

  return (
    <AuthorityGroupInfoPage
      authorityGroup={authorityGroupData}
      error={error}
      loading={loadingData}
    />
  );
};

AuthorityGroupInfoViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(AuthorityGroupInfoViewContainer);
