import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PeriodAddForm from './AddForm';

import {
  changeField,
  addPeriod,
  initialize
} from '../../../modules/schedule/period';
import PeriodData from '../../../statics/data/PeriodData';

const AddFormContainer = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const { form, add, addError } = useSelector(({ period }) => ({
    form: period.period,
    add: period.add,
    addError: period.addError
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
      addPeriod({
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
    <PeriodAddForm
      head={PeriodData}
      form={form}
      error={error}
      onSubmit={onSubmit}
      onChange={onChange}
      goBack={goBack}
    />
  );
};

export default withRouter(AddFormContainer);
