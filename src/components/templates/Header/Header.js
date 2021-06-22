import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '../../modules/AppBar/AppBar';
import SideMenu from '../../modules/SideMenu/SideMenu';

const Header = ({ open, setOpen }) => {
  return (
    <>
      <AppBar open={open} setOpen={setOpen} />
      <SideMenu open={open} />
    </>
  );
};
Header.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default Header;
