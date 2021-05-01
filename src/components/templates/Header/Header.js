import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '../../modules/AppBar/AppBar';
import SideMenu from '../../modules/SideMenu/SideMenu';

const Header = ({ open, setOpen, menuItems }) => {
  return (
    <>
      <AppBar open={open} setOpen={setOpen} />
      <SideMenu open={open} items={menuItems} />
    </>
  );
};
Header.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default Header;
