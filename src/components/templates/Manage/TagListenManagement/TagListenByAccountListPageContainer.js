import React, { useState, useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadTagListenByAccount,
  initialize
} from '../../../../modules/manage/tagListen';
import TagListenByAccountListPage from './TagListenByAccountListPage';

const TagListenByAccountListPageContainer = ({ location, match, history }) => {
  const dispatch = useDispatch();
  const { tagListenListData, error, loadingData } = useSelector(
    ({ tagListen, loading }) => ({
      tagListenListData: tagListen.accountList,
      error: tagListen.accountListError,
      loadingData: loading['tagListens/LOAD_SUBJECTS']
    })
  );
  const { id } = match.params;
  const [newPage, setNewPage] = useState(1);

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });
    setNewPage(page);
    const token = localStorage.getItem('token');
    dispatch(loadTagListenByAccount({ id, token }));
  }, [dispatch, location.search]);

  return (
    <TagListenByAccountListPage
      history={history}
      id={id}
      tagListenList={tagListenListData}
      error={error}
      loading={loadingData}
      page={newPage}
      setPage={setNewPage}
    />
  );
};

TagListenByAccountListPageContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(TagListenByAccountListPageContainer);
