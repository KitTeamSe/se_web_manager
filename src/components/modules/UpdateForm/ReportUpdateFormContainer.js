import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReportUpdateForm from './UpdateForm';

import {
  changeField,
  loadReport,
  updateReport,
  initialize,
  initializeUpdate,
  changeFieldAll
} from '../../../modules/manage/report';
import { ReportUpdateData } from '../../../statics/data/ReportData';

const UpdateFormContainer = ({ location, history, match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const [error, setError] = useState();
  const { form, update, updateError, reportData } = useSelector(
    ({ report }) => ({
      form: report.report,
      update: report.update,
      updateError: report.updateError,
      reportData: report.info
    })
  );

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(loadReport({ id, token }));
    const reportId = id;
    const { description, reportStatus } = reportData.data;
    dispatch(
      changeFieldAll({
        reportId,
        description,
        reportStatus
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
    const { description } = form;
    const reportStatus = form.status;
    const reportId = id;
    dispatch(
      updateReport({
        description,
        reportStatus,
        reportId,
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
    <ReportUpdateForm
      id={id}
      head={ReportUpdateData}
      error={error}
      form={reportData.data}
      onSubmit={onSubmit}
      onChange={onChange}
      goBack={goBack}
    />
  );
};

export default withRouter(UpdateFormContainer);
