import React, { useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadTagListen,
  initialize
} from '../../../../modules/manage/tagListen';
import TagListenInfoPage from './TagListenInfoPage';

const TagListenInfoViewContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { tagListenData, error, loadingData } = useSelector(
    ({ tagListen, loading }) => ({
      tagListenData: tagListen.info,
      error: tagListen.infoError,
      loadingData: loading['tagListens/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { id } = match.params;
    const token = localStorage.getItem('token');
    dispatch(loadTagListen({ id, token }));
  }, [dispatch, location.search]);

  return (
    <TagListenInfoPage
      tagListen={tagListenData}
      error={error}
      loading={loadingData}
    />
  );
};

TagListenInfoViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(TagListenInfoViewContainer);
