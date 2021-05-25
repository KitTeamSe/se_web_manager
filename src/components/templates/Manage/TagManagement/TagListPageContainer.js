import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TagListPage from './TagListPage';
import { loadTags, initialize } from '../../../../modules/manage/tag';

const TagListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { tagListData, error, loadingData } = useSelector(
    ({ tag, loading }) => ({
      tagListData: tag.list,
      error: tag.listError,
      loadingData: loading['tags/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { direction, size } = { direction: 'ASC', size: 10 };
    const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });
    const token = localStorage.getItem('token');
    dispatch(loadTags({ direction, page, size, token }));
  }, [dispatch, location.search]);

  return (
    <TagListPage tagList={tagListData} error={error} loading={loadingData} />
  );
};

TagListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(TagListViewContainer);
