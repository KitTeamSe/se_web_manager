import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import AddDialog from './AddDialog';

import {
  loadTeachers,
  changeField as teacherChangeField,
  addTeacher,
  initializeAdd as teacherInitializeAdd
} from '../../../../modules/schedule/teacher';
import {
  changeField as periodChangeField,
  addPeriod,
  loadPeriods,
  initializeAdd as periodInitializeAdd
} from '../../../../modules/schedule/period';
import {
  changeField as subjectChangeField,
  addSubject,
  loadSubjects,
  initializeAdd as subjectInitializeAdd
} from '../../../../modules/schedule/subject';
import {
  changeField as lectureRoomChangeField,
  addLectureRoom,
  loadLectureRooms,
  initializeAdd as lectureRoomInitializeAdd
} from '../../../../modules/schedule/lectureRoom';

const handleSelector = type => {
  if (type === 'teacher') {
    return useSelector(({ teacher }) => ({
      form: teacher.teacher,
      add: teacher.add,
      addError: teacher.addError
    }));
  }
  if (type === 'subject') {
    return useSelector(({ subject }) => ({
      form: subject.subject,
      add: subject.add,
      addError: subject.addError
    }));
  }
  if (type === 'period') {
    return useSelector(({ period }) => ({
      form: period.period,
      add: period.add,
      addError: period.addError
    }));
  }
  if (type === 'lectureRoom') {
    return useSelector(({ lectureRoom }) => ({
      form: lectureRoom.lectureRoom,
      add: lectureRoom.add,
      addError: lectureRoom.addError
    }));
  }
  return null;
};

const AddDialogContainer = ({
  location,
  title,
  head,
  open,
  setOpen,
  addType
}) => {
  const dispatch = useDispatch();
  const { form, add, error } = handleSelector(addType);

  const onChange = e => {
    const { value, name } = e.target;
    if (addType === 'teacher')
      dispatch(
        teacherChangeField({
          key: name,
          value
        })
      );
    if (addType === 'subject')
      dispatch(
        subjectChangeField({
          key: name,
          value
        })
      );
    if (addType === 'period')
      dispatch(
        periodChangeField({
          key: name,
          value
        })
      );
    if (addType === 'lectureRoom')
      dispatch(
        lectureRoomChangeField({
          key: name,
          value
        })
      );
  };

  const onSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (addType === 'teacher') {
      const { department, name, note, type } = form;
      dispatch(addTeacher({ department, name, note, type, token }));
    }
    if (addType === 'subject') {
      const {
        subjectId,
        curriculum,
        type,
        code,
        name,
        grade,
        semester,
        credit
      } = form;
      dispatch(
        addSubject({
          subjectId,
          curriculum,
          type,
          code,
          name,
          grade,
          semester,
          credit,
          token
        })
      );
    }
    if (addType === 'period') {
      const { periodOrder, name, endTime, startTime, note } = form;
      dispatch(
        addPeriod({ periodOrder, name, endTime, startTime, note, token })
      );
    }
    if (addType === 'lectureRoom') {
      const { building, roomNumber, capacity, note } = form;
      dispatch(addLectureRoom({ building, roomNumber, capacity, note, token }));
    }
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (add) {
      const { direction, size } = { direction: 'ASC', size: 10 };
      const { page = 1 } = qs.parse(location.search, {
        ignoreQueryPrefix: true
      });
      const token = localStorage.getItem('token');
      if (addType === 'teacher')
        dispatch(loadTeachers({ direction, page, size, token }));
      if (addType === 'subject')
        dispatch(loadSubjects({ direction, page, size, token }));
      if (addType === 'period')
        dispatch(loadPeriods({ direction, page, size, token }));
      if (addType === 'lectureRoom')
        dispatch(loadLectureRooms({ direction, page, size, token }));
      setOpen();
    }
  }, [add, error, dispatch]);

  useEffect(() => {
    return () => {
      if (addType === 'teacher') dispatch(teacherInitializeAdd());
      if (addType === 'subject') dispatch(subjectInitializeAdd());
      if (addType === 'period') dispatch(periodInitializeAdd());
      if (addType === 'lectureRoom') dispatch(lectureRoomInitializeAdd());
    };
  }, [dispatch]);

  return (
    <AddDialog
      title={title}
      head={head}
      open={open}
      setOpen={setOpen}
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

AddDialogContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  title: PropTypes.string.isRequired,
  head: PropTypes.arrayOf(PropTypes.array).isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  addType: PropTypes.string.isRequired
};

export default withRouter(AddDialogContainer);
