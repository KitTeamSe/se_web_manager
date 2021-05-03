import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadSubjects } from '../../../../modules/schedule/subject';
import SubjectListPage from './SubjectListPage';

const SubjectListViewContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { subjectsData, error, loadingData } = useSelector(
    ({ subject, loading }) => ({
      subjectsData: subject.subjects,
      error: subject.error,
      loadingData: loading['subjects/LOAD_SUBJECTS']
    })
  );

  useEffect(() => {
    const { direction, size } = { direction: 'ASC', size: 10 };
    const { page = 1 } = qs.parse(location.search, { ignoreQueryPrefix: true });
    const token = localStorage.getItem('token');
    dispatch(loadSubjects({ direction, page, size, token }));
  }, [dispatch, location.search]);

  return (
    <SubjectListPage
      subjects={subjectsData}
      error={error}
      loading={loadingData}
    />
  );
};

SubjectListViewContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired
};

export default withRouter(SubjectListViewContainer);
