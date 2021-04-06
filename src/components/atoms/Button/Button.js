import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Buttons from '@material-ui/core/Button';

const ButtonStyled = styled(Buttons)`
  margin: 0 2px;
  border-radius: 32px;
  font-weight: bold;

  background: ${({ color }) =>
    color === 'primary' ? props => props.theme.mainColor : color};
  &:hover {
    background: ${({ color }) =>
      color === 'primary' ? props => props.theme.mainColorHover : color};
  }
`;

const Button = ({ children, variant, color, disabled, href, size }) => {
  return (
    <ButtonStyled
      variant={variant}
      color={color}
      disabled={disabled}
      href={href}
      size={size}
    >
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.string
};

Button.defaultProps = {
  children: '',
  variant: 'contained',
  color: 'primary',
  disabled: false,
  href: null,
  size: 'small'
};

export default Button;
