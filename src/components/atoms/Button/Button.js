import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Buttons from '@material-ui/core/Button';

const ButtonStyled = styled(Buttons)`
  margin: 0 2px;
  font-weight: bold;
  padding: ${({ size }) => (size === 'small' ? '4px 12px' : null)};
  background: ${({ color }) =>
    color === 'primary' ? props => props.theme.mainColor : color};
  &:hover {
    background: ${({ color }) =>
      color === 'primary' ? props => props.theme.mainColorHover : color};
  }
`;

const Button = ({
  children,
  variant,
  color,
  disabled,
  href,
  size,
  onClick,
  type
}) => {
  return (
    <ButtonStyled
      variant={variant}
      color={color}
      disabled={disabled}
      href={href}
      size={size}
      onClick={onClick}
      type={type}
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
  size: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
};

Button.defaultProps = {
  children: '',
  variant: 'contained',
  color: 'primary',
  disabled: false,
  href: null,
  size: 'small',
  type: ''
};

export default Button;
