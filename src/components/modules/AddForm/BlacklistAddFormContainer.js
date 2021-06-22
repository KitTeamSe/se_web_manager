import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BlacklistAddForm from './AddForm';

import {
  changeField,
  addBlacklist,
  initialize
} from '../../../modules/manage/blacklist';
import BlacklistData from '../../../statics/data/BlacklistData';

const AddFormContainer = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const { form, add, addError } = useSelector(({ blacklist }) => ({
    form: blacklist.blacklist,
    add: blacklist.add,
    addError: blacklist.addError
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
    const { ip, reason } = form;
    dispatch(addBlacklist({ ip, reason, token }));
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
    <BlacklistAddForm
      head={BlacklistData}
      form={form}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
      goBack={goBack}
    />
  );
};

export default withRouter(AddFormContainer);
