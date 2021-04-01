import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Bar from '../../atoms/Bar/Bar';
import IconButton from '../../atoms/IconButton/IconButton';
import InfoIcon from '../../atoms/Icons/InfoIcon';
import SideMenuIcon from '../../atoms/Icons/SideMenuIcon';
import NotificationIcon from '../../atoms/Icons/NotificationIcon';
import PersonIcon from '../../atoms/Icons/PersonIcon';
import Logo from '../../../statics/svg/Logo';

const LogoWrapper = styled(Typography)`
  flex-grow: 1;
  line-height: 0;
  font-size: 2rem;
`;

const AppBar = ({ open, setOpen, path }) => {
  // const [badgeContent, setBadgeContent] = useState(2);
  const badgeContent = 2;

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
      <IconButton
        onClick={() => (open ? handleDrawerClose() : handleDrawerOpen())}
      >
        <SideMenuIcon open={open} setOpen={setOpen} />
      </IconButton>

      <LogoWrapper variant="h6">
        <Link to={path}>
          <Logo />
        </Link>
      </LogoWrapper>

      <IconButton onClick={() => doNothing()}>
        <InfoIcon />
      </IconButton>
      <IconButton onClick={() => doNothing()}>
        <NotificationIcon badgeContent={badgeContent} />
      </IconButton>
      <IconButton onClick={() => doNothing()}>
        <PersonIcon />
      </IconButton>
    </Bar>
  );
};

AppBar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  path: PropTypes.string
};

AppBar.defaultProps = {
  path: '/'
};

export default AppBar;
