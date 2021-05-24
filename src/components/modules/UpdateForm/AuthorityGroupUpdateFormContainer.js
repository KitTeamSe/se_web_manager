import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AuthorityGroupUpdateForm from './UpdateForm';

import {
  changeField,
  loadAuthorityGroup,
  updateAuthorityGroup,
  initialize,
  initializeUpdate,
  changeFieldAll
} from '../../../modules/manage/authorityGroup';
import AuthorityGroupData from '../../../statics/data/AuthorityGroupData';

const UpdateFormContainer = ({ location, history, match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const [error, setError] = useState();
  const { form, update, updateError, authorityGroupData } = useSelector(
    ({ authorityGroup }) => ({
      form: authorityGroup.authorityGroup,
      update: authorityGroup.update,
      updateError: authorityGroup.updateError,
      authorityGroupData: authorityGroup.info
    })
  );

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(loadAuthorityGroup({ id, token }));
    const { description, name } = authorityGroupData.data;
    dispatch(
      changeFieldAll({
        description,
        name
      })
    );
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
    const { description, name } = form;

    dispatch(
      updateAuthorityGroup({
        id,
        description,
        name,
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
      dispatch(loadAuthorityGroup({ id, token }));
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
    <AuthorityGroupUpdateForm
      id={id}
      head={AuthorityGroupData}
      error={error}
      form={authorityGroupData.data}
      onSubmit={onSubmit}
      onChange={onChange}
      goBack={goBack}
    />
  );
};

export default withRouter(UpdateFormContainer);
