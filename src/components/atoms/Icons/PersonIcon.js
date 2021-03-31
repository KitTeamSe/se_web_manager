import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Person } from '@material-ui/icons';
import { appbarIconSize } from './iconSize';

const PersonIconStyles = styled(Person)`
  ${appbarIconSize}
`;

const PersonIcon = ({ state, func }) => {
  return <PersonIconStyles state={state} func={func} />;
};

PersonIcon.propTypes = {
  state: PropTypes.bool,
  func: PropTypes.func
};

PersonIcon.defaultProps = {
  state: '',
  func: () => {}
};

export default PersonIcon;
