import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import LectureRoomAddForm from './AddForm';

import {
  changeField,
  addLectureRoom,
  initialize
} from '../../../modules/schedule/lectureRoom';
import LectureRoomData from '../../../statics/data/LectureRoomData';

const AddFormContainer = ({ history, title }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const { form, add, addError } = useSelector(({ lectureRoom }) => ({
    form: lectureRoom.lectureRoom,
    add: lectureRoom.add,
    addError: lectureRoom.addError
  }));

  const goBack = () => {
    history.goBack();
  };

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
    const token = localStorage.getItem('token');
    const { description, name } = form;
    dispatch(
      addLectureRoom({
        description,
        name,
        token
      })
    );
  };

  useEffect(() => {
    if (addError) {
      setError(addError.response);
      console.log(error);
    }
    if (add) {
      goBack();
      setError();
    }
  }, [add, addError, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, []);

  return (
    <LectureRoomAddForm
      title={title}
      head={LectureRoomData}
      form={form}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
      goBack={goBack}
    />
  );
};

AddFormContainer.propTypes = {
  title: PropTypes.string.isRequired
};

export default withRouter(AddFormContainer);
