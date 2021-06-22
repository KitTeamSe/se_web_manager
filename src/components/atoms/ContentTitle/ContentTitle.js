import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const TypographyStyled = styled(Typography)`
  font-weight: 600;
  font-size: 1.7rem;
  user-select: none;
`;

const ContentTitle = ({ children }) => {
  return <TypographyStyled variant="h5">{children}</TypographyStyled>;
};

ContentTitle.propTypes = {
  children: PropTypes.string
};

ContentTitle.defaultProps = {
  children: null
};

export default ContentTitle;
