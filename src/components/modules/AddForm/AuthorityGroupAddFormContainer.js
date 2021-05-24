import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AuthorityGroupAddForm from './AddForm';

import {
  changeField,
  addAuthorityGroup,
  initialize
} from '../../../modules/manage/authorityGroup';
import AuthorityGroupData from '../../../statics/data/AuthorityGroupData';

const AddFormContainer = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const { form, add, addError } = useSelector(({ authorityGroup }) => ({
    form: authorityGroup.authorityGroup,
    add: authorityGroup.add,
    addError: authorityGroup.addError
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
      addAuthorityGroup({
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
    <AuthorityGroupAddForm
      head={AuthorityGroupData}
      form={form}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
      goBack={goBack}
    />
  );
};

export default withRouter(AddFormContainer);
