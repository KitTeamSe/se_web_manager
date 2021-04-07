import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from './App';
import * as sideMenu from './modules/sideMenu';

const AppContainer = ({ open, sideMenuOpen, sideMenuClose }) => {
  return (
    <App
      open={open}
      sideMenuOpen={sideMenuOpen}
      sideMenuClose={sideMenuClose}
    />
  );
};

const mapStateToProps = state => ({
  open: state.sideMenu.open
});

const mapDispatchToProps = dispatch => ({
  sideMenuOpen: () => dispatch(sideMenu.sideMenuOpen()),
  sideMenuClose: () => dispatch(sideMenu.sideMenuClose())
});

AppContainer.propTypes = {
  open: PropTypes.bool.isRequired,
  sideMenuOpen: PropTypes.func.isRequired,
  sideMenuClose: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
