import React from 'react';
import styled from 'styled-components';
import ContentHeader from '../../modules/ContentHeader/ContentHeader';
import Button from '../../atoms/Button/RoundButton';

const Wrapper = styled.div``;

const MenuListView = () => {
  return (
    <Wrapper>
      <ContentHeader title="메뉴 관리">
        <Button variant="contained" color="primary">
          메뉴추가
        </Button>
      </ContentHeader>
    </Wrapper>
  );
};

export default MenuListView;
