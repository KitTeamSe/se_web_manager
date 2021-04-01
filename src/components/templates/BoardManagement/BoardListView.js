import React from 'react';
import styled from 'styled-components';
import Header from '../../modules/Header/Header';
import Button from '../../atoms/Button/Button';

const Wrapper = styled.div``;

const BoardListView = () => {
  return (
    <Wrapper>
      <Header title="게시판 관리">
        <Button variant="contained" color="primary">
          게시판추가
        </Button>
        <Button variant="contained" color="secondary">
          게시판삭제
        </Button>
      </Header>
    </Wrapper>
  );
};

export default BoardListView;
