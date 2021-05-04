import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  loadTeachers,
  changeField,
  addTeacher,
  initializeAdd
} from '../../../../modules/schedule/teacher';
import AddDialog from './AddDialog';

const TeacherAddDialog = ({ location, title, head, open, setOpen }) => {
  const dispatch = useDispatch();
  const { form, add, error } = useSelector(({ teacher }) => ({
    form: teacher.teacher,
    add: teacher.add,
    addError: teacher.addError
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        key: name,
        value
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    const { department, name, note, type } = form;
    const token = localStorage.getItem('token');
    dispatch(addTeacher({ department, name, note, type, token }));
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
      dispatch(loadTeachers({ direction, page, size, token }));
      setOpen();
    }
  }, [add, error, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(initializeAdd());
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

TeacherAddDialog.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  title: PropTypes.string.isRequired,
  head: PropTypes.arrayOf(PropTypes.array).isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default withRouter(TeacherAddDialog);
