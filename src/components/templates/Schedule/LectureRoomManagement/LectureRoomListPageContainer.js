import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadLectureRooms,
  initialize
} from '../../../../modules/schedule/lectureRoom';
import LectureRoomListPage from './LectureRoomListPage';

const LectureRoomListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { lectureRoomsData, error, select, loadingData } = useSelector(
    ({ lectureRoom, loading }) => ({
      lectureRoomsData: lectureRoom.list,
      error: lectureRoom.listError,
      select: lectureRoom.select,
      loadingData: loading['lectureRooms/LOAD_LECTURE_ROOMS']
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

  return (
    <LectureRoomListPage
      lectureRooms={lectureRoomsData}
      select={select}
      error={error}
      loading={loadingData}
    />
  );
};

LectureRoomListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(LectureRoomListViewContainer);
