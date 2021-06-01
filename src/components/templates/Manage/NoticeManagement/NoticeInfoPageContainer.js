import React, { useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadNotice, initialize } from '../../../../modules/manage/notice';
import NoticeInfoPage from './NoticeInfoPage';

const NoticeInfoViewContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { noticeData, error, loadingData } = useSelector(
    ({ notice, loading }) => ({
      noticeData: notice.info,
      error: notice.infoError,
      loadingData: loading['notices/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { id } = match.params;
    const token = localStorage.getItem('token');
    dispatch(loadNotice({ id, token }));
  }, [dispatch, location.search]);

  return (
    <NoticeInfoPage notice={noticeData} error={error} loading={loadingData} />
  );
};

NoticeInfoViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(NoticeInfoViewContainer);
