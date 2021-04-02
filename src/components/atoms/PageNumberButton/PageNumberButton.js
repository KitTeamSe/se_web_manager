import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ButtonStyled = styled(Button)`
  background-color: ${props => props.backgroundcolor};
`;

const PageNumberButton = ({
  children,
  variant,
  color,
  backgroundcolor,
  disabled,
  href
}) => {
  return (
    <ButtonStyled
      variant={variant}
      color={color}
      backgroundcolor={backgroundcolor}
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
  backgroundcolor: 'black',
  disabled: false,
  href: ''
};

PageNumberButton.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  backgroundcolor: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string
};

export default PageNumberButton;
