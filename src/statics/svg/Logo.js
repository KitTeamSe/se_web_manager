import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LogoStyled = styled.text`
  user-select: none;
  dominant-baseline: hanging;
  font: 1.5rem NanumSquareEB !important;
  fill: ${({ color }) => color || (props => props.theme.mainColor)};
`;

const SecondStyled = styled.tspan`
  font-family: NanumSquareR !important;
`;

const Logo = ({ color }) => {
  return (
    <svg width="230" height="28" xmlns="http://www.w3.org/2000/svg">
      <LogoStyled y="5" color={color}>
        SE&nbsp;<SecondStyled>Board 관리자</SecondStyled>
      </LogoStyled>
    </svg>
  );
};

Logo.propTypes = {
  color: PropTypes.string
};

Logo.defaultProps = {
  color: null
};

export default Logo;
