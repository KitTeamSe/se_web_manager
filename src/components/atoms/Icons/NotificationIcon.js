import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Badge } from '@material-ui/core';
import { Notifications } from '@material-ui/icons';
import { appbarIconSize } from './iconSize';

const NotificationIconStyled = styled(Notifications)`
  ${appbarIconSize}
`;

const BadgeStyled = styled(Badge)`
  & span {
    height: 16px;
    min-width: 16px;
    font-size: 0.5rem;
    padding: 0 3px;
  }
`;

const NotificationIcon = ({ badgeContent }) => {
  return (
    <BadgeStyled badgeContent={badgeContent} overlap="circle" color="secondary">
      <NotificationIconStyled />
    </BadgeStyled>
  );
};

NotificationIcon.propTypes = {
  badgeContent: PropTypes.number
};

NotificationIcon.defaultProps = {
  badgeContent: null
};

export default NotificationIcon;
