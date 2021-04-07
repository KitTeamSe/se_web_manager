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

const SideMenuIcon = ({ open, onClick }) => {
  return (
    <>
      {open ? (
        <CloseIconStyles onClick={onClick} />
      ) : (
        <MenuIconStyles onClick={onClick} />
      )}
    </>
  );
};

SideMenuIcon.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

SideMenuIcon.defaultProps = {};

export default SideMenuIcon;
