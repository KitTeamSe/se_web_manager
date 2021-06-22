import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import DeleteDialog from './DeleteDialog';
import {
  removeAccountMapping,
  loadAccountMappings
} from '../../../modules/manage/accountMapping';

const DeleteDialogContainer = ({
  history,
  location,
  title,
  data,
  open,
  setOpen,
  type
}) => {
  const dispatch = useDispatch();
  const { remove, error } = useSelector(({ accountMapping }) => ({
    remove: accountMapping.remove,
    error: accountMapping.removeError
  }));

  const onDelete = () => {
    const token = localStorage.getItem('token');
    const { id } = data;
    dispatch(removeAccountMapping({ id, token }));
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (remove) {
      const { direction, size } = { direction: 'ASC', size: 10 };
      const { page = 1 } = qs.parse(location.search, {
        ignoreQueryPrefix: true
      });
      const token = localStorage.getItem('token');
      dispatch(loadAccountMappings({ direction, page, size, token }));
      setOpen();
      history.goBack();
    }
  }, [remove, error, dispatch]);

  return (
    <DeleteDialog
      title={title}
      data={data}
      open={open}
      setOpen={setOpen}
      onClick={onDelete}
      type={type}
    />
  );
};

DeleteDialogContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.array),
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

DeleteDialogContainer.defaultProps = {
  title: '',
  data: [],
  open: false
};

export default withRouter(DeleteDialogContainer);
