import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Menu, FirstPage } from '@material-ui/icons';
import { appbarIconSize } from './iconSize';

const MenuIconStyles = styled(Menu)`
  ${appbarIconSize}
  color: ${({ color }) =>
    color === 'primary' ? props => props.theme.mainColor : color};
`;

const CloseIconStyles = styled(FirstPage)`
  ${appbarIconSize}
  color: ${({ color }) =>
    color === 'primary' ? props => props.theme.mainColor : color};
`;

const SideMenuIcon = ({ open, color }) => {
  return (
    <>
      {open ? (
        <CloseIconStyles color={color} />
      ) : (
        <MenuIconStyles color={color} />
      )}
    </>
  );
};

SideMenuIcon.propTypes = {
  open: PropTypes.bool.isRequired,
  color: PropTypes.string
};

SideMenuIcon.defaultProps = {
  color: null
};

export default SideMenuIcon;
