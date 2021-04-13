import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Menu, FirstPage } from '@material-ui/icons';
import { appbarIconSize } from './iconSize';

const MenuIconStyles = styled(Menu)`
  ${appbarIconSize}
`;

const CloseIconStyles = styled(FirstPage)`
  ${appbarIconSize}
`;

const SideMenuIcon = ({ open, handleOpen }) => {
  return (
    <>
      {open ? (
        <CloseIconStyles onClick={() => handleOpen()} />
      ) : (
        <MenuIconStyles onClick={() => handleOpen()} />
      )}
    </>
  );
};

SideMenuIcon.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired
};

SideMenuIcon.defaultProps = {};

export default SideMenuIcon;
