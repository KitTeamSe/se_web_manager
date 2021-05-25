import React, { useEffect, useState } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import AddDialog from './AddDialog';

import {
  loadTags,
  changeField,
  addTag,
  initializeAdd
} from '../../../modules/manage/tag';

const AddDialogContainer = ({ location, title, head, open, setOpen }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const { form, add, addError } = useSelector(({ tag }) => ({
    form: tag.tag,
    add: tag.add,
    addError: tag.addError
  }));

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
    dispatch(
      addTag({
        text,
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
      const { direction, size } = { direction: 'ASC', size: 10 };
      const { page = 1 } = qs.parse(location.search, {
        ignoreQueryPrefix: true
      });
      const token = localStorage.getItem('token');
      dispatch(loadTags({ direction, page, size, token }));
      setOpen();
      dispatch(initializeAdd());
    }
  }, [add, addError, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(initializeAdd());
    };
  }, []);

  return (
    <AddDialog
      title={title}
      head={head}
      open={open}
      setOpen={setOpen}
      form={form}
      error={error}
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