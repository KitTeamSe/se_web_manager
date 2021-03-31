import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Info } from '@material-ui/icons';
import { appbarIconSize } from './iconSize';

const InfoIconStyles = styled(Info)`
  ${appbarIconSize}
`;

const InfoIcon = ({ state, func }) => {
  return <InfoIconStyles state={state} func={func} />;
};

InfoIcon.propTypes = {
  state: PropTypes.bool,
  func: PropTypes.func
};

InfoIcon.defaultProps = {
  state: '',
  func: () => {}
};

export default InfoIcon;
