import React, { useCallback } from 'react';
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

const SideMenuIcon = ({ open, setOpen }) => {
  const handleDrawerOpen = useCallback(() => {
    setOpen(true);
  }, [open]);

  const handleDrawerClose = useCallback(() => {
    setOpen(false);
  }, [open]);

  return (
    <>
      {open ? (
        <CloseIconStyles onClick={() => handleDrawerClose()} />
      ) : (
        <MenuIconStyles onClick={() => handleDrawerOpen()} />
      )}
    </>
  );
};

SideMenuIcon.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

SideMenuIcon.defaultProps = {};

export default SideMenuIcon;
