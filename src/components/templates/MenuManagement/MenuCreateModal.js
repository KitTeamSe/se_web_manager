import React from 'react';
import PropTypes from 'prop-types';
import AddDialog from '../../modules/AddDialog/AddDialog';
/**
 *  content를 받아와서 DialogContent 컴포넌트 생성.
 */
const MenuCreateModal = ({ open, setOpen, values, onChange }) => {
  return (
    <div>
      <menuDialog>
    </div>
  );
};

MenuCreateModal.defaultProps = {
  open: false,
  values: [{}]
};

MenuCreateModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.object)
};

export default MenuCreateModal;
