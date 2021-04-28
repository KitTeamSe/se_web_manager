import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Bar from '../../atoms/Bar/Bar';
import IconButton from '../../atoms/IconButton/IconButton';
import SideMenuIcon from '../../atoms/Icons/SideMenuIcon';
import Logo from '../../../statics/svg/Logo';
import AuthPopoverPage from '../../templates/Header/Auth/AuthPopoverPage';
import { HOME_URL } from '../../../statics/data/config';

const LogoWrapper = styled(Typography)`
  flex-grow: 1;
  line-height: 0;
  font-size: 2rem;
  transition-duration: 0.3s;
`;

const AppBar = ({ open, setOpen }) => {
  return (
    <Bar open={open}>
      <IconButton onClick={() => setOpen()}>
        <SideMenuIcon open={open} color="primary" />
      </IconButton>

      <LogoWrapper variant="h6">
        <Link to={HOME_URL}>
          <Logo />
        </Link>
      </LogoWrapper>

      <AuthPopoverPage />
    </Bar>
  );
};

AppBar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

AppBar.defaultProps = {};

export default AppBar;
