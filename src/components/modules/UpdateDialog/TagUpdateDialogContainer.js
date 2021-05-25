import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import UpdateDialog from './UpdateDialog';

import {
  loadTag,
  loadTags,
  changeField,
  updateTag,
  initializeUpdate,
  changeFieldAll
} from '../../../modules/manage/tag';

const UpdateDialogContainer = ({
  match,
  location,
  data,
  title,
  head,
  open,
  setOpen
}) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const { form, update, error } = useSelector(({ tag }) => ({
    form: tag.tag,
    update: tag.update,
    updateError: tag.updateError
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
    const { tagId } = id;

    dispatch(
      updateTag({
        tagId,
        text,
        token
      })
    );
  };

  useEffect(() => {
    const { description, name } = data;
    dispatch(
      changeFieldAll({
        description,
        name
      })
    );
  }, []);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (update) {
      const token = localStorage.getItem('token');
      const { direction, size } = { direction: 'ASC', size: 10 };
      const { page = 1 } = qs.parse(location.search, {
        ignoreQueryPrefix: true
      });
      dispatch(loadTag({ id, token }));
      dispatch(loadTags({ direction, page, size, token }));
      setOpen();
    }
  }, [update, error, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(initializeUpdate());
    };
  }, [dispatch]);

  return (
    <UpdateDialog
      id={id}
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

UpdateDialogContainer.propTypes = {
  match: ReactRouterPropTypes.location.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  title: PropTypes.string.isRequired,
  head: PropTypes.arrayOf(PropTypes.array).isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default withRouter(UpdateDialogContainer);
