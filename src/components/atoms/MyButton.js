import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { StylesProvider } from '@material-ui/core';

const ButtonStyled = styled(Button)`
  border-radius: 50px;
  background: ${({ color }) =>
    color === 'main' ? 'rgba(88, 191, 225, 0.93)' : color};
`;

const MyButton = ({ children, variant, color, disabled, href }) => {
  return (
    <StylesProvider injectFirst>
      <ButtonStyled
        variant={variant}
        color={color}
        disabled={disabled}
        href={href}
      >
        {children}
      </ButtonStyled>
    </StylesProvider>
  );
};

MyButton.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string
};

MyButton.defaultProps = {
  children: '',
  variant: '',
  color: '',
  disabled: false,
  href: null
};

export default MyButton;
