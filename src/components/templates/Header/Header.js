import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '../../modules/AppBar/AppBar';
import SideMenu from '../../modules/SideMenu/SideMenu';

const Header = ({ open, sideMenuOpen, sideMenuClose, menuItems, path }) => {
  return (
    <>
      <AppBar
        open={open}
        sideMenuOpen={sideMenuOpen}
        sideMenuClose={sideMenuClose}
        path={path}
      />
      <SideMenu open={open} items={menuItems} path={path} />
    </>
  );
};
Header.propTypes = {
  open: PropTypes.bool.isRequired,
  sideMenuOpen: PropTypes.func.isRequired,
  sideMenuClose: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.array).isRequired,
  path: PropTypes.string.isRequired
};

export default Header;
