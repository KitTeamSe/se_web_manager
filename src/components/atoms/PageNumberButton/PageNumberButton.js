import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ButtonStyled = styled(Button)`
  background: ${props => props.backgroundColor};
`;

const PageNumberButton = ({
  child,
  variant,
  color,
  backgroundColor,
  disabled,
  href,
  onClick
}) => {
  return (
    <ButtonStyled
      variant={variant}
      color={color}
      backgroundColor={backgroundColor}
      disabled={disabled}
      href={href}
      onClick={onClick}
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
  href: '',
  onClick: () => {}
};

PageNumberButton.propTypes = {
  child: PropTypes.number.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func
};

export default PageNumberButton;
