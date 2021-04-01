import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Buttons from '@material-ui/core/Button';

const ButtonStyled = styled(Buttons)`
  border-radius: 32px;
  font-weight: bold;

  background: ${({ color }) =>
    color === 'primary' ? props => props.theme.mainColor : color};
  &:hover {
    background: ${({ color }) =>
      color === 'primary' ? props => props.theme.mainColorHover : color};
  }
`;

const Button = ({ children, variant, color, disabled, href }) => {
  return (
    <ButtonStyled
      variant={variant}
      color={color}
      disabled={disabled}
      href={href}
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
  href: PropTypes.string
};

Button.defaultProps = {
  children: '',
  variant: '',
  color: '',
  disabled: false,
  href: ''
};

export default Button;
