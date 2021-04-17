import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

const Wrapper = styled.div`
width: 100%
display: flex;
outline: 0;
position: relative;
justify-content: center;`;

const LoadingData = ({ isLoading }) => {
  return <Wrapper>{!isLoading || <CircularProgress />}</Wrapper>;
};

LoadingData.propTypes = {
  isLoading: PropTypes.bool
};

LoadingData.defaultProps = {
  isLoading: false
};

export default LoadingData;
