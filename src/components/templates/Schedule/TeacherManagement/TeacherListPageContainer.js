import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadTeachers,
  initialize,
  changeSelect
} from '../../../../modules/schedule/teacher';
import TeacherListPage from './TeacherListPage';

const TeacherListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { teachersData, error, loadingData, select } = useSelector(
    ({ teacher, loading }) => ({
      teachersData: teacher.list,
      error: teacher.listError,
      loadingData: loading['teachers/LOAD_TEACHERS'],
      select: teacher.select
    })
  );

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { direction, size } = { direction: 'ASC', size: 10 };
    const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });
    const token = localStorage.getItem('token');
    dispatch(loadTeachers({ direction, page, size, token }));
  }, [dispatch, location.search]);

  const handleSelect = i => {
    const { value = null } = { value: i };
    dispatch(changeSelect({ value }));
  };

  return (
    <TeacherListPage
      teachers={teachersData}
      error={error}
      loading={loadingData}
      select={select}
      handleSelect={handleSelect}
    />
  );
};

TeacherListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(TeacherListViewContainer);
