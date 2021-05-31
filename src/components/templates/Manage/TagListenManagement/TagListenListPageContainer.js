import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TagListenListPage from './TagListenListPage';
import {
  loadTagListens,
  initialize
} from '../../../../modules/manage/tagListen';

const TagListenListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { tagListenListData, error, loadingData } = useSelector(
    ({ tagListen, loading }) => ({
      tagListenListData: tagListen.list,
      error: tagListen.listError,
      loadingData: loading['tagListens/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { direction, size } = { direction: 'ASC', size: 10 };
    const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });
    const token = localStorage.getItem('token');
    dispatch(loadTagListens({ direction, page, size, token }));
  }, [dispatch, location.search]);

  return (
    <TagListenListPage
      tagListenList={tagListenListData}
      error={error}
      loading={loadingData}
    />
  );
};

TagListenListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(TagListenListViewContainer);
