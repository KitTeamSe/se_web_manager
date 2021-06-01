import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NoticeListPage from './NoticeListPage';
import { loadNotices, initialize } from '../../../../modules/manage/notice';

const NoticeListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { noticeListData, error, loadingData } = useSelector(
    ({ notice, loading }) => ({
      noticeListData: notice.list,
      error: notice.listError,
      loadingData: loading['notices/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { direction, size } = { direction: 'ASC', size: 10 };
    const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });
    const token = localStorage.getItem('token');
    dispatch(loadNotices({ direction, page, size, token }));
  }, [dispatch, location.search]);

  return (
    <NoticeListPage
      noticeList={noticeListData}
      error={error}
      loading={loadingData}
    />
  );
};

NoticeListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(NoticeListViewContainer);
