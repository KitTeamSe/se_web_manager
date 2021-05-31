import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TagListenAddForm from './AddForm';

import {
  changeField,
  addTagListen,
  initialize
} from '../../../modules/manage/tagListen';
import TagListenData from '../../../statics/data/TagListenData';

const AddFormContainer = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const { form, add, addError } = useSelector(({ tagListen }) => ({
    form: tagListen.tagListen,
    add: tagListen.add,
    addError: tagListen.addError
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
    const { tagId } = form;
    dispatch(
      addTagListen({
        tagId,
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
    <TagListenAddForm
      head={TagListenData}
      form={form}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
      goBack={goBack}
    />
  );
};

export default withRouter(AddFormContainer);
