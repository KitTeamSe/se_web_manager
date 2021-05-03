import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
// import { Delete } from '@material-ui/icons';

const TextStyled = styled(Typography)`
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 10px;
  border-radius: 0;
  background-color: ${props => props.theme.mainColor};
`;

const NoCheckedDialog = () => {
  return (
    <Wrapper>
      <TextStyled>삭제할 목록을 선택해주세요.</TextStyled>
    </Wrapper>
  );
};

NoCheckedDialog.propTypes = {};

NoCheckedDialog.defaultProps = {};

export default NoCheckedDialog;
