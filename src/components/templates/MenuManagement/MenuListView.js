import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import ReactRouterPropTypes from 'react-router-prop-types';
import { useHistory } from 'react-router-dom'; // router
import Button from '../../atoms/Button/RoundButton';
import ContentHeader from '../../modules/ContentHeader/ContentHeader';
// import Header from '../../modules/Header/Header';
import PageNumberButtonGroup from '../../modules/PageNumberButtonGroup/PageNumberButtonGroup';
// import Button from '../../atoms/Button/Button';
import Table from '../../modules/Table/TableWithRowAction';
// for redux
import { getMenuList } from '../../../modules/menu';
import MenuCreate from './MenuCreate';
import MenuDeleteModal from './MenuDeleteModal';

const Wrapper = styled.div`
  > * {
    margin-bottom: 1rem;
  }
`;
const PageNumWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

/*
headData / rowData 
현재는 props -> useSelector로 redux state 받아온 후 가공.
*/

const MenuListView = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const menuList = useSelector(state => state.menu.menuList);
  const [headData, setHeadData] = useState();
  const [rowData, setRowData] = useState();

  // Modal의 open state
  const [menuCreateModalOpen, setMenuCreateModalOpen] = useState(false);
  const [menuDeleteModalOpen, setMenuDeleteModalOpen] = useState(false);

  // Modal의 open 상태를 변경하는 함수. props.setOpen으로 전달
  const menuCreateToggle = () => {
    setMenuCreateModalOpen(!menuCreateModalOpen);
  };
  const menuDeleteToggle = () => {
    setMenuDeleteModalOpen(!menuDeleteModalOpen);
  };

  const arrangeMenuList = () => {
    // onRowClick을 각 row마다 설정하여 props로 내려주도록 함.
    const tempRows = menuList.data.map(menu => ({
      onRowClick: () => {
        history.push(`${match.url}/${menu.menuId}`);
      },
      cells: [
        menu.menuId,
        menu.menuOrder,
        menu.nameEng,
        menu.nameKor,
        menu.description
      ]
    }));
    setHeadData(['메뉴ID', '메뉴순서', '영어이름', '한글이름', '설명']);
    setRowData(tempRows);
  };
  const getMenuListFromStore = () => {
    dispatch(getMenuList());
  };
  // useEffect
  useEffect(() => {
    getMenuListFromStore();
  }, []);
  useEffect(() => {
    arrangeMenuList();
  }, [menuList]);

  return (
    <Wrapper>
      <ContentHeader class="header" title="메뉴 관리">
        <Button variant="contained" color="primary" onClick={menuCreateToggle}>
          메뉴추가
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={menuDeleteToggle}
        >
          메뉴삭제
        </Button>
      </ContentHeader>

      <Table key={rowData} headData={headData} rowData={rowData} hover />
      <PageNumWrapper>
        <PageNumberButtonGroup nowPage={1} maxPage={5} halfRange={2} />
      </PageNumWrapper>
      {/* Modal 컴포넌트 */}
      {menuCreateModalOpen ? (
        <MenuCreate open={menuCreateModalOpen} toggle={menuCreateToggle} />
      ) : (
        ''
      )}
      {menuDeleteModalOpen ? (
        <MenuDeleteModal
          open={menuDeleteModalOpen}
          setOpen={menuDeleteToggle}
        />
      ) : (
        ''
      )}
    </Wrapper>
  );
};
MenuListView.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};
export default MenuListView;
