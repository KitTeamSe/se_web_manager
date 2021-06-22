import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { ArrowBack } from '@material-ui/icons';
import { arrowIconSize } from './iconSize';

const ArrowLeftStyles = styled(ArrowBack)`
  ${arrowIconSize}
`;

const ArrowLeftIcon = () => {
  return <ArrowLeftStyles />;
};

ArrowLeftIcon.propTypes = {};

ArrowLeftIcon.defaultProps = {};

export default ArrowLeftIcon;
