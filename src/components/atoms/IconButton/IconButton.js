import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconButtons from '@material-ui/core/IconButton';

const IconButtonStyled = styled(IconButtons)`
  edge: start;
  color: inherit;
  aria-label: menu;
  padding: 8px;
`;

const IconButton = ({ children, onClick }) => {
  return <IconButtonStyled onClick={onClick}>{children}</IconButtonStyled>;
};

IconButton.propTypes = {
  children: PropTypes.shape({ root: PropTypes.string }).isRequired,
  onClick: PropTypes.func.isRequired
};

IconButton.defaultProps = {};

export default IconButton;
