import React from 'react';
import styled from 'styled-components';

const LogoStyled = styled.text`
  dominant-baseline: hanging;
  font: 2.5vw NanumSquareEB;
`;

const SecondStyled = styled.tspan`
  font: NanumSquareR;
`;

const Logo = () => {
  return (
    <svg width="350" height="60" xmlns="http://www.w3.org/2000/svg">
      <LogoStyled>
        SE<SecondStyled>Board</SecondStyled>
      </LogoStyled>
    </svg>
  );
};

export default Logo;
