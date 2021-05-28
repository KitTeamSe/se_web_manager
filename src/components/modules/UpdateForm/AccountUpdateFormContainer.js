import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AccountUpdateForm from './UpdateForm';

import {
  changeField,
  loadAccount,
  updateAccount,
  initialize,
  initializeUpdate,
  changeFieldAll
} from '../../../modules/manage/account';
import { AccountUpdateData } from '../../../statics/data/AccountData';

const UpdateFormContainer = ({ location, history, match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const [error, setError] = useState();
  const { form, update, updateError, accountData } = useSelector(
    ({ account }) => ({
      form: account.account,
      update: account.update,
      updateError: account.updateError,
      accountData: account.info
    })
  );

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(loadAccount({ id, token }));
    const {
      informationOpenAgree,
      name,
      nickname,
      password,
      studentId
    } = accountData.data;
    dispatch(
      changeFieldAll({
        id,
        informationOpenAgree,
        name,
        nickname,
        password,
        studentId
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
    const { informationOpenAgree, name, nickname, password, studentId } = form;

    dispatch(
      updateAccount({
        id,
        informationOpenAgree,
        name,
        nickname,
        password,
        studentId,
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
    <AccountUpdateForm
      id={id}
      head={AccountUpdateData}
      error={error}
      form={accountData.data}
      onSubmit={onSubmit}
      onChange={onChange}
      goBack={goBack}
    />
  );
};

export default withRouter(UpdateFormContainer);
