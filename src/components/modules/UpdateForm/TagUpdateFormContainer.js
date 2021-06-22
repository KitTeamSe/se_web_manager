import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TagUpdateForm from './UpdateForm';

import {
  changeField,
  loadTag,
  updateTag,
  initialize,
  initializeUpdate,
  changeFieldAll
} from '../../../modules/manage/tag';
import TagData from '../../../statics/data/TagData';

const UpdateFormContainer = ({ location, history, match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const [error, setError] = useState();
  const { form, update, updateError, tagData } = useSelector(({ tag }) => ({
    form: tag.tag,
    update: tag.update,
    updateError: tag.updateError,
    tagData: tag.info
  }));

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(loadTag({ id, token }));
    const { text } = tagData.data;
    dispatch(changeFieldAll({ text }));
  }, []);

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
    const tagId = id;

    console.log(text, tagId);

    dispatch(
      updateTag({
        tagId,
        text,
        token
      })
    );
  };

  useEffect(() => {
    if (updateError) {
      setError(updateError.response);
      console.log(error);
    }
    if (update) {
      const token = localStorage.getItem('token');
      dispatch(loadTag({ id, token }));
      goBack();
      setError();
    }
  }, [update, updateError, dispatch, location.search]);

  useEffect(() => {
    return () => {
      dispatch(initializeUpdate());
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <TagUpdateForm
      id={id}
      head={TagData}
      error={error}
      form={tagData.data}
      onSubmit={onSubmit}
      onChange={onChange}
      goBack={goBack}
    />
  );
};

export default withRouter(UpdateFormContainer);
