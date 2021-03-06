import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import AddDialog from './AddDialog';

import {
  changeField as periodChangeField,
  addPeriod,
  loadPeriods,
  initializeAdd as periodInitializeAdd
} from '../../../modules/schedule/period';

const AddDialogContainer = ({ location, title, head, open, setOpen }) => {
  const dispatch = useDispatch();
  const { form, add, error } = useSelector(({ period }) => ({
    form: period.period,
    add: period.add,
    addError: period.addError
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      periodChangeField({
        key: name,
        value
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const { periodOrder, name, endTime, startTime, note } = form;
    dispatch(addPeriod({ periodOrder, name, endTime, startTime, note, token }));
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (add) {
      const { direction, size } = { direction: 'ASC', size: 10 };
      const { page = 1 } = qs.parse(location.search, {
        ignoreQueryPrefix: true
      });
      const token = localStorage.getItem('token');
      dispatch(loadPeriods({ direction, page, size, token }));
      setOpen();
    }
  }, [add, error, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(periodInitializeAdd());
    };
  }, [dispatch]);

  return (
    <AddDialog
      title={title}
      head={head}
      open={open}
      setOpen={setOpen}
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

AddDialogContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  title: PropTypes.string.isRequired,
  head: PropTypes.arrayOf(PropTypes.array).isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default withRouter(AddDialogContainer);
