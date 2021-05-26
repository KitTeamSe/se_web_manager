import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AuthorityMappingAddForm from './AddForm';

import {
  changeField,
  addAuthorityMapping,
  initialize
} from '../../../modules/manage/authorityMapping';
import AuthorityMappingData from '../../../statics/data/AuthorityMappingData';

const AddFormContainer = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const { form, add, addError } = useSelector(({ authorityMapping }) => ({
    form: authorityMapping.authorityMapping,
    add: authorityMapping.add,
    addError: authorityMapping.addError
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
    const { authorityId, groupId } = form;
    dispatch(
      addAuthorityMapping({
        authorityId,
        groupId,
        token
      })
    );
  };

  useEffect(() => {
    if (addError) {
      setError(addError.response);
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
    <AuthorityMappingAddForm
      head={AuthorityMappingData}
      form={form}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
      goBack={goBack}
    />
  );
};

export default withRouter(AddFormContainer);
