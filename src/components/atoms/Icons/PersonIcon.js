import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Person } from '@material-ui/icons';
import { appbarIconSize } from './iconSize';

const PersonIconStyles = styled(Person)`
  ${appbarIconSize}
`;

const PersonIcon = () => {
  return <PersonIconStyles />;
};

PersonIcon.propTypes = {};

PersonIcon.defaultProps = {};

export default PersonIcon;
