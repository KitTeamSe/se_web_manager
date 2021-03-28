import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  order: 1;
  position: relative;
  width: 100%;
  & div {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    width: 12.5%;
  }
`;

const LogoStyled = styled.h1`
  color: rgba(88, 191, 225, 0.93);
  font-size: 2.5vw;

  font-family: NanumSquareEB;
  font-family: NanumSquareR;
`;

const Logo = () => {
  return (
    <Wrapper>
      <div>
        <LogoStyled>SE</LogoStyled>
      </div>
      <div>
        <LogoStyled>Board</LogoStyled>
      </div>
    </Wrapper>
  );
};

export default Logo;
