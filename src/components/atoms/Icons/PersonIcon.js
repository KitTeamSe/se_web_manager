import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Person } from '@material-ui/icons';
import { appbarIconSize } from './iconSize';

const PersonIconStyles = styled(Person)`
  ${appbarIconSize}
  color: ${({ color }) =>
    color === 'primary' ? props => props.theme.mainColor : color};
`;

const PersonIcon = ({ color }) => {
  return <PersonIconStyles color={color} />;
};

PersonIcon.propTypes = {
  color: PropTypes.string
};

PersonIcon.defaultProps = {
  color: null
};

export default PersonIcon;
