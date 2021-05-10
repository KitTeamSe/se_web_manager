import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import AddDialog from './AddDialog';

import {
  changeField as subjectChangeField,
  addSubject,
  loadSubjects,
  initializeAdd as subjectInitializeAdd
} from '../../../../modules/schedule/subject';

const AddDialogContainer = ({ location, title, head, open, setOpen }) => {
  const dispatch = useDispatch();
  const { form, add, error } = useSelector(({ subject }) => ({
    form: subject.subject,
    add: subject.add,
    addError: subject.addError
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      subjectChangeField({
        key: name,
        value
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
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
      dispatch(loadSubjects({ direction, page, size, token }));
      setOpen();
    }
  }, [add, error, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(subjectInitializeAdd());
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
  setOpen: PropTypes.func.isRequired
};

export default withRouter(AddDialogContainer);
