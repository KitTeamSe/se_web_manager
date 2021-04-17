import React from 'react';
import PropTypes from 'prop-types';
import MenuUpdateDialog from '../../modules/MenuDialog/MenuUpdateDialog';

const UpdateMenu = ({ open, toggle }) => {
  return (
    <div>
      <MenuUpdateDialog title="메뉴 수정" open={open} toggle={toggle} />
    </div>
  );
};

UpdateMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};
export default UpdateMenu;
