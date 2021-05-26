import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AccountMappingAddForm from './AddForm';

import {
  changeField,
  addAccountMapping,
  initialize
} from '../../../modules/manage/accountMapping';
import AccountMappingData from '../../../statics/data/AccountMappingData';

const AddFormContainer = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const { form, add, addError } = useSelector(({ accountMapping }) => ({
    form: accountMapping.accountMapping,
    add: accountMapping.add,
    addError: accountMapping.addError
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
    const { accountId, groupId } = form;
    dispatch(
      addAccountMapping({
        accountId,
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
    <AccountMappingAddForm
      head={AccountMappingData}
      form={form}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
      goBack={goBack}
    />
  );
};

export default withRouter(AddFormContainer);
