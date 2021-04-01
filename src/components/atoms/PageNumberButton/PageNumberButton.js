import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ButtonStyled = styled(Button)``;

const PageNumberButton = ({ children, variant, color, disabled, href }) => {
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
PageNumberButton.defaultProps = {
  children: '',
  variant: '',
  color: '',
  disabled: false,
  href: ''
};

PageNumberButton.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string
};

export default PageNumberButton;
