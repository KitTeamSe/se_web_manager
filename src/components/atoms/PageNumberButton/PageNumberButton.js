import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ButtonStyled = styled(Button)`
  background-color: ${props => props.backgroundColor};
`;

const PageNumberButton = ({
  child,
  variant,
  color,
  backgroundColor,
  disabled,
  href
}) => {
  return (
    <ButtonStyled
      variant={variant}
      color={color}
      backgroundColor={backgroundColor}
      disabled={disabled}
      href={href}
    >
      {child}
    </ButtonStyled>
  );
};

PageNumberButton.defaultProps = {
  variant: '',
  color: '',
  backgroundColor: '',
  disabled: false,
  href: ''
};

PageNumberButton.propTypes = {
  child: PropTypes.number.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string
};

export default PageNumberButton;
