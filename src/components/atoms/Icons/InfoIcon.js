import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Info } from '@material-ui/icons';
import { appbarIconSize } from './iconSize';

const InfoIconStyles = styled(Info)`
  ${appbarIconSize}
`;

const InfoIcon = () => {
  return <InfoIconStyles />;
};

InfoIcon.propTypes = {};

InfoIcon.defaultProps = {};

export default InfoIcon;
