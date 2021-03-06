import React, { useEffect } from 'react';
import qs from 'qs';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import DeleteDialog from './DeleteDialog';
import { removeTeacher, loadTeachers } from '../../../modules/schedule/teacher';

const DeleteDialogContainer = ({
  location,
  title,
  data,
  open,
  setOpen,
  type
}) => {
  const dispatch = useDispatch();
  const { remove, error } = useSelector(({ teacher }) => ({
    remove: teacher.remove,
    error: teacher.removeError
  }));

  const onDelete = () => {
    const token = localStorage.getItem('token');
    const id = data.teacherId;
    console.log(data.teacherId);
    dispatch(removeTeacher({ id, token }));
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
      dispatch(loadTeachers({ direction, page, size, token }));
      setOpen();
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
