import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Buttons from '@material-ui/core/Button';

const padding = {
  small: '4px 12px',
  normal: '5px 16px'
};

const fontSize = {
  small: '0.875rem',
  normal: '1rem'
};

const ButtonStyled = styled(Buttons)`
  min-width: 75px;
  border-radius: 32px;
  font-weight: bold;
  padding: ${({ size }) => padding[size] || size};
  font-size: ${({ size }) => fontSize[size] || size};
  background: ${({ color }) =>
    color === 'primary' ? props => props.theme.mainColor : color};
  &:hover {
    background: ${({ color }) =>
      color === 'primary' ? props => props.theme.mainColorHover : color};
  }
`;

const RoundButton = ({
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

RoundButton.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
};

RoundButton.defaultProps = {
  children: '',
  variant: 'contained',
  color: 'primary',
  disabled: false,
  href: null,
  size: 'small',
  type: ''
};

export default RoundButton;
