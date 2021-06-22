import React from 'react';
import styled from 'styled-components';
import { ArrowForward } from '@material-ui/icons';
import { arrowIconSize } from './iconSize';

const ArrowRightStyles = styled(ArrowForward)`
  ${arrowIconSize}
`;

const ArrowRightIcon = () => {
  return <ArrowRightStyles />;
};

ArrowRightIcon.propTypes = {};

ArrowRightIcon.defaultProps = {};

export default ArrowRightIcon;
