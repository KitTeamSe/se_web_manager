import React from 'react';
import PropTypes from 'prop-types';
import DeleteDialog from '../../modules/DeleteDialog/DeleteDialog';

/**
 *  content를 받아와서 DialogContent 컴포넌트 생성.
 */
const DeleteMenu = ({ open, setOpen }) => {
  return (
    <div>
      <DeleteDialog open={open} setOpen={setOpen} />
    </div>
  );
};

DeleteMenu.defaultProps = {
  open: false
};

DeleteMenu.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired
};

export default DeleteMenu;
