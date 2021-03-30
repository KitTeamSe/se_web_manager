import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  Menu,
  Person,
  Info,
  Notifications,
  FirstPage
} from '@material-ui/icons';
import { Typography, Badge, Link } from '@material-ui/core';
import Bar from '../../atoms/Bar/Bar';
import IconButton from '../../atoms/IconButton/IconButton';
import Logo from '../../../statics/svg/Logo';

const LogoWrapper = styled(Typography)`
  flex-grow: 1;
  line-height: 0;
  font-size: 1rem;
`;

const iconSize = css`
  width: 30px;
  height: 30px;
`;

const MenuIcon = styled(Menu)`
  ${iconSize}
`;

const CloseIcon = styled(FirstPage)`
  ${iconSize}
`;

const InfoIcon = styled(Info)`
  ${iconSize}
`;

const NotificationsIcon = styled(Notifications)`
  ${iconSize}
`;

const PersonIcon = styled(Person)`
  ${iconSize}
`;

const AppBar = ({ open, setOpen }) => {
  const handleDrawerOpen = useCallback(() => {
    setOpen(true);
  }, [open]);

  const handleDrawerClose = useCallback(() => {
    setOpen(false);
  }, [open]);

  const doNothing = () => {
    return '#';
  };

  return (
    <Bar open={open}>
      {open ? (
        <IconButton onClick={() => handleDrawerClose()}>
          <CloseIcon onClick={() => handleDrawerClose()} />
        </IconButton>
      ) : (
        <IconButton onClick={() => handleDrawerOpen()}>
          <MenuIcon onClick={() => handleDrawerOpen()} />
        </IconButton>
      )}

      <LogoWrapper variant="h6">
        <Link href="./">
          <Logo />
        </Link>
      </LogoWrapper>

      <IconButton onClick={() => doNothing()}>
        <InfoIcon />
      </IconButton>
      <IconButton onClick={() => doNothing()}>
        <Badge badgeContent={1} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton onClick={() => doNothing()}>
        <PersonIcon />
      </IconButton>
    </Bar>
  );
};

AppBar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

AppBar.defaultProps = {};

export default AppBar;
