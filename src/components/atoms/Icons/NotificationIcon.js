import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Badge } from '@material-ui/core';
import { Notifications } from '@material-ui/icons';
import { appbarIconSize } from './iconSize';

const NotificationIconStyles = styled(Notifications)`
  ${appbarIconSize}
`;

const NotificationIcon = ({ badgeContent, state, func }) => {
  return (
    <Badge badgeContent={badgeContent} color="secondary">
      <NotificationIconStyles state={state} func={func} />
    </Badge>
  );
};

NotificationIcon.propTypes = {
  badgeContent: PropTypes.number,
  state: PropTypes.bool,
  func: PropTypes.func
};

NotificationIcon.defaultProps = {
  badgeContent: null,
  state: '',
  func: () => {}
};

export default NotificationIcon;
