import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadLectureRooms,
  initialize,
  changeSelect
} from '../../../../modules/schedule/lectureRoom';
import LectureRoomListPage from './LectureRoomListPage';

const LectureRoomListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { lectureRoomsData, error, loadingData, select } = useSelector(
    ({ lectureRoom, loading }) => ({
      lectureRoomsData: lectureRoom.list,
      error: lectureRoom.listError,
      loadingData: loading['lectureRooms/LOAD_LECTURE_ROOMS'],
      select: lectureRoom.select
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { direction, size } = { direction: 'ASC', size: 10 };
    const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });
    const token = localStorage.getItem('token');
    dispatch(loadLectureRooms({ direction, page, size, token }));
  }, [dispatch, location.search]);

  const handleSelect = i => {
    const { value = null } = { value: i };
    dispatch(changeSelect({ value }));
  };

  return (
    <LectureRoomListPage
      lectureRooms={lectureRoomsData}
      error={error}
      loading={loadingData}
      select={select}
      handleSelect={handleSelect}
    />
  );
};

LectureRoomListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(LectureRoomListViewContainer);
