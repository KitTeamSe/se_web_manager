import React from 'react';
import styled from 'styled-components';
import Header from '../../modules/Header/Header';
import Button from '../../atoms/Button/Button';

const Wrapper = styled.div``;

const MenuListView = () => {
  return (
    <Wrapper>
      <Header title="메뉴 관리">
        <Button variant="contained" color="primary">
          메뉴추가
        </Button>
        <Button variant="contained" color="secondary">
          메뉴삭제
        </Button>
      </Header>
    </Wrapper>
  );
};

export default MenuListView;
