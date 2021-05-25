import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TagAddForm from './AddForm';

import { changeField, addTag, initialize } from '../../../modules/manage/tag';
import TagData from '../../../statics/data/TagData';

const AddFormContainer = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const { form, add, addError } = useSelector(({ tag }) => ({
    form: tag.tag,
    add: tag.add,
    addError: tag.addError
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
    const { text } = form;
    dispatch(
      addTag({
        text,
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
    <TagAddForm
      head={TagData}
      form={form}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
      goBack={goBack}
    />
  );
};

export default withRouter(AddFormContainer);
