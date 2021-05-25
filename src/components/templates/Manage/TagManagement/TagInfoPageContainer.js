import React, { useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadTag, initialize } from '../../../../modules/manage/tag';
import TagInfoPage from './TagInfoPage';

const TagInfoViewContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { tagData, error, loadingData } = useSelector(({ tag, loading }) => ({
    tagData: tag.info,
    error: tag.infoError,
    loadingData: loading['tags/LOAD_SUBJECTS']
  }));

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { id } = match.params;
    const token = localStorage.getItem('token');
    dispatch(loadTag({ id, token }));
  }, [dispatch, location.search]);

  return <TagInfoPage tag={tagData} error={error} loading={loadingData} />;
};

TagInfoViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(TagInfoViewContainer);
