import React from 'react';
import PropTypes from 'prop-types';
import DeleteDialog from '../../modules/DeleteDialog/DeleteDialog';

/**
 *  content를 받아와서 DialogContent 컴포넌트 생성.
 */
const MenuDeleteModal = ({ open, setOpen }) => {
  return (
    <div>
      <DeleteDialog open={open} setOpen={setOpen} />
    </div>
  );
};

MenuDeleteModal.defaultProps = {
  open: false
};

MenuDeleteModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired
};

export default MenuDeleteModal;
