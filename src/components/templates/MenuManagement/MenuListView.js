import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../modules/Header/Header';
import PageNumberButtonGroup from '../../modules/PageNumberButtonGroup/PageNumberButtonGroup';
import Button from '../../atoms/Button/Button';
import Table from '../../modules/Table/Table';
// for redux
import { getMenuList } from '../../../data/modules/menu';

const Wrapper = styled.div`
  > * {
    margin-bottom: 1rem;
  }
`;

/*
headData / rowData 
현재는 props -> useSelector로 redux state 받아온 후 가공.
*/

const MenuListView = () => {
  const dispatch = useDispatch();
  const menuList = useSelector(state => state.menu.menuList);
  const [headData, setHeadData] = useState([]);
  const [rowData, setRowData] = useState([[]]);
  const renderMenuList = () => {
    const tempRows = menuList.data.map(menu => [
      menu.menuId,
      menu.menuOrder,
      menu.nameEng,
      menu.nameKor,
      menu.description
    ]);
    setHeadData(['메뉴ID', '메뉴순서', '영어이름', '한글이름', '설명']);
    setRowData(tempRows);
  };
  const getMenuListFromStore = () => {
    dispatch(getMenuList());
  };
  // useEffect
  useEffect(() => {
    console.log(
      'test_MenuList / useEffect / renderMenuList() when menuList change'
    );
    renderMenuList();
  }, [menuList]);

  return (
    <Wrapper>
      <Header class="header" title="메뉴 관리">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log(menuList.menuList);
          }}
        >
          메뉴추가
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            getMenuListFromStore();
          }}
        >
          메뉴삭제
        </Button>
        <button
          type="button"
          onClick={() => {
            console.log(menuList);
          }}
        >
          출력
        </button>
        <button
          type="button"
          onClick={() => {
            getMenuListFromStore();
          }}
        >
          dispatch
        </button>
      </Header>
      <Table key={rowData} headData={headData} rowData={rowData} />
      <PageNumberButtonGroup nowPage={1} maxPage={5} halfRange={2} />
    </Wrapper>
  );
};

export default MenuListView;
