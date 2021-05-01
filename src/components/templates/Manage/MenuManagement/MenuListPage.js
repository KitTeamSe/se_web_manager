import React from 'react';
import styled from 'styled-components';
import ContentHeader from '../../../modules/ContentHeader/ContentHeader';
import Button from '../../../atoms/Button/RoundButton';
// import Table from '../../modules/Table/Table';
import PaginationTable from '../../../modules/Table/PaginationTable';

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 8px;
`;

const head = [
  {
    key: 'count',
    name: '#',
    width: '5%'
  },
  {
    key: 'menuId',
    name: '메뉴ID',
    width: '10%'
  },
  {
    key: 'nameKor',
    name: '메뉴이름',
    width: '10%'
  },
  {
    key: 'nameEng',
    name: '메뉴이름',
    width: '10%'
  },
  {
    key: 'menuType',
    name: '타입',
    width: '10%'
  },
  {
    key: 'menuOrder',
    name: '순서',
    width: '5%'
  },
  {
    key: 'description',
    name: '설명',
    width: '20%'
  },
  {
    key: 'child',
    name: '하위',
    width: '30%'
  }
];

const MenuListPage = () => {
  const headItem = head;
  const tableItems = [];
  return (
    <Wrapper>
      <ContentHeader title="메뉴 관리">
        <Button variant="contained" color="primary">
          메뉴추가
        </Button>
      </ContentHeader>
      <ContentWrapper>
        <PaginationTable head={headItem} rows={tableItems} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default MenuListPage;
