import React, { useEffect } from 'react';
// import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadLectureRooms } from '../../../../modules/schedule/lectureRoom';
import LectureRoomListPage from './LectureRoomListPage';

const LectureRoomListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { lectureRoomsData, error, loadingData } = useSelector(
    ({ lectureRoom, loading }) => ({
      lectureRoomsData: lectureRoom.lectureRooms,
      error: lectureRoom.error,
      loadingData: loading['lectureRooms/LOAD_LECTURE_ROOMS']
    })
  );

  useEffect(() => {
    // const { direction, page, size } = qs.parse(location.search, {
    //   ignoreQueryPrefix: true
    // });
    const { direction, page, size } = { direction: 'ASC', page: 1, size: 10 };
    const token = localStorage.getItem('token');
    dispatch(loadLectureRooms({ direction, page, size, token }));
  }, [dispatch, location.search]);

  return (
    <LectureRoomListPage
      lectureRooms={lectureRoomsData}
      error={error}
      loading={loadingData}
    />
  );
};

LectureRoomListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(LectureRoomListViewContainer);
